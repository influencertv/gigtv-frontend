import { useState, useEffect } from 'react'
import { Provider } from './context'
import { Token, AuthContext } from './types'
import { UsersPermissionsMe } from 'generated/graphql'

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState<Token>(null)
  const [user, setUser] = useState<Partial<UsersPermissionsMe>>(null)
  useEffect(() => {
    setToken(localStorage.getItem('@token'))
    const json = JSON.parse(localStorage.getItem('@user'))
    setUser(json)
  }, [])

  const contextValue: AuthContext = {
    token,
    user,
    logInUser(user, token) {
      setToken(token)
      setUser(user)
      localStorage.setItem('@token', token)
      localStorage.setItem('@user', JSON.stringify(user))
    },
    logOutUser() {
      localStorage.removeItem('@token')
      localStorage.removeItem('@user')
      setToken(null)
      setUser(null)
    },
    isLoggedIn: !!token,
  }

  return <Provider value={contextValue}>{children}</Provider>
}

export default AuthProvider
