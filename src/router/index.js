import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('views/home/home.vue')
const Cart = () => import('views/cart/cart.vue')
const Category = () => import('views/category/category.vue')
const Profile = () => import('views/profile/profile.vue')
const Detail = () => import('views/detail/detail.vue')
const Register = () => import('views/register/register.vue')
const Login = () => import('views/register/registerChild/login.vue')

const routes = [
  {
		path: '',
		redirect: '/register'
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
	},
	{
		path: '/detail/:iid',
		component: Detail
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/login',
		component: Login
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
