<template>

  <scroll class="listScroll">
    <div class="listItem" v-for="(item, index) in cateList" @click="itemClick(index)" :class="{itemClick: isClick == index}">{{item.title}}</div>
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
    height: 40px;
    line-height: 40px;
    padding: 2px 0;
    border-left: 2px solid #e6e6e6;

    text-align: center;
    font-size: 15px;
  }

  .itemClick {
    border-left: 2px solid lightpink;
    color: lightpink;
    background-color: white;
  }
	
  .listScroll {
    width: 25%;
    height: 100%;
    background-color: #e6e6e6;
  }
</style>