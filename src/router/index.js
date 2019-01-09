import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/home'
import Tables from '@/components/table'
import Forms from '@/components/form'
import Lists from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        { path: '/table', component: Tables, name: 'tables' },
        { path: '/form', component: Forms, name: 'forms' },
        { path: '/list', component: Lists, name: 'lists' }
      ]
    }
  ]
})
