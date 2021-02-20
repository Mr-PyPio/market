<template>
  <div id="home">
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="scroll">
      <home-swiper :banners='banners' />
      <home-recommend-view :recommends="recommends" />
      <home-popular />
      <tab-control class="tabControl" :title="['流行', '新款', '精选']" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
  </div>
</template>

<script>
  import { getHomeMultidata, getHomeGoods } from 'network/home.js'

  import NavBar from 'components/common/navBar/navBar'
  import TabControl from 'components/content/tabControl/tabControl.vue'
  import GoodsList from 'components/content/goods/goodsList.vue'
  import Scroll from 'components/common/scroll/scroll.vue'

  import HomeSwiper from './childComps/homeSwiper'
  import HomeRecommendView from './childComps/homeRecommendView'
  import HomePopular from './childComps/homePopular.vue'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomePopular,
      TabControl,
      GoodsList,
      Scroll,
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentType: 'pop',
      }
    },
    // 组件创建完立刻发送网络请求
    created() {
      // 请求多个数据
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');

    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 网络请求相关
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1
        })
      },
      /**
       * 事件监听相关
       */
      tabClick(index) {
        switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
        }
      }
    },
  }
</script>

<style scoped>
#home {
    padding-top: 44px;
		height: 100vh;
		/* vh  视口单位  100vh值100%视口 */
  }

  .homeNav {
    color: white;
    background: lightpink;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
  }

  .tabControl {
    position: sticky;
    top: 44px;
    z-index: 9;
  }

	.scroll{
		height: 500px;
	}
</style>