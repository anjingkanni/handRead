<template>
    <div id="app">
        <router-view/>
      <footer>
            <nav>
              <ul>
                <router-link :to="{name:'mainContainer'}" tag="li" exact >
                  <p class="fa fa-home"></p>
                  <p>首页</p>
                </router-link>
                <router-link :to="{name:'classification'}" tag="li" >
                  <p class="fa fa-sitemap"></p>
                  <p>分类</p>
                  </router-link>
                <router-link :to="{name:'shoppingcart'}" tag="li">
                  <p class="fa fa-shopping-cart"></p>
                  <p>购物车</p>
                </router-link>
                <router-link :to="{name:'personal'}" tag="li">
                  <p class="fa fa-user"></p>
                  <p>我</p>
                </router-link>
              </ul>
            </nav>
     </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @import "./styles/index.less";
  @import './styles/common.less';
</style>
