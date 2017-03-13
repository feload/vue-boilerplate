import defaultRoute from './default';
import homeRoutes from './home';

export default {
  mode: 'history',
  routes: [
    homeRoutes,
    defaultRoute
  ]
};