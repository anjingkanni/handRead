<template>
    <div id="app">
		    <HeaderComp/>
        <router-view/>
      	<FooterComp/>
  </div>
</template>

<script>
	import HeaderComp from './components/HeaderComp'
	import FooterComp from './components/FooterComp'
export default {
  name: 'app',
	components:{
		HeaderComp,
		FooterComp
	}
}
</script>

<style lang="less">
  @import './styles/common.less';
</style>
