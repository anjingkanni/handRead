<template>
  <transition name="slide-fade">
    <article v-show="isShowpersona">
      <h1>
        <span class="fa fa-angle-left" ></span>
        个人资料修改
      </h1>
      <form action="">
        <div>
          <label for="">昵称</label>
          <input type="text" placeholder="热巴">
        </div>
        <div>
          <label for="">E-mail</label>
          <input type="text" placeholder="请填写你的安全邮箱">
        </div>
        <div class="gender">
          <label>性别</label>
          <span>男</span>
          <span>女</span>
          <span class="color-lgtgreen">保密</span>
        </div>
        <div>
          <label for="">生日</label>
          <input type="date" class="birthday">
        </div>
        <div>
          <label for="">身份证号</label>
          <input type="text" placeholder="请输入您的18位身份证号" >
        </div>
        <div class="version">
          <label for="">个人描述</label>
          <textarea type="text" placeholder="请谈谈你对自己的认识"></textarea>
        </div>
        <button type="button" class="modify" @click="$emit('personbtn')">确认</button>
      </form>
      <section class="popup" v-if="personshows">
        <div>
          <p>个人资料修改成功!</p>
          <p type="button" @click="$emit('personHides')">确定</p>
        </div>
      </section>
    </article>
  </transition>

</template>

<script>
export default {
  name: 'personal',
  props:['isShowpersona','personshows'],
  data () {
    return {
      msg: '首页',

    }
},
methods:{

//  modifybtn:function () {
//      this.show = true
//  }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/personalData.less";
</style>
