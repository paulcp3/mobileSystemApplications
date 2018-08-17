<template>
  <div class="home-index">
    <tab>
      <tab-item @on-item-click="onItemClick(1)" :selected="selectIndex === 1" :key="1">商业智能分析</tab-item>
      <tab-item @on-item-click="onItemClick(2)" :selected="selectIndex === 2" :key="2">设备监控状态</tab-item>
    </tab>
    <div v-show="selectIndex==1" class="analysis">
      <div class="x-check">
        <x-switch :title="checked ? '热力值' :'客流分析'" v-model="checked"></x-switch>
      </div>
      <confirm v-model="confirmChecked" @on-confirm='cellChange' title="选择筛选条件">
        <group>
          <radio v-model="checkVal" :options="radio001" :selected-label-style="{color: '#FF9900'}">
          </radio>
        </group>
      </confirm>
      <datetime v-model="datetimes" @on-change="dateChange" :show.sync="visibility" :format="checkVal"></datetime>
      <x-button class="selectBtn" mini @click.native="confirmChecked = true">
        <i class="el-icon-fa-calendar"></i>　{{datetimes}}
      </x-button>
      <x-button class="chartBtn" mini @click.native="chartBtn">
        <i class="el-icon-fa-bar-chart"></i>
      </x-button>
      <ve-map height="100%" :visualMap="option.visualMap" :data="hotMap.chartData" :legend="hotMap.chartSettings.legend" :settings="hotMap.chartSettings"
        :geo="option.geo" :series="option.series" :tooltip="option.tooltip"></ve-map>
    </div>
    <div v-show=" selectIndex==2" class="equipment">
      <ve-bmap v-if="selectIndex==2" height="100%" :series="equipmentState.chartData" :settings="equipmentState.chartSettings"></ve-bmap>
    </div>
    <popup v-model="showDialogStyle" class="style-dialog" position="left" width="100%">
      <div ref="popChart" :style="{ width: size.width+'px', height: size.height + 'px' }" ></div>
      <div class="chartBtn" @click="showDialogStyle=false">
        <x-icon type="ios-close-outline" size="40" class="break-icon" style="fill:#ff7800;"></x-icon>
        <span>返回</span>
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
  import VeBmap from 'v-charts/lib/bmap'
  import geoCoordMap from './geoCoordMap'
  import echarts from 'echarts'
  import $ from "jquery";
  import {
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
    name: "HomeIndex",
    mixins: [geoCoordMap],
    components: {
      Popup,
      Datetime,
      Group,
      Radio,
      Confirm,
      XButton,
      XDialog,
      XSwitch,
      VeBmap,
      VeMap,
      VeBar,
      ChinaAddressV4Data,
      Tab,
      TabItem,
    },
    data() {
      return {
        size:{
          width:'',
          height:''
        },
        popChart: null,
        showDialogStyle: false,
        visibility: false,
        datetimes: '2018',
        confirmChecked: false,
        checkVal: 'YYYY',
        showHideOnBlur: false,
        checked: false,
        selectIndex: 1,
        addressData: ChinaAddressV4Data,
        radio001: [{
          key: 'YYYY',
          value: '按年份'
        }, {
          key: 'YYYY-MM',
          value: '按月份'
        }, {
          key: 'YYYY-MM-DD',
          value: '按天'
        }],
        chartData: {

        },
        hotMap: {
          chartSettings: {
            legend: {
              show: false
            },
            geo: {
              map: 'china',
              roam: true,
            },
          }
        },
        equipmentState: {
          chartSettings: {
            key: 'sXmkdY48xO84VUQC99GS7GRj',
            bmap: {
              center: [120, 30],
              zoom: 5,
              roam: true,
              mapStyle: {}
            }
          },
          chartSeries: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
              [120, 30, 1] // 经度，维度，value，...
            ]
          }],
          
        },
        popChartOption:{
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
    watch: {
      checked(newVal, oldVal) {
        if (newVal) {
          this.popChartOption.title.text = '热力值'
        } else {
          this.popChartOption.title.text = '客流分析'
        }
      }
    },
    methods: {
      chartBtn() {
        this.showDialogStyle = true
        let option = this.popChartOption
         this.popChartInit(option)
      },
      dateChange() {
        
      },
      confirms() {
        this.confirmChecked = true
      },
      cellChange() {
        this.visibility = true
      },
      onItemClick(val) {
        this.selectIndex = val

      },
      popChartInit(option) {
        this.popChart = echarts.init(this.$refs.popChart);
        this.popChart.setOption(option)
      }
    },
    mounted() {
      let width = $('body').width()
      let height = $('body').height()-50
      this.size={
        width:width,
        height:height
      }
      
    },
  }

</script>
<style scoped>


</style>
