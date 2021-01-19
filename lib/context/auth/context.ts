import { createContext } from 'react'

import { AuthContext } from './types'

const defaultValue: AuthContext = {
  token: null,
  user: null,
  logInUser: () => {
    console.warn('')
  },
  logOutUser: () => {
    console.warn('')
  },
  isLoggedIn: false,
}

export const authContext = createContext<AuthContext>(defaultValue)

export const Provider = authContext.Provider
