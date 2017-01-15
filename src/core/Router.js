import VueRouter from 'vue-router';

import HomeComponent from '../containers/Home/Home';

Vue.use( VueRouter );

export default class Router extends VueRouter {

  constructor() {

    super({
      mode: 'history',
      routes: [
        {
          component: HomeComponent,
          name: 'home',
          path: '/',
        },
      ],
    });
  }
}
