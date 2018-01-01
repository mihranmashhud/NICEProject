import Vue from 'vue'
import Router from 'vue-router'
// importing of components
import Home from './../components/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ],
  mode: 'history'
})
