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
      <img v-for="(item, index) in detailInfo .detailImage[0].list" :src="item" alt="">
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
	}
}
</script>

<style scoped>
.goodsInfo {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .infoDesc {
    padding: 0 15px;
  }

  .infoDesc .start, .infoDesc .end {
    width: 90px;
    height: 1px;
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
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .infoDesc .end::after {
    right: 0;
  }

  .infoDesc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .infoKey {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .infoList img {
    width: 100%;
  }
</style>