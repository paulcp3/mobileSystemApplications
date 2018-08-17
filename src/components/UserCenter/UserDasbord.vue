<template>
  <div class="user-dasbord" style="height:100%;">
      <div class="user-head">
        <img src="../../assets/images/1.jpg" 
          class="user-avatar" alt="刘彬">
        <span class="user-name mt10">
          欢迎您：admin
        </span>
      
      </div>
      

      <group class="enter-link">
        <cell is-link value="立即设置" class="enter-link" link="/Recharge">
          <span slot="title">
            <i class="el-icon-fa-cubes  icon-tit"></i>
            <span class="solt-label">安全设置</span>
          </span>
        </cell>
        <cell is-link value="立即修改" class="enter-link" link="/ChangeMsg">
          <span slot="title">
            <i class="el-icon-fa-pencil-square-o  icon-tit"></i>
            <span class="solt-label">基本资料</span>
          </span>
        </cell>
        <cell is-link>
          <span slot="title">
            <i class="el-icon-fa-reply-all  icon-tit"></i>
            <span class="solt-label">退出</span>
          </span>
        </cell>
      </group>
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
    name: "user-dasbord",
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
