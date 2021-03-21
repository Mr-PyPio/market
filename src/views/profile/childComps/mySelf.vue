<template>
	<div class="mySelf">
		<div class="selfMessage">
			<img class="logo" src="~assets/img/registerLogo.svg" alt="">
			<div class="register">
				<div @click="register">登录/注册</div>
				<div>暂无绑定手机号</div>
			</div>
		</div>
		<div class="message">
			<div class="balance underRegister">
				<div><em>0.00</em>元</div>
				<span>我的余额</span>
			</div>
			<div class="preferential underRegister">
				<div><em>0</em>个</div>
				<span>我的优惠</span>
			</div>
			<div class="integral underRegister">
				<div><em>0</em>分</div>
				<span>我的积分</span>
			</div>
		</div>
		<div class="center">
			<div>我的消息</div>
			<div>积分商城</div>
			<div>会员卡</div>
		</div>
		<div class="bottom">
			<div>我的购物车</div>
			<div>下载购物APP</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MySelf',
	methods: {
		register() {
			this.$router.push('/register')
		}
	},
}
</script>

<style scoped>
.mySelf{
	font-size: .3125rem;
	width: 100%;
}
.selfMessage{
	display: flex;
	background-color: rgb(251, 123, 144);
}
.logo{
	width: 1.5rem;
	height: 1.5rem;
	margin: .25rem .125rem .3125rem .375rem;
	border-radius: 1.5rem;
}
.register div:first-of-type{
	font-size: .3125rem;
	color: #fff;
}
.register div:nth-child(2){
	font-size: .25rem;
	color: #fff;
}
.register div:nth-child(2)::before{
	content: '';
	display: inline-block;
	width: .375rem;
	height: .375rem;
	background: url(~assets/img/Tel.png);
}
.register{
	padding-top: .6rem;
}
.message{
	display: flex;
  font-size: .3rem;
  text-align: center;
	border-bottom: .2375rem solid #c3c3c3;
}
.underRegister{
	flex: 1;
  padding-top: .375rem;
	padding-bottom: 0.37rem;
	border-right: 1px solid #c3c3c3;
}
.underRegister em{
	font-style: normal;
	font-size: .5rem;
	color: red;
}
.underRegister div{
	padding-bottom: 0.12rem;
}
.underRegister:last-child{
	border-right: 0px;
}
.center div,
.bottom div{
	padding: .21rem 0 .25rem 0;
	margin-left: .7rem;
	border-bottom: 1px solid #c3c3c3;
}
</style>