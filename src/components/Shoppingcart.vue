<template>
  <div class="shopping">
    <h2>编辑</h2>
      <section>
        <ul>
          <li >
            <div class="img-show">
              <img src="../assets/b10.jpg">
            </div>
            <div class="content-details">
              <h3>JavaScript高级程序设计（第三版）</h3>
              <p>Nicholas C. Zakas</p>
              <p class="price">￥ 99</p>
            </div>
            <div class="regulation">
              <span >-</span>
              <span>{{numbers}}</span>
              <span>+</span>
            </div>
          </li>
          <li >
            <div class="img-show">
              <img src="../assets/b10.jpg">
            </div>
            <div class="content-details">
              <h3>JavaScript高级程序设计（第三版）</h3>
              <p>Nicholas C. Zakas</p>
              <p class="price">￥ 99</p>
            </div>
            <div class="regulation">
              <span>-</span>
              <span>2</span>
              <span>+</span>
            </div>
          </li>
          <li >
            <div class="img-show">
              <img src="../assets/b10.jpg">
            </div>
            <div class="content-details">
              <h3>JavaScript高级程序设计（第三版）</h3>
              <p>Nicholas C. Zakas</p>
              <p class="price">￥ 99</p>
            </div>
            <div class="regulation">
              <span>-</span>
              <span>2</span>
              <span>+</span>
            </div>
          </li>
        </ul>
      </section>

    <button type="button" class="btn color-green" @click="payShopping">前往支付</button>

	  <!--支付组件-->
	  <PayPage :shopHide="shopHide"></PayPage>
</div>
</template>

<script>

import PayPage from './PayPage'

export default {
  name: 'shopping',
	components:{PayPage},
  data () {
    return {
      msg: '购物车',
      numbers: 2,
		//支付页面显示器
	  shopHide:false
    }
  },
  methods:{
	  //前往支付
	  payShopping(){
        this.shopHide = true
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/shopping.less";
</style>
