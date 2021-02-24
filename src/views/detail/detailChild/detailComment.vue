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
    padding: 0 10px 30px 10px;
		border-bottom: 5px solid #f2f5f8;
  }

  .userComment {
    height: 50px;
    line-height: 50px;
		border-bottom: 1px solid #f2f5f8;
  }

  .userComment .more {
    position: relative;
    margin-right: 30px;
  }

  .userComment .more:after {
    content: '';
    position: absolute;
    right: -30px;
    top: 8px;
    height: 30px;
    width: 30px;
    background-image: url('~assets/img/common/more.png');
  }
	.userMessage{
		padding-top: 15px
	}

  .userMessage img {
    border-radius: 40px;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  .comment {
    font-size: 15px;
    color: #a1a1a1;
    padding: 12px 0;
  }
	.time,
	.style{
		font-size: 13px;
		color: #aaaaaa;
	}
	.style{
		padding-left: 6px
	}
</style>