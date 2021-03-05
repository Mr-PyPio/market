<template>
  <div id="category">
    <nav-bar class="categoryNav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content clearfix">
      <scroll class="listScroll fl" :probeType="3" ref="scroll">
        <cate-list :cateList="cateList" @setSubcategory="setSubcategory"></cate-list>
      </scroll>
      <scroll class="contentScroll fl" :probeType="3">
        <cat-list-content :listContents="listContents" ref="currentType" @loading="loading"></cat-list-content>
        <tab-control :title="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="goods"></goods-list>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navBar/navBar.vue'
  import Scroll from 'components/common/scroll/scroll.vue'
  import GoodsList from 'components/content/goods/goodsList.vue'
  import TabControl from 'components/content/tabControl/tabControl.vue'

  import { getCategoryData, getSubcategory, getCategoryDetail } from 'network/category.js'

  import CateList from './categoryChlid/cateList.vue'
  import CatListContent from './categoryChlid/catListContent.vue'

  export default {
    name: 'category',
    components: {
      NavBar,
      CateList,
      CatListContent,
      Scroll,
      GoodsList,
      TabControl
    },
    data() {
      return {
        cateList: [],
        categoryData: {},
        currentIndex: -1,
        listContents: [],
        goods: [],
        currentType: 'pop',
      }
    },
    created() {
      this.getCategoryData();
    },
    methods: {
      // 获取商品分类数据
      getCategoryData() {
        getCategoryData().then(res => {
          this.cateList = res.data.category.list;
          for (let i = 0; i < this.cateList.length; i++) {
            this.categoryData[i] = {
              categoryDatail: {
                'pop': [],
                'new': [],
                'sell': []
              },
              subcategories: {}
            }
          }
          // 默认加载数据
          this.getSubcategory(0);
          this.data = this.categoryData[this.currentIndex].categoryDatail
          console.log(this.data)
        })
      },
      // 获取左侧列表图片展示数据
      getSubcategory(index) {
        this.currentIndex = index;
        const maitKey = this.cateList[index].maitKey;
        getSubcategory(maitKey).then(res => {
          this.listContents = res.data.list
          this.categoryData[index].subcategories = res.data.list
          this.categoryData = { ...this.categoryData };
          this.getCategoryDetail('pop')
          this.getCategoryDetail('new')
          this.getCategoryDetail('sell')
        })
      },
      // 获取tabControl数据
      getCategoryDetail(type) {
        const miniWallkey = this.cateList[this.currentIndex].miniWallkey;
        getCategoryDetail(miniWallkey, type).then(res => {
          this.goods = res;
          this.categoryData[this.currentIndex].categoryDatail[type] = res;
          this.categoryData = { ...this.categoryData }
        })
      },
      setSubcategory(index) {
        this.getSubcategory(index);
      },
      tabClick(index) {
        switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
        }
        this.getCategoryDetail(this.currentType)
      },
			loading() {
				this.$refs.scroll.refresh()
			}
    },
  }
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .content {
    height: calc(100% - 1.86rem);
    width: 100%;

  }

  .categoryNav {
    font-size: .36rem;
    color: white;
    background: lightpink;
    box-shadow: 0 .02rem .02rem rgba(100, 100, 100, .1);
    z-index: 100;
  }

  .contentScroll {
    width: 75%;
    height: 100%;
  }
	  .listScroll {
    width: 25%;
    height: 100%;
    background-color: #e6e6e6;
  }
</style>