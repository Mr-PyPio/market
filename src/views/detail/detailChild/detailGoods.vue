<!-- v-if="Object.keys(goods).length !== 0"  判断goods是否为空 -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="detailGoods">
    <div class="title">{{goods.title}}</div>
    <div class="price clearfix">
      <div class="newPrice fl">{{goods.newPrice}}</div>
      <div class="priveWrap fl">
				<span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
			</div>
    </div>
    <div class="culumns">
      <div class="culumnsItem">{{goods.columns[0]}}</div>
      <div class="culumnsItem">{{goods.columns[1]}}</div>
      <div class="culumnsItem">{{goods.services[goods.services.length-1].name}}</div>
    </div>
    <div class="service">
      <div v-for="index in goods.services.length-1" class="clesrfix serviceItem">
        <img class="serviceIcon" :src="goods.services[index-1].icon" alt="">
        <div class="serviceName">{{goods.services[index-1].name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailGoods',
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .detailGoods {
    padding: 0 .1rem
  }

  .title {
    font-size: .32rem;
    color: #666666;
    margin: .2rem 0;
  }

  .price {
    height: .6rem;
    line-height: .6rem;
    padding-bottom: .24rem;
    position: relative
  }

  .newPrice {
    color: lightpink;
    font-size: .4rem;
  }

  .oldPrice {
    color: #e6e6e6;
    text-decoration: line-through;
    font-size: .24rem;
    padding-top: .08rem;
    padding-left: .08rem;
		padding-right: .08rem;
  }

  .discount {
    font-size: .16rem;
		padding: .06rem;
    line-height: .32rem;
    text-align: center;
    background-color: red;
    color: white;
    border-radius: .16rem;
  }

  .culumns,
  .serveice {
    display: flex;
    padding: .1rem 0;
    border-bottom: .02rem solid #e6e6e6
  }

  .culumnsItem {
    flex: 1;
    font-size: .24rem;
    color: #e6e6e6;
    text-align: center;

  }

  .service {
    height: .6rem;
    line-height: .6rem;
    display: flex;
    padding: .2rem 0;
    border-bottom: .06rem solid #c3c3c3;
    text-align: center;

  }

  .serviceItem {
    flex: auto
  }

  .serviceIcon {
    width: .2rem;
    height: .2rem;
    display: inline-block;
  }

  .serviceName {
    color: #777373;
    font-size: .24rem;
    display: inline-block;
  }
	.priveWrap{
		height: .6rem;
	}
</style>