<template>
	<ul>
	<li v-for="(bookslist,index) in objdatashopping">
		<div class="dots" v-if="dotsShow">
			<!--<div class="dotsShow" v-if="electsShow">-->
				<!--&lt;!&ndash;<span class="fa fa-check" ></span>&ndash;&gt;-->
			<!--</div>-->
			<!--<div class="dotsHide" v-if="electsHide">-->
				<!--&lt;!&ndash;<span class="fa fa-check" exact></span>&ndash;&gt;-->
			<!--</div>-->
			<input type="checkbox" v-if="electsShow" @click="$emit('electSplices',index)">
		</div>

		<div class="img-show" :class="{edting: !edits}">
			<img :src=bookslist.img>
		</div>
		<div class="content-details">
			<h3>{{bookslist.name}}</h3>
			<p>{{bookslist.author}}</p>
			<p class="price">￥ {{bookslist.price}}</p>
		</div>
		<div class="regulation" v-if="edits">
			<span @click="num  <= 1 ? num=1 : num -= 1 ">-</span>
			<span>{{num}}</span>
			<span @click="num += 1">+</span>
		</div>
	</li>
		<li >
			<div class="dots" v-if="dotsShow">

				<input type="checkbox" v-if="electsShow" @click="$emit('electSplices',index)">
			</div>
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
</template>

<script>
export default {
  name: 'personal',
	props:['dotsShow','electsShow','electsHide','edits','objdatashopping'],
  data () {
    return {
      msg: '首页',

    }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
