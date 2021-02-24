<template>
  <div id="detail">
    <detail-tab class="detailTab"></detail-tab>
    <scroll class="scroll" ref="scroll" :probeType="3" :pullUpLoad="true">
      <detail-swiper :topImg="topImg"></detail-swiper>
      <detail-goods :goods="goods"></detail-goods>
      <detail-shop :shopInfo="shopInfo"></detail-shop>
      <detail-info :detailInfo="detailDatas"></detail-info>
      <detail-params-info :paramsInfo="paramsInfo"></detail-params-info>
      <detail-comment :commentDatas="commentDatas"></detail-comment>
      <detail-recommend :recommendDatas="recommendDatas"></detail-recommend>
    </scroll>
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
      DetailRecommend
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
        recommendDatas: []
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
            console.log(this.commentDatas)
          }
        })
      },
      // 获取推荐信息
      getRecommendDatas() {
        getRecommend().then((res, err) => {
          if (err) return
          this.recommendDatas = res.data.list
					console.log(this.recommendDatas)
        })
      },
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
    height: calc(100% - 44px);
  }
</style>