import { HomePage, AboutPage } from 'pages'

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage
  }
]
