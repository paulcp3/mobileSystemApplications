<template>
  <div class="head-nav" style="height:100%;">
    <x-header :left-options="{showBack: true}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      <div slot="right">
        <router-link :to="{path:'/UserHome'}">
          <i class="icon el-icon-fa-user" style="fill:#fff;position:relative;font-size:20px!important;"></i>
        </router-link>
      </div>
      {{appTitle}}
    </x-header>
    <view-box ref="viewBox" class="view-cage">
        <router-view></router-view>
    </view-box>
    <tabbar class="tabbar-foot" >
      <tabbar-item @on-item-click="routeGo(item,index)" v-for='(item,index) in tabbarNav' :key="index" :selected="item.selected" >
        <span slot="icon" class="tabbr-ico" >
          <img :src="iconImg(index,item.icon)"/>
        </span>
        <span slot="label">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
    <popup v-model="businessState"  is-transparent>
        <div style="background-color:#fff;margin:0 auto;padding-top:10px;padding-bottom:10px;">
         <group v-if="routS">
          <cell title="多店铺分析"  link="/MultiStore" @click.native="businessState = false"></cell>
          <cell title="单店铺分析" link="/OneStore" @click.native="businessState = false"></cell>
         </group>
         <group v-else>
          <cell title="摄像机监控"  link="/VideoCamera" @click.native="businessState = false"></cell>
          <cell title="前端机监控" link="/FrontTerminal" @click.native="businessState = false"></cell>
         </group>
        </div>
    </popup>
  </div>

</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";

  import {
    Popup,
   
    LoadMore,
    Cell,
    XHeader,
    Grid,
    GridItem,
    Tabbar,
    TabbarItem,
    CellBox,
    Group,
    ViewBox,
 
    ChinaAddressV4Data,
 
  } from "vux";
  export default {
    name: "head-nav",
    components: {
      Popup,
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
        businessState:false,
        routS:true,
        itemSelect:0,
        tabbarNav: [{
          icon: 'index',
          label: '主页',
          selected: true,
          path: '/Home'
        }, {
          icon: 'zhinengfenxi',
          label: '商业智能分析',
          selected: false,
          path: '/BusinessIndex'
        }, {
          icon: 'shebeizhuangtaifenxi',
          label: '设备状态分析',
          selected: false,
          path: '/MachineState'
        }],
        value_0_1: ["安徽省", "合肥市"],
        addressData: ChinaAddressV4Data,
        demo01_index: 0
      };
    },
    computed: {
      appTitle(){

        return this.$route.meta.label
      }
    },
    methods: {
      iconImg(index,icon){
        if(index=== this.itemSelect){
          return `../../static/${icon}-h.png`
        }else{
           return `../../static/${icon}.png`
        }
        
      },
      routeGo(val,index){
        this.itemSelect = index

        if(val.path==='/BusinessIndex'){
            this.routS = true
            this.businessState = true
        }else if(val.path==='/MachineState'){
            this.routS = false
            this.businessState = true
        }else{
          this.$router.push({
          path:val.path
        })
        }
        
      },
      onFocus(){
        this.$router.push({
          path:'/SearchStatic'
        })
      },
      activePath() {
        var active = this.$route.fullPath
        this.tabbarNav.map((item) => {
          if (item.path === active) {
            item.selected = true
          } else {
            item.selected = false
          }
        })
      },
      login() {},
      regair() {},
      demo01_onIndexChange(index) {
        this.demo01_index = index
      },
    },
    mounted() {
      this.activePath()
    }
  };

</script>
<style scoped>
  .tabbr-ico {
    font-size: 20px !important;
  }

  .view-cage .view-cage {
    margin-top: 0;
  }

</style>
