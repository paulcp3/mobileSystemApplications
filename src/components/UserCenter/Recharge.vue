<template>
  <div class="user-home-recharge" style="height:100%;">
    
  </div>
</template>
<script>
  import Vue from "vue";

  import {
    GroupTitle,
    Checker,
    CheckerItem,
    XTable,
    XInput,
    XTextarea,
    Selector,
    SwiperItem,
    Tab,
    TabItem,
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
    Swiper,
    Checklist
  } from "vux";
  export default {
    name: "post-wei-xin",
    components: {
      GroupTitle,
      Checker,
      CheckerItem,
      XTable,
      Checklist,
      XTextarea,
      XInput,
      Selector,
      SwiperItem,
      Tab,
      TabItem,
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
      return {
        radioValue: '',
        commonList: ['微信支付', '支付宝支付'],
        vips: [{
            value: 1,
            text: "初级vip",
            money: "888"
          },
          {
            value: 2,
            text: "中级vip",
            money: "1888"
          },
          {
            value: 3,
            text: "高级vip",
            money: "2888"
          }
        ],
        vipType: 1
      };
    },
    computed: {},
    methods: {
      change() {

      }
    },
    mounted() {}
  };

</script>
<style scoped>
  .dic {
    color: #444;
    font-size: 12px;
    line-height: 18px;
  }

</style>
