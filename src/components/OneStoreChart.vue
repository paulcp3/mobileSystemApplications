<template>
  <div class="home-index OneStore">
    <div class="b-image">
      <grid :cols="2" :show-lr-borders="false" :show-vertical-dividers="false">
        <grid-item class="item-store">
          <h3>Demo Co 久光</h3>
          <address class="ellipsis-2">
            <i class="el-icon-fa-map-marker"></i>上海市静安区静安寺街道上海机场城市航站楼久百城市广场</address>
        </grid-item>
        <grid-item class="item-store">
          <h3>今日实时客流量</h3>
          <p>
            <span>进场：
              <b class="enter">0</b>
            </span>
            <span>离场：
              <b class="level">0</b>
            </span>
          </p>
          <h3>店铺状态：休息中~~</h3>
        </grid-item>
      </grid>
      <abbr></abbr>
    </div>
    <tab>
      <tab-item @on-item-click="onItemClick(1)" :selected="selectIndex === 1" :key="1">热力图</tab-item>
      <tab-item @on-item-click="onItemClick(2)" :selected="selectIndex === 2" :key="2">客流计数</tab-item>
      <tab-item @on-item-click="onItemClick(3)" :selected="selectIndex === 3" :key="3">电子地图</tab-item>
    </tab>
    <div class="contair hot" v-show="selectIndex === 1">
      <div class="tool">
        <x-button type="primary" plain mini @click.native="showPopup=true">
          <i class="el-icon-fa-calendar"></i> 按{{setVal}}查询</x-button>
        <input type="text" @focus="visibility = true" :value="selectTime" class="select_time" placeholder="请选择筛选时间" />
        <datetime :show.sync="visibility" v-model="selectTime" :format="typeVal" class="datatimes"></datetime>
      </div>
      <div ref="hotChart" style="width:100%;height:80%;"></div>
    </div>
    <div class="contair vister" v-show="selectIndex === 2">
      <div class="tool">
        <x-button type="primary" plain mini @click.native="showPopup=true">
          <i class="el-icon-fa-calendar"></i> 按{{setVal}}查询</x-button>
        <input type="text" @focus="visibility = true" :value="selectTime" class="select_time" placeholder="请选择筛选时间" />
        <x-button type="primary" plain mini @click.native="showPopupChart=true">
          <i class="el-icon-fa-line-chart"></i>图表切换</x-button>
        <datetime :show.sync="visibility" v-model="selectTime" :format="typeVal" class="datatimes"></datetime>
      </div>
      <div ref="visterBar" style="width:100%;height:300px;" v-show="chartType == 1"></div>
      <div ref="visterLine" style="width:100%;height:300px;margin-top:20px;" v-show="chartType == 2"></div>
      <!-- <ve-line v-if="chartType == 1"  :data="oneDay.chartData" :settings="oneDay.chartSettings"></ve-line>
      <ve-bar v-else :data="vsiterData.chartData" :settings="vsiterData.chartSettings"></ve-bar> -->
    </div>
    <div class="contair" v-show="selectIndex === 3">
       <popup-picker title="选择楼层" :data="list1" v-model="tapVal" placeholder="请选择具体楼层"></popup-picker>
    </div>
    <popup v-model="showPopupChart" class="checker-popup hot">
      <div style="padding:10px 10px 40px 10px;">
        <p style="padding: 5px 5px 5px 2px;color:#888;">请选择图表</p>
        <checker v-model="chartType" default-item-class="demo4-item" selected-item-class="demo4-item-selected" disabled-item-class="demo4-item-disabled">
          <checker-item value="1" @on-item-click="chartClick">客流计数</checker-item>
          <checker-item value="2" @on-item-click="chartClick">24小时客流</checker-item>
        </checker>
      </div>
    </popup>
    <popup v-model="showPopup" class="checker-popup">
      <div style="padding:10px 10px 40px 10px;">
        <p style="padding: 5px 5px 5px 2px;color:#888;">请选择时间类型</p>
        <checker v-model="typeVal" default-item-class="demo4-item" selected-item-class="demo4-item-selected" disabled-item-class="demo4-item-disabled">
          <checker-item value="YYYY" @on-item-click="propsClick">年</checker-item>
          <checker-item value="YYYY-MM" @on-item-click="propsClick">月</checker-item>
          <checker-item value="YYYY-MM-DD" @on-item-click="propsClick">日</checker-item>
        </checker>
      </div>
    </popup>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
  import VeBar from 'v-charts/lib/bar'
  import VeMap from 'v-charts/lib/map'
  import VeLine from 'v-charts/lib/line'
    import echarts from 'echarts'
  import {
    PopupPicker,
    Checker,
    CheckerItem,
    Grid,
    GridItem,
    Popup,
    Datetime,
    Group,
    Radio,
    Confirm,
    XButton,
    XDialog,
    XSwitch,
    Tab,
    TabItem,
    ChinaAddressV4Data,
    TransferDomDirective as TransferDom
  } from "vux";
  export default {
    name: "OneStore",
    components: {
      PopupPicker,
      VeLine,
      Grid,
      GridItem,
      Popup,
      Datetime,
      Group,
      Radio,
      Confirm,
      XButton,
      XDialog,
      XSwitch,
      Checker,
      CheckerItem,
      VeMap,
      VeBar,
      ChinaAddressV4Data,
      Tab,
      TabItem,
    },
    data() {
      return {
        hotChart:null,
        visterBars:null,
        visterLines:null,
        tapVal:[],
        list1: [['第一层', '第二层', '第三层', '第四层', '第五层']],
        chartType: '1',
        visibility: false,
        selectTime: '',
        typeVal: 'YYYY',
        showPopup: false,
        showPopupChart: false,
        selectIndex: 1,
        visterLineOption:{
   
        backgroundColor:'#fff',
        title: {
            text:'24H客流变化图',//

           textStyle:{
                color:'#ff7800',
                fontSize:15,
                fontWeight:100
              },
              left:10,
              top:20
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['进场','离场']
           
        },
        grid: {
            top:50,
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data:['0','2','4','6','8','10','12','14','16','18','20','22','24']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'进场' ,//'进场',
                type:'line',
                itemStyle:{//修改折线颜色
                    normal:{
                        color:'#f08f00',
                        borderColor:'#f08f00',
                    }
                },
                data: [100, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'离场',//,
                type:'line',
                itemStyle:{//修改折线颜色
                    normal:{
                        color:'#9a9a9a',
                        borderColor:'#9a9a9a',
                    }
                },
                data:[140, 182, 191, 234, 290, 330, 310]
            }
        ]

        },
        visterBarOption:{
          color:['#ff7800','#999999'],
            title: {
              text: '客流计数图表',
              textStyle:{
                color:'#ff7800',
                fontSize:15,
                fontWeight:100
              },
              left:10,
              top:20
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['进场','离场'],
              top:20
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            yAxis: {
              type: 'category',
              data: ['数据池一', '数据池二', '数据池三']
            },
            series: [{
              name: '进场',
              type: 'bar',
              data: [18203, 23489, 29034]
            },{
              name: '离场',
              type: 'bar',
              data: [18203, 23489, 29034]
            }]
          },
        hotChartOption:{
          color:['#ff7800'],
            title: {
              text: '客流分析',
              textStyle:{
                color:'#ff7800',
                fontSize:15
              },
              left:10,
              top:20
            },
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            legend: {
              data: ['客流量'],
              top:20
            },
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: {
              type: 'value',
              boundaryGap: [0, 0.01]
            },
            yAxis: {
              type: 'category',
              data: ['北京', '上海', '杭州']
            },
            series: [{
              name: '客流量',
              type: 'bar',
              data: [18203, 23489, 29034]
            }]
          }
      }
    },
    computed: {
      setVal() {
        let type = this.typeVal
        if (type == 'YYYY') {
          return '年'
        } else if (type == 'YYYY-MM') {
          return '月'
        } else {
          return '日'
        }
      },

    },
    mounted(){
      this.hotChartInit(this.hotChartOption)
    },
    methods: {
      hotChartInit(option) {
        this.hotChart = echarts.init(this.$refs.hotChart);
        this.hotChart.setOption(option)
      },
      visterBar(){
         this.visterBars = echarts.init(this.$refs.visterBar);
         this.visterBars.setOption(this.visterBarOption)
      },
      visterLine(){
         this.visterLines = echarts.init(this.$refs.visterLine);
         this.visterLines.setOption(this.visterLineOption)
      },
      propsClick(value) {
        this.showPopup = false
      },
      chartClick(val) {
        let self = this
        this.showPopupChart = false
        if(val==2){
          this.visterLine()
           setTimeout(function (){
                self.visterLines.resize();
            }
           ,200)
        }else{
          this.visterBar()
            setTimeout(function (){
                self.visterBars.resize();
            }
           ,200)
        }
        },
      onItemClick(val) {
        let self = this
        this.selectIndex = val
        if(val === 2){
            this.visterBar()
            setTimeout(function (){
                self.visterBars.resize();
            }
           ,200)
            
        }
      }
    }
  }

</script>
<style scoped>
  .demo4-item-selected.demo4-item {
    background-color: #ff7800;
    color: #fff;
  }

  .demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 14px;
    padding: 10px;
    box-sizing: border-box;
    line-height: 18px;
    border-radius: 15px;
    width: 30%;
    text-align: center;
  }

  .checker-popup.hot .demo4-item {
    width: 45%;
  }

</style>
