<template>
	<div v-if="Object.keys(detailInfo).length !== 0" class="goodsInfo">
    <div class="infoDesc clearFix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="infoKey">{{detailInfo.detailImage[0].key}}</div>
    <div class="infoList">
      <img v-for="(item, index) in detailInfo .detailImage[0].list" :src="item" alt="" @load="infoLoadOver">
    </div>
  </div>
</template>

<script>
export default {
	name: 'DetailInfo',
	props: {
		detailInfo: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			isLoad: false
		}
	},
	methods: {
		infoLoadOver() {
			if(!this.isLoad){
			this.$emit('infoLoadOver')
			this.isLoad = true
			}
		}
	},
}
</script>

<style scoped>
.goodsInfo {
    padding: .4rem 0;
    border-bottom: .1rem solid #f2f5f8;
  }

  .infoDesc {
    padding: 0 .3rem;
  }

  .infoDesc .start, .infoDesc .end {
    width: 1.8rem;
    height: .02rem;
    background-color: #a3a3a5;
    position: relative;
  }

  .infoDesc .start {
    float: left;
  }

  .infoDesc .end {
    float: right;
  }

  .infoDesc .start::before, .infoDesc .end::after {
    content: '';
    position: absolute;
    width: .1rem;
    height: .1rem;
    background-color: #333;
    bottom: 0;
  }

  .infoDesc .end::after {
    right: 0;
  }

  .infoDesc .desc {
    padding: .3rem 0;
    font-size: .28rem;
  }

  .infoKey {
    margin: .2rem 0 .2rem .3rem;
    color: #333;
    font-size: .3rem;
  }

  .infoList img {
    width: 100%;
  }
</style>