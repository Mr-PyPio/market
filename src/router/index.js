import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/home.vue')
const Cart = () => import('views/cart/cart.vue')
const Category = () => import('views/category/category.vue')
const Profile = () => import('views/profile/profile.vue')

const routes = [
  {
		path: '',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/profile',
		component: Profile
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
