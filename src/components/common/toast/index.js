import Toast from './toast.vue'

const obj = {}

obj.install = function (Vue) {
	//1.创建组件构造器
	const toastConstructor = Vue.extend(Toast)

	//2.new的方式，根据组件构造器，创建一个组件对象
	const toast = new toastConstructor()

	//3.手动挂载组件对象于元素上
	toast.$mount(document.createElement('div'))

	//4.toast.$el对应div
	document.body.appendChild(toast.$el)

	Vue.prototype.$toast = toast;
}

export default obj