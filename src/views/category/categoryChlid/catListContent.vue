<template>
  <div class="cateListContent">
    <div class="connents" v-for="(item, index) in listContents">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="itemTitle">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/scroll.vue'

  export default {
    name: 'CateListContent',
    components: {
      Scroll,
    },
    data() {
      return {
        currentType: 'pop',
      }
    },
    props: {
      listContents: {
        type: Array,
        default () {
          return []
        }
      },

    },
  }
</script>

<style scoped>
  .cateListContent {
    display: flex;
    flex-wrap: wrap;
  }

  .connents {
    font-size: 12px;
    text-align: center;
    width: 33.3%;
  }

  .connents img {
    width: 70px;
    height: 70px;
    padding: 15px 0;
  }
</style>