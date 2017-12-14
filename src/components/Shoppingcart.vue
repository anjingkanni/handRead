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
              <span @click="reduce">-</span>
              <span>{{numbers}}</span>
              <span @click="increases">+</span>
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


    <button type="button" class="btn color-green">前往支付</button>
</div>
</template>

<script>
export default {
  name: 'shopping',
  data () {
    return {
      msg: '购物车',
      numbers: 2
    }
  },
  methods:{
    reduce:function () {
      if(this.numbers >0){
        this.numbers = this.numbers - 1;
      }else {
          return;
      }
    },
    increases:function () {
      this.numbers = this.numbers + 1;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/shopping.less";
</style>
