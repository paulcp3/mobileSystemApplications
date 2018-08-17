<template>
  <div class="OneStore">
    <search
     position="absolute"
    auto-scroll-to-top top="0"
    :results="results"
    v-model="value"
    placeholder="请输入店铺关键字进行搜索"
    ref="search"></search>
    <div class="store_contair">
        <grid :cols="2" :show-lr-borders="false" >
          <grid-item v-for="(item,index) in storeList" @on-item-click="onItemClick(item)" :key="index" class="item-store">
            <img :src="item.img" class="store_img"/>
            <h3>{{item.label}}</h3>
            <address class="ellipsis-2"><i class="el-icon-fa-map-marker"></i>{{item.address}}</address>
          </grid-item>
        </grid>
    </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
   import FormTemplate from "./FormTemplate"; 
  import {
    Search,
    Panel,
    LoadMore,
    Cell,
    Selector,
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
    name: "OneStore",
    components: {
      Search,
      Panel,
      LoadMore,
      Selector,
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
        results: [],
        value:'',
        storeList:[{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../../static/4.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../static/5.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../../static/4.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../static/5.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../../static/4.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../static/5.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../../static/4.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../static/5.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../../static/4.jpg'
        },{
           label:'Demo Co 久光',
           address:'上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
           img:'../static/5.jpg'
        }]
      }
    },
    methods: {
        onItemClick(item){
           this.$router.replace('/OneStoreChart')
        }
    }
  }

</script>
<style scoped>


</style>
