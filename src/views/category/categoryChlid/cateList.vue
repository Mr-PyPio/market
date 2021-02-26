<template>
  <scroll class="listScroll" :probeType="3">
    <div class="listItem" v-for="(item, index) in cateList" 
				@click="itemClick(index)" :class="{itemClick: isClick == index}">{{item.title}}</div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/scroll.vue'


  export default {
    name: 'CateList',
    components: {
      Scroll
    },
    data() {
      return {
        isClick: 0,
      }
    },
    props: {
      cateList: {
        type: Array,
        default: []
      }
    },
    methods: {
      itemClick(index) {
        this.isClick = index;
        this.$emit('setSubcategory', index)
      }
    },
  }
</script>

<style scoped>
  .cateList {
    background-color: #e6e6e6;
  }

  .listItem {
    height: .8rem;
    line-height: .8rem;
    padding: .04rem 0;
    border-left: .04rem solid #e6e6e6;

    text-align: center;
    font-size: .3rem;
  }

  .itemClick {
    border-left: .04rem solid lightpink;
    color: lightpink;
    background-color: white;
  }
	
  .listScroll {
    width: 25%;
    height: 100%;
    background-color: #e6e6e6;
  }
</style>