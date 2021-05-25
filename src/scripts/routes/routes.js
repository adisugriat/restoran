import Detail from '../views/pages/detail'
import Favorite from '../views/pages/favorite'
import Home from '../views/pages/home'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite
}

export default routes
