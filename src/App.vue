<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" keep="alive">商家</router-link>
      </div>
    </div>
    <!--出口-->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header';
  import axios from 'axios';
  import {urlParse} from './common/js/util';

  //  状态码 0 表示成功
  const ERR_OK = 0;

  export default {
    data() {
      return {
        seller: {
          id: (() => {
            let queryParam = urlParse();
            console.log(queryParam);
            return queryParam.id;
          })()
        }
      };
    },
    created() {
      axios.get('/api/seller?id=' + this.seller.id)
        .then((response) => {
          if (response.data.errno === ERR_OK) {
            // 获取数据
            // this.seller = response.data.data;
            // 为对象扩展属性
            this.seller = Object.assign({}, this.seller, response.data.data);
            console.log(this.seller);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl"

  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
  // border-bottom: 1px solid rgba(7,17,27,0.1)
    border-1px(rgba(7, 17, 27, 0.1))

    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
