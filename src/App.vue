<template>
  <div id="app">
    <!--<header>-->
      <!--<ul>-->
        <!--<li>分类</li>-->
      <!--</ul>-->
    <!--</header>-->
    <main>
      <router-view/>
    </main>
    <footer>
      <ul>
        <router-link :to="{name: 'classification'}" tag="li" exact>类别</router-link>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import "styles/common.less";
</style>
