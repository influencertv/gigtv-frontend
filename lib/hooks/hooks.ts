import { useEffect, useContext, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import io from 'socket.io-client'

import { API_URL } from '@/config'
import { authContext } from '@/lib/context/auth/context'
import { REGISTER_MUTATION, LOGIN_MUTATION } from '@/lib/api/mutations/auth'
import client from '@/lib/api/graphql-client'
import {
  RegisterMutation,
  RegisterMutationVariables,
  LoginMutation,
  LoginMutationVariables,
} from '@/generated/graphql'

export function useSignup() {
  const context = useContext(authContext)

  const signup = async (username: string, email: string, password: string) => {
    const data = await client.request<
      RegisterMutation,
      RegisterMutationVariables
    >(REGISTER_MUTATION, { username, email, password })

    context.logInUser(data.register.user, data.register.token)

    return {
      token: data.register.token,
    }
  }

  return {
    signup,
  }
}

export function useSignin() {
  const context = useContext(authContext)

  const signin = async (identifier: string, password: string) => {
    const data = await client.request<LoginMutation, LoginMutationVariables>(
      LOGIN_MUTATION,
      { identifier, password }
    )

    context.logInUser(data.login.user, data.login.token)

    return {
      token: data.login.token,
    }
  }

  const signout = () => {
    context.logOutUser()
  }

  return {
    signin,
    signout,
    isAuthenticated: context.isLoggedIn,
  }
}

export function usePrivateRoute(redirectUrl: string) {
  const context = useContext(authContext)
  const router = useRouter()

  if (!context.isLoggedIn) {
    router.replace(redirectUrl)
  }
}

export function useGuestRoute(redirectUrl: string) {
  const context = useContext(authContext)
  const router = useRouter()

  if (context.isLoggedIn) {
    router.replace(redirectUrl)
  }
}

const socket = io(API_URL)

export function useSocket(
  eventName: string,
  cb: (...args: unknown[]) => unknown
) {
  useEffect(() => {
    socket.on(eventName, cb)

    return function useSocketCleanup() {
      socket.off(eventName, cb)
    }
  }, [eventName, cb])

  return socket
}

export function useClickedOutside() {
  const [clickedOutside, setClickedOutside] = useState<boolean>(false)
  const elementRef = useRef(null)

  const handleClickOutside = (e: MouseEvent) => {
    if (elementRef.current && e.target) {
      setClickedOutside(!elementRef.current.contains(e.target as Node))
    }
  }

  const setElementRef = () => elementRef

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return {
    clickedOutside,
    setElementRef,
  }
}

// Hook
export function usePrevious<T>(value: T) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef<T>()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}
