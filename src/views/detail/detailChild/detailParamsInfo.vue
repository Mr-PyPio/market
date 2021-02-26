<template>
  <div class="paramInfo" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table, index) in paramsInfo.sizes" class="infoSize" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="infoParam">
      <tr v-for="(info, index) in paramsInfo.infos">
        <td class="infoParamKey">{{info.key}}</td>
        <td class="paramValue">{{info.value}}</td>
      </tr>
    </table>
    <div class="infoImg" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailParamsInfo',
    props: {
      paramsInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
.paramInfo {
    padding: .4rem .3rem;
    font-size: .28rem;
    border-bottom: .1rem solid #f2f5f8;
  }

  .paramInfo table {
    width: 100%;
    border-collapse: collapse;
  }

  .paramInfo table tr {
    height: .84rem;
  }

  .paramInfo table tr td {
    border-bottom: .02rem solid rgba(100,100,100,.1);
  }

  .infoParamKey {
    width: 1.9rem;
  }

  .infoParam {
    border-top: .02rem solid rgba(0,0,0,.1);
  }

  .paramValue {
    color: #eb4868
  }

  .infoImg img {
    width: 100%;
  }
</style>