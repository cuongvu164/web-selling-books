import SignInPage from './pages/SignInPage/SignInPage'
import SignUpPage from './pages/SignUpPage/SignUpPage'
import HomePage from './pages/HomePage/HomePage'

export const routers = [
  {path: '/', exact: true, Component: HomePage},
  {path: '/signin', exact: true, Component: SignInPage},
  {path: '/signup', exact: true, Component: SignUpPage},
]