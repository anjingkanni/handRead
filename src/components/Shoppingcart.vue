<template>
  <div class="shopping">
    <h2 v-if="edits" @click="editor">编辑</h2>
	  <div v-if="cancel" class="deleting">
		  <h2 @click="cancels">取消</h2>
		  <h2 @click="deleteSelected">删除选中</h2>
	  </div>

      <section>
		  <shoppingList
			  :dotsShow="dotsShow"
			  :electsShow="electsShow"
			  :electsHide="electsHide"
			  :edits="edits"
			  @electSplices="electSplices"
		  >
		  </shoppingList>
      </section>

    <button type="button" class="btn color-green">前往支付</button>
</div>
</template>

<script>
import shoppingList from './ShoppingList'
export default {
  name: 'shopping',
	components:{shoppingList},
  data () {
    return {
      msg: '购物车',
	  /*删除选中显示与隐藏*/
	  cancel:false,
	  /*编辑的显示与隐藏*/
	  edits:true,
	  /*选中单品的显示与隐藏*/
	  dotsShow:false,
//	  elects :false,
	  /*选中图标显示与隐藏*/
	  electsShow:false,
	  electsHide:true,
      numbers: 2,
	  objdatashopping:null,
	  idx:[],
    }
  },
  methods:{
      /*点击编辑*/
	  editor(){
	      this.cancel = true;
		  this.edits = false;
		  this.dotsShow = true;
		  this.electsShow = true;
	  },
	  /*点击取消*/
	  cancels(){
		  this.cancel = false;
		  this.edits = true;
		  this.dotsShow = false
	  },
	  /*点击选中删除*/
	  deleteSelected(){
	      const idxs =this.idx;
	      const idxLength =idxs.length ;
	      for (var i =0;i<idxLength;i++){
			  this.objdatashopping.splice(idx[i],1)
		  }

	  },
	  /*点击选中单品*/
//	  elect(){
//		  this.electsShow = !this.electsShow;
////		  this.electsHide = !this.electsHide;
//	  },
	  electSplices(idx){
	      this.idx.push(idx);
	  },
	  getData(){
	      const objdatashop = JSON.parse(localStorage.getItem('locaShop'));
	      if(objdatashop.length != 0){
			  this.objdatashopping = objdatashop;
		  }else {
	          return;
		  }
	  },
	  mounted(){
	      this.getData()
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../styles/shopping.less";
</style>
