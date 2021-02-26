<template>
  <div class="shopInfo">
    <div class="shopNameInfo">
      <img :src="shopInfo.logo" alt="" class="shopLogo">
      <span class="shopName">{{shopInfo.name}}</span>
    </div>
    <div class="shopScoreInfo">
      <div class="shopScoreLeft">
        <div class="sells">
          <span>{{shopInfo.sells | sellFilter}}</span>
          <span>总销量</span>
        </div>
        <div class="goodsCount">
          <span>{{shopInfo.goodsCount}}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shopScoreRight">
        <div class="wrap">
          <div class="scoreName">
            <div v-for="item in shopInfo.score">{{item.name}}</div>
          </div>
          <div class="score">
            <div v-for="item in shopInfo.score" :class="{red: item.isBetter}">{{item.score}}</div>
          </div>
          <div class="isBetter">
            <div v-for="item in shopInfo.score" :class="{super: item.isBetter}">
              <span v-if="item.isBetter" >高</span>
              <span v-else>低</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="but">进店逛逛</div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShop',
    props: {
      shopInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
		filters: {
			sellFilter: function(value) {
				if (value < 10000) return value;
				return (value/10000).toFixed(1) + '万'
			}
		}
  }
</script>

<style scoped>
  .shopInfo {
    width: 100%;
		padding-bottom: .4rem;
		border-bottom: .04rem solid #9b9999;
  }

  .shopNameInfo {
    display: flex;
    height: .8rem;
    line-height: .8rem;
    font-size: .3rem;
    color: #c3c3c3;
    padding: .4rem 0 0px .1rem
  }

  .shopLogo {
    width: .8rem;
    height: .8rem;
    border-radius: .8rem;
    border: 1px solid #c3c3c3;
    margin-right: .2rem;
  }

  .shopScoreInfo {
    display: flex;
    margin-top: .4rem;
  }

  .shopScoreLeft {
    display: flex;
    flex: 1;
    text-align: center;
		margin-top: .2rem;
    height: 1rem;
  }

  .shopScoreLeft::after {
    content: '';
    display: block;
    width: 1px;
    height: 1rem;
    background: #c3c3c3;
  }

  .shopScoreRight {
    display: flex;
    flex: 1;
		font-size: .3rem;
  }

  .sells,
  .goodsCount {
    flex: 1;
  }

  .sells span,
  .goodsCount span {
    display: block;
  }

  .sells span:first-of-type,
  .goodsCount span:first-of-type {
    font-size: .4rem;
  }

  .sells span:nth-of-type(2),
  .goodsCount span:nth-of-type(2) {
    font-size: .24rem;
    margin-top: .2rem;
  }

  .but {
    width: 40%;
    line-height: .6rem;
		font-size: .3rem;
    border-radius: .16rem;
    color: #888888;
    background-color: #c3c3c3;
    text-align: center;
    margin: 0 auto;
		margin-top: .4rem;
  }

  .scoreName div:nth-last-of-type(2),
  .score div:nth-last-of-type(2),
  .isBetter div:nth-last-of-type(2) {
    margin: .2rem 0
  }

	.score{
		color: lightgreen;
		padding-left: .2rem;
		padding-right: .12rem;
	}
	.wrap{
		margin: 0 auto;
		display: flex;
	}
	.red{
		color: red;
	}
	
	.isBetter span{
		background-color: lightgreen;
		color: #fff;
	}
	.super span{
		background-color: red;
	}
</style>