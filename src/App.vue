<template>
  <main>
    <header></header>
    <div class="content">
      <router-view/>
    </div>
    <footer id="app">
      <nav>
        <ul>
          <router-link :to="{name:'home'}" tag="li" exact >
            <p class="fa fa-home"></p>
            <p>首页</p>
          </router-link>
          <router-link :to="{name:'classify'}" tag="li" >
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
  </main>


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
