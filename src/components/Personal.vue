<template>
  <div class="personal">
    <section class="img-box">
      <div></div>
      <div>
        <img src="../assets/timg24_01.jpg" alt="" class="img-circle">
        <p>热巴</p>
      </div>

    </section>
    <section class="list-text">
      <div class="text-box"@click="personaldata">
        <p>设置个人资料</p>
        <span class="icon"></span>
      </div>
      <div class="text-box" @click="addressManagement">
        <p>收货地址管理</p>
        <span class="icon"></span>
      </div>
    </section>
    <section class="list-text">
      <div class="text-box">
        <p>我的订单</p>
        <span class="icon"></span>
      </div>
      <div class="text-box">
        <p>我的评价</p>
        <span class="icon"></span>
      </div>
    </section>
    <section class="list-text">
      <div class="text-box">
        <p>商品收藏</p>
        <span class="icon"></span>
      </div>
      <div class="text-box">
        <p>店铺收藏</p>
        <span class="icon"></span>
      </div>
      <div class="text-box">
        <p>浏览记录</p>
        <span class="icon"></span>
      </div>
    </section>
    <button type="button" class="btn color-red">退出登录</button>
    <PersonalData :isShowpersona="isShowpersona" @personHides="personHides" @personbtn="personbtn" :personshows="personshows">
    </PersonalData>
    <ReceivingAddress :isShowaddress="isShowaddress" @hides="hides" @modifybtn="modifybtn" :shows="shows">
    </ReceivingAddress>
	  <SetInAndSetUp

	  ></SetInAndSetUp>
  </div>
</template>

<script>
  import PersonalData from './PersonalData'
  import ReceivingAddress from './ReceivingAddress'
  import SetInAndSetUp from './SetInAndSetUp'
export default {
  name: 'personal',
  components:{PersonalData,ReceivingAddress,SetInAndSetUp},
  data () {
    return {
      msg: '个人中心',
      /*资料和地址组件页面*/
      isShowpersona:false,
      isShowaddress:false,
      /*弹出框*/
      personshows:false,
      shows:false,
    }
  },
  methods:{
      /*个人信息切换*/
    personaldata:function () {
      this.isShowpersona = true
    },
    personbtn(){
      this.personshows = !this.personshows;
    },
    personHides(){
      this.isShowpersona = !this.isShowpersona;
      this.personshows = false;
    },
    /*收货地址管理*/
    addressManagement:function () {
      this.isShowaddress = true
    },
    /*取消弹出框返回主组件*/
    hides(){
      this.isShowaddress = !this.isShowaddress;
      this.shows = false;
    },
    /*弹出弹出框*/
    modifybtn(){
        this.shows = !this.shows;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../styles/personal.less";
</style>
