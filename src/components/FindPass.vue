<template>
  <div class="login-page before">
      <div class="login-wrap">
        <div class="login-head">
            <p style="margin-top:10px;">找回密码</p>
        </div>
        <group>
          <x-input title="邮箱" name="email" placeholder="请输入邮箱地址" is-type="email">
            <span slot="label" class="el-icon-fa-envelope-open size18"></span>
            <x-button slot="right" type="primary" mini>发送验证码</x-button>
          </x-input>
          <x-input  v-model="form.passWord" type='password' placeholder="请输入右侧验证码">
            <span slot="label" class="el-icon-fa-image size18"></span>
            <img slot="right" class="weui-vcode-img" src="https://i.loli.net/2017/09/18/59bf7f32425d5.jpg">
          </x-input>
          <x-input  v-model="form.passWord" type='password' placeholder="请输入密码">
            <span slot="label" class="el-icon-fa-lock size20"></span>
          </x-input>
          <x-input  v-model="form.passWord" type='password' placeholder="请再次确认密码">
            <span slot="label" class="el-icon-fa-lock size20"></span>
          </x-input>
          </group>
        <div style="padding:15px;">
          <x-button type="primary">确　定</x-button>
        </div>
        <div class="SignContainer-switch">
                已经有账户？
          <router-link :to="{path:'/LoginPage'}"><span>立即登录</span></router-link>
        </div>
      </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
  import {
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
    name: "register",
    components: {
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
         form:{
           value1:'',
           passWord:''
         }
      }
    },
    methods: {
     
    }
  };

</script>
<style scoped>
.size20{
  font-size: 20px!important;
  padding-right: 10px;
  color: #1AAD19;
}
 .login-page{
   width: 100%;
   height: 100%;
   background-image: url(../assets/images/login.png);
   background-repeat: no-repeat;
   background-size: cover;
   text-align: center;
 }
 .login-wrap{
       width: 100%;
    display: inline-block;
    background-color: #fff;
    vertical-align: middle;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.size18{
  font-size: 18px;
   padding-right: 10px;
  color: #1AAD19;
}
</style>
