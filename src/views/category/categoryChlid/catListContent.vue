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
    font-size: .24rem;
    text-align: center;
    width: 33.3%;
  }

  .connents img {
    width: 1.4rem;
    height: 1.4rem;
    padding: .3rem 0;
  }
</style>