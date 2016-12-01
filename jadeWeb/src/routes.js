import Frame from './views/Frame'
import NotFound from './views/NotFound'

export default [{
  path: '/login',
  meta: {
    auth: false
  },
  component: resolve => require(['./views/Login'], resolve)
}, {
  path: '/products',
  component: Frame,
  children: [{
    path: 'index',
    component: resolve => require(['./views/products/index'], resolve)
  }]
}, {
  path: '*',
  component: NotFound
}]
