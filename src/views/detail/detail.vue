<template>
  <div id="detail">
    <detail-tab class="detailTab" @navClick="navClick" ref="navTab"></detail-tab>
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true" @scroll="contentScroll">
      <detail-swiper :topImg="topImg"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-shop :shopInfo="shopInfo"></detail-shop>
      <detail-info :detailInfo="detailDatas" @infoLoadOver="infoLoadOver"></detail-info>
      <detail-params-info :paramsInfo="paramsInfo" ref="paramsInfo"></detail-params-info>
      <detail-comment :commentDatas="commentDatas" ref="comment"></detail-comment>
      <detail-recommend :recommendDatas="recommendDatas" ref="recomment"></detail-recommend>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
    <detail-bottom @addToCart="addToCart"></detail-bottom>
  </div>
</template>

<script>
  import { getDetailData, Goods, Shop, GoodsParam, getRecommend } from 'network/detail.js'

  import Scroll from 'components/common/scroll/scroll.vue'
  import DetailTab from './detailChild/detailTab'
  import DetailSwiper from './detailChild/detailSwiper.vue'
  import DetailGoods from './detailChild/detailGoods.vue'
  import DetailShop from './detailChild/detailShop.vue'
  import DetailInfo from './detailChild/detailInfo.vue'
  import DetailParamsInfo from './detailChild/detailParamsInfo.vue'
  import DetailComment from './detailChild/detailComment.vue'
  import DetailRecommend from './detailChild/detailRecommend.vue'
  import DetailBottom from './detailChild/detailBottom.vue'
  import BackTop from '../../components/content/backTop/backTop.vue'

  export default {
    name: 'Detail',
    components: {
      DetailTab,
      DetailSwiper,
      DetailGoods,
      DetailShop,
      Scroll,
      DetailInfo,
      DetailParamsInfo,
      DetailComment,
      DetailRecommend,
      DetailBottom,
      BackTop
    },
    data() {
      return {
        iid: null,
        topImg: [],
        goods: {},
        shopInfo: {},
        detailDatas: {},
        paramsInfo: {},
        commentDatas: {},
        recommendDatas: [],
        isShow: false,
        topHeight: [0],
        currentIndex: 0
      }
    },
    methods: {
      getDetailData(iid) {
        getDetailData(iid).then(res => {
          const data = res.result;
          // 获取swiper图片
          this.topImg = res.result.itemInfo.topImages
          // 获取商品信息
          this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
          // 获取商家信息
          this.shopInfo = new Shop(data.shopInfo)
          // 获取详情图片
          this.detailDatas = data.detailInfo
          // 获取参数信息
          this.paramsInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
          // 获取评论信息
          if (data.rate.list) {
            this.commentDatas = data.rate.list[0];
          }
        })
      },
      // 获取推荐信息
      getRecommendDatas() {
        getRecommend().then((res, err) => {
          if (err) return
          this.recommendDatas = res.data.list
        })
      },
      contentScroll(position) {
				const positionY = -position.y
        this.isShow = positionY <= -2000;
        for (let i = 0; i < this.topHeight.length - 1; i++) {
          if (this.currentIndex !== i &&
            (positionY >= this.topHeight[i] && positionY < this.topHeight[i + 1])) {
            this.currentIndex = i;
            this.$refs.navTab.isClick = this.currentIndex
          }
        }
      },
      backClick() {
        this.$refs.scroll.scrollTo(0, 0)
      },
      infoLoadOver() {
        // this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
        this.topHeight.push(this.$refs.paramsInfo.$el.offsetTop - 44)
        this.topHeight.push(this.$refs.comment.$el.offsetTop - 44)
        this.topHeight.push(this.$refs.recomment.$el.offsetTop - 44)
        this.topHeight.push(Number.MAX_VALUE)
				console.log(this.topHeight)
      },
      navClick(index) {
        this.$refs.scroll.scrollTo(0, -this.topHeight[index], 500)
      },
			addToCart() {
				const product = {}
				product.image = this.topImg[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.nowPrice;
				product.iid = this.iid;
				this.$store.dispatch('addCart', product).then(res => {
					console.log(res)
				})

			}
    },
    created() {
      this.iid = this.$route.params.iid
      this.getDetailData(this.iid)
      this.getRecommendDatas()
    },
  }
</script>

<style scoped>
  .detailTab {
    z-index: 20;
    background-color: #fff;
  }

  #detail {
    position: relative;
    background-color: #fff;
    z-index: 100;
    height: 100vh;
  }

  .scroll {
    height: calc(100% - 1.88rem);
  }
</style>