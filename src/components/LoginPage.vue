<template>
  <div class="login-page before">
    <div class="login-wrap">
      <div class="login-head">
        <img src="../assets/images/8223856_03.png" width="75" />
      </div>
      <group class="group">
        <x-input v-model="form.accountName" placeholder="请输入用户名" required>
          <span slot="label" class="el-icon-fa-user size20"></span>
        </x-input>
        <x-input v-model="form.password" type='password' placeholder="请输入密码" required>
          <span slot="label" class="el-icon-fa-lock size20"></span>
        </x-input>
        <selector ref="defaultValueRef" direction="rtl" :options="list" v-model="defaultLangage"></selector>
      </group>
      <div style="padding:15px;">
        <x-button type="primary" @click.native="login">登　录</x-button>
      </div>
      <div class="find-pass text-right">
        <router-link :to="{path:'/FindPass'}">忘记密码？立即找回</router-link>
      </div>
      <toast v-model="loginState.showClose" type="warn">{{loginState.Message}}</toast>
    </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
  import fetchs from '../fetch/fetch';
  import {
    Toast,
    Selector,
    XInput,
    Cell,
    XHeader,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    CellBox,
    Group,
    ViewBox,
    XAddress,
    ChinaAddressV4Data,
    Swiper,
    XButton
  } from "vux";
  export default {
    name: "login-page",
    components: {
      Toast,
      Selector,
      XInput,
      XButton,
      Swiper,
      XAddress,
      ChinaAddressV4Data,
      Cell,
      XHeader,
      Grid,
      GridItem,
      Tabbar,
      TabbarItem,
      CellBox,
      Group,
      ViewBox
    },
    data() {
      return {
        defaultLangage: 'ch',
        list: [{
          key: 'ch',
          value: '中文'
        }, {
          key: 'en',
          value: 'English'
        }],
        form: {
          accountName: '',
          password: ''
        },
        loginState: {
          showClose: false,
          Message: ''
        }
      }
    },
    methods: {
      login() {
        let self = this 
        fetchs.fetch({
          data:self.form,
          url:'/api/user/auth/login/0',
          success:(res)=>{
            this.$router.replace('/Home');
          },
          erro:(res)=>{
            self.loginState = {
              showClose: true,
               Message: res.result.errorMessage
            }
          }
        })
      }
      // ajax({
      //   url:'/api/user/auth/login/0',
      //   type: 'POST',
      //   data:{
      //     accountName:self.form.accountName,
      //     password:self.form.password
      //   },
      //   success:(res)=>{
      //     debugger
      //   },
      //   error:(res)=>{
      //     
      //   }
      // })
      // 
  
  },
  mounted() {

  }
  };

</script>
<style scoped>
  .size20 {
    font-size: 20px !important;
    padding-right: 10px;
    /* color: #949494; */
    color: #ff7800;
  }

  .login-page {
    width: 100%;
    height: 100%;
    /* background-image: url(../assets/images/login_1.png);
   background-repeat: no-repeat;
   background-size: cover;*/
    text-align: center;
  }

  .login-wrap {
    width: 100%;
    display: inline-block;
    background-color: #fff;
    vertical-align: middle;
    border-radius: 2px;

    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

</style>
