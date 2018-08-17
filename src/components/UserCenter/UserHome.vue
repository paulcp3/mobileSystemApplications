<template>
  <div class="user-home" style="height:100%;">
    <x-header :left-options="{showBack: true}" style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      <div slot="right">
        <router-link :to="{path:'/HomePage'}">
          <i class="icon el-icon-fa-home" style="fill:#fff;position:relative;font-size:20px!important;"></i>
        </router-link>
      </div>
      个人中心
    </x-header>
    <view-box ref="viewBox" class="view-cage">
        <router-view></router-view>
    </view-box>
  </div>

</template>
<script>
  import Vue from "vue";
  import {
    Badge,
    XButton,
    Scroller,
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
    XAddress,
    ChinaAddressV4Data,
    Swiper
  } from "vux";
  export default {
    name: "user-home",
    components: {
      Badge,
      XButton,
      Scroller,
      LoadMore,
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
      return {};
    },
    computed: {},
    methods: {},
    mounted() {}
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
