<template>
  <tab-bar id="mainTabBar">
    <tab-bar-item path="/home">
      <img slot="itemImg" src="~assets/img/tabBar/home.svg" alt="">
      <img slot="itemImgActive" src="~assets/img/tabBar/home-active.svg" alt="">
      <div slot="itemText">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="itemImg" src="~assets/img/tabBar//category.svg" alt="">
      <img slot="itemImgActive" src="~assets/img/tabBar/category-active.svg" alt="">
      <div slot="itemText">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="itemImg" src="~assets/img/tabBar/cart.svg" alt="">
      <img slot="itemImgActive" src="~assets/img/tabBar/cart-active.svg" alt="">
      <div slot="itemText">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="itemImg" src="~assets/img/tabBar/profile.svg" alt="">
      <img slot="itemImgActive" src="~assets/img/tabBar/profile-active.svg" alt="">
      <div slot="itemText">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  
	import TabBar from 'components/common/tabBar/tabBar.vue'
	import TabBarItem from 'components/common/tabBar/tabBarItem.vue'

  export default {
    name: 'mainTarBar',
    components: {
			TabBar,
			TabBarItem
    }
  }
</script>

<style>
#mainTabBar{
	font-size: .32rem;
	width: inherit;
	height: .98rem;
	background-color: #f1f1f1;
	text-align: center;
	position: fixed;
	display: flex;
	bottom: 0;
	box-shadow: 0 -0.02rem 0.02rem rgba(100, 100, 100, .2);
}
.itemText{
	font-size: .32rem;

}
</style>