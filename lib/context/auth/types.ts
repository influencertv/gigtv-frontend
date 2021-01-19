import { UsersPermissionsMe } from 'generated/graphql'

export type Token = string | null

export type AuthContext = {
  token: Token
  isLoggedIn: boolean
  user: Partial<UsersPermissionsMe>
  logInUser: (user: Partial<UsersPermissionsMe>, token: Token) => void
  logOutUser: () => void
}
