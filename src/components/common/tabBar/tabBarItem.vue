<template>
  <div class="tabBarItem" @click="click">
    <div v-if="!isActive">
      <slot name="itemImg"></slot>
    </div>
    <div v-else>
      <slot name="itemImgActive"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      click() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? { color: this.activeColor } : {}
      }
    }
  }
</script>

<style>
  .tabBarItem {
    flex: 1;
    font-size: 16px;
  }

  .tabBarItem img {
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>