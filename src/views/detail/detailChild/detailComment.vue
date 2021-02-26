<template>
  <div>
    <div v-if="Object.keys(commentDatas).length !== 0" class="detailComment">
      <div class="userComment clearfix">
        <span class="connent fl">用户评价</span>
        <div class="more fr">更多</div>
      </div>
      <div class="userMessage">
        <img class="userLogo" :src="commentDatas.user.avatar" alt="">
        <span class="userName">{{commentDatas.user.uname}}</span>
      </div>
      <div class="comment">{{commentDatas.content}}</div>
      <div>
        <span class="time">{{commentDatas.created | showTime}}</span>
				<span class="style">{{commentDatas.style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { formatDate } from "common/utils.js"

  export default {
    name: "DetailComment",
    props: {
      commentDatas: {
        type: Object,
        default: {}
      }
    },
    filters: {
      showTime: function (value) {
        let date = new Date(value * 1000);
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style scoped>
  .detailComment {
    padding: 0 .2rem .6rem .2rem;
		border-bottom: .1rem solid #f2f5f8;
		font-size: .3rem;
  }

  .userComment {
    height: 1rem;
    line-height: 1rem;
		border-bottom: 1px solid #f2f5f8;
  }

  .userComment .more {
    position: relative;
    margin-right: .6rem;
  }

  .userComment .more:after {
    content: '';
    position: absolute;
    right: -.6rem;
    top: .16rem;
    height: .6rem;
    width: .6rem;
    background-image: url('~assets/img/common/more.png');
  }
	.userMessage{
		padding-top: 1.1rem
	}

  .userMessage img {
    border-radius: .8rem;
    width: .8rem;
    height: .8rem;
    margin-right: .2rem;
  }

  .comment {
    font-size: .32rem;
    color: #a1a1a1;
    padding: .24rem 0;
  }
	.time,
	.style{
		font-size: .26rem;
		color: #aaaaaa;
	}
	.style{
		padding-left: .12rem
	}
</style>