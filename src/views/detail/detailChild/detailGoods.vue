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
    padding: 0 5px
  }

  .title {
    font-size: 16px;
    color: #666666;
    margin: 10px 0;
  }

  .price {
    height: 30px;
    line-height: 30px;
    padding-bottom: 12px;
    position: relative
  }

  .newPrice {
    color: lightpink;
    font-size: 20px;
  }

  .oldPrice {
    color: #e6e6e6;
    text-decoration: line-through;
    font-size: 12px;
    padding-top: 4px;
    padding-left: 4px;
		padding-right: 4px;
  }

  .discount {
    font-size: 8px;
		padding: 3px;
    line-height: 16px;
    text-align: center;
    background-color: red;
    color: white;
    border-radius: 8px;
  }

  .culumns,
  .serveice {
    display: flex;
    padding: 5px 0;
    border-bottom: 1px solid #e6e6e6
  }

  .culumnsItem {
    flex: 1;
    font-size: 12px;
    color: #e6e6e6;
    text-align: center;

  }

  .service {
    height: 30px;
    line-height: 30px;
    display: flex;
    padding: 10px 0;
    border-bottom: 3px solid #c3c3c3;
    text-align: center;

  }

  .serviceItem {
    flex: auto
  }

  .serviceIcon {
    width: 10px;
    height: 10px;
    display: inline-block;
  }

  .serviceName {
    color: #777373;
    font-size: 12px;
    display: inline-block;
  }
</style>