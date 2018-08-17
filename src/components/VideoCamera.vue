<template>
  <div class="MultiStore">
    <tab>
      <tab-item @on-item-click="onItemClick(1)" :selected="selectIndex === 1" :key="1">摄像机概况</tab-item>
      <tab-item @on-item-click="onItemClick(2)" :selected="selectIndex === 2" :key="2">摄像机列表</tab-item>
    </tab>
    <div class="MultiStore_contair" v-show="selectIndex==1">
      VideoCamera
    </div>
    <div class="MultiStore_contair cameras" v-show="selectIndex==2">
      <group>
        <search v-model="searchValue" auto-scroll-to-top top="46px"></search>
        <ul class="camera-list">
          <li v-for="(item,index) in list" :key="index">
            <p>
              <label>序号:</label>
              <span>{{index}}</span>
            </p>
            <p>
              <label>摄像机:</label>
              <span>{{item.camera}}</span>
            </p>
            <p>
              <label>远端机:</label>
              <span>{{item.coach}}</span>
            </p>
            <p>
              <label>店铺名称:</label>
              <span>{{item.storeName}}</span>
            </p>
            <p>
              <label>店铺地址:</label>
              <span>{{item.stroeAddress}}</span>
            </p>
            <p>
              <label>状态:</label>
              <span v-if="item.onLine" style="color: #ff7800;">在线</span>
              <span class="red" v-else>不在线</span>
            </p>
            <p>
              <label>查询与监测:</label>
              <span >
                <template v-if="item.onLine">
                   <router-link to="/HardwareMsg">
                      <i class="el-icon-fa-youtube-play youtube oline"></i>
                   </router-link>
                </template>
                <template v-else>
                  <i class="el-icon-fa-youtube-play youtube"></i>
                </template>
              </span>
            </p>
          
          </li>
        </ul>
      </group>
    </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";

  import {
    Tab,
    TabItem,
    CellFormPreview,
    Group,
    Cell,
    Search
  } from "vux";
  export default {
    name: "VideoCamera",
    components: {
      Tab,
      TabItem,
      CellFormPreview,
      Group,
      Cell,
      Search
    },
    data() {
      return {
        searchValue: '',
        selectIndex: 1,
        list: [{
          camera: 'OC53-C01',
          coach: 'Coach-久光',
          storeName: 'Demo Co 久光',
          stroeAddress: '上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
          onLine: false,
        }, {
          camera: 'OC53-C01',
          coach: 'Coach-久光',
          storeName: 'Demo Co 久光',
          stroeAddress: '上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
          onLine: false,
        }, {
          camera: 'OC53-C01',
          coach: 'Coach-久光',
          storeName: 'Demo Co 久光',
          stroeAddress: '上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
          onLine: false,
        }, {
          camera: 'OC53-C01',
          coach: 'Coach-久光',
          storeName: 'Demo Co 久光',
          stroeAddress: '上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
          onLine: true,
        }, {
          camera: 'OC53-C01',
          coach: 'Coach-久光',
          storeName: 'Demo Co 久光',
          stroeAddress: '上海市静安区静安寺街道上海机场城市航站楼久百城市广场',
          onLine: false,
        }]
      };
    },
    methods: {
      onItemClick(val) {
        this.selectIndex = val;
      }
    }
  };

</script>
<style scoped>
span.red{
  color: #f00!important;
}
.el-icon-fa-youtube-play{
    font-size: 30px!important;
    color: #ddd;
}
.oline.el-icon-fa-youtube-play{
  color: #ff7800;
}
.camera-list{
  padding-bottom: 55px;
}
.camera-list li {
  display: inline-block;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
}

  .camera-list li p label {
    float: left;
    margin-right: 1em;
    min-width: 4em;
    color: #999999;
    text-align: justify;
    text-align-last: justify;
  }
 .camera-list li p span {
    display: block;
    overflow: hidden;
    word-break: normal;
    word-wrap: break-word;
    font-size: .9em;
    text-align: right;
    color: #999999;
    line-height: 2;
}
</style>
