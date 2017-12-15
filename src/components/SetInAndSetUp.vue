<template>
	<div class="setIn-setUp">
		<section class="choose-item">
			<ul class="nav nav-tabs">
				<li role="presentation" :class="{'active':isActiveIn}">
					<a href="#" @click="setIn">登陆</a>
				</li>
				<li role="presentation" :class="{'active':isActiveUp}">
					<a href="#" @click="setUp">注册</a>
				</li>
			</ul>
		</section>
		<div class="setIn-setUp-page">
			<section class="setIn-fill-content" v-if="setInState">
				<form class="form-horizontal">
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">手机号:</label>
						<div class="col-sm-10">
							<input type="email" class="form-control" placeholder="请输入您的手机号">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-2 control-label">密码:</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" placeholder="请输入您的密码">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button type="submit" class="btn btn-success">
								确认登陆
							</button>
						</div>
					</div>
				</form>
			</section>
			<section class="setUp-fill-content" v-if="setUpState">
				<form class="form-horizontal">
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">手机号:</label>
						<div class="col-sm-10">
							<input type="email" class="form-control" placeholder="请输入您的手机号">
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">昵称:</label>
						<div class="col-sm-10">
							<input type="email" class="form-control" placeholder="请输入您的昵称">
						</div>
					</div>
					<div class="form-group">
						<label for="inputEmail3" class="col-sm-2 control-label">密码:</label>
						<div class="col-sm-10">
							<input type="email" class="form-control" placeholder="请输入您的密码">
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword3" class="col-sm-2 control-label">确认密码:</label>
						<div class="col-sm-10">
							<input type="password" class="form-control" placeholder="请确认您的密码">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-offset-2 col-sm-10">
							<button type="button" class="btn btn-success">
								确认注册
							</button>
						</div>
					</div>
				</form>
			</section>
		</div>

	</div>
</template>

<script>
	export default {
		name: "setIn-setUp",
		props: [],
		isActiveIn:null,
		isActiveUp:null,
		data(){
			return {
				setInState:true,
				setUpState:false
			}
		},
		methods:{
			setIn(){
				this.setInState = true;
				this.setUpState = false;
				this.isActiveIn = true;
				this.isActiveUp = false;
			},
			setUp(){
				this.setInState = false;
				this.setUpState = true;
				this.isActiveUp = true;
				this.isActiveIn = false;
			},
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	@import "../styles/setIn-setUp";
</style>
