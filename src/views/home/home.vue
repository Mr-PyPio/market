<template>
  <div id="home">
    <nav-bar class="homeNav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :class="{fixed: tabFixed}" class="topBar" :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControlFixed" />

    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" 
				@scroll="contentScroll" @pullingUp="pullUpLoad">

      <home-swiper :banners='banners' @swiperLoadOver="swiperLoadOver" />
      <home-recommend-view :recommends="recommends" />
      <home-popular />
      <tab-control :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl" />
      <goods-list  :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import { getHomeMultidata, getHomeGoods } from 'network/home.js'
	import { backTop } from 'common/mixin.js'

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
		mixins: [backTop],
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
        tabFixed: false,
        tabControlTop: 0,
				saveY: 0
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
			// 获取轮播图数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          // console.log(res);
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
			// 获取商品展示数据
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
				this.$refs.tabControlFixed.currentIndex = index;
				this.$refs.tabControl.currentIndex = index;
      },
			// 固定nav
      contentScroll(position) {
				// console.log(position.y)
        this.isShow = position.y <= -1500;
        this.tabFixed = this.tabControlTop < (-position.y);
      },
			// 下拉加载更多
      pullUpLoad() {
        const page = this.goods[this.currentType].page + 1;
        getHomeGoods(this.currentType, page).then(res => {
          this.goods[this.currentType].list.push(...res.data.list);
          this.goods[this.currentType].page += 1;
        })
      },
      swiperLoadOver() {
        this.tabControlTop = this.$refs.tabControl.$el.offsetTop - this.$refs.tabControl.$el.offsetHeight;
				// console.log(this.tabControlTop)
      }
    },
		activated() {
			this.$refs.scroll.scrollTo(0, this.saveY, 0)
		},
		deactivated() {
			this.saveY = this.$refs.scroll.scroll.y
		},
		
  }
</script>

<style scoped>
  #home {
    /* padding-top: 44px; */
    height: 100vh;
    /* vh  视口单位  100vh值100%视口 */
  }

  .homeNav {
    color: white;
    background: lightpink;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    z-index: 10;
  }

	.topBar{
		position: absolute;
		width: 100%;
		display: none;
	}

  .fixed {
    top: .88rem;
		z-index: 10;
		display: flex;
  }

  .scroll {
    height: calc(100% - 1.86rem);
  }
</style>