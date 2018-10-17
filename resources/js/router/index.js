import Vue from 'vue'
import Router from 'vue-router'

import NotFoundComponent from '../components/NotFoundComponent'
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent'
import TaskIndexComponent from '../components/TaskIndexComponent'
import TaskViewComponent from '../components/TaskViewComponent'
import TaskCreateComponent from '../components/TaskCreateComponent'
import TaskEditComponent from '../components/TaskEditComponent'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
    { path: '*', component: NotFoundComponent },
    {
      path: '/',
      name: 'TaskIndex',
      component: TaskIndexComponent
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterComponent
    },
    {
      path: '/create',
      name: 'TaskCreate',
      component: TaskCreateComponent
    },
    {
      path: '/view/:id(\\d+)',
      name: 'TaskView',
      component: TaskViewComponent,
    },
    {
      path: '/edit/:id(\\d+)',
      name: 'TaskEdit',
      component: TaskEditComponent,
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   next()
// })
// router.afterEach((to, from) => {
// })

export default router
