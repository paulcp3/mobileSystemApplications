<template>
  <div class="MultiStore">
    <tab>
      <tab-item @on-item-click="onItemClick(1)" :selected="selectIndex === 1" :key="1">硬件状态监控</tab-item>
      <tab-item @on-item-click="onItemClick(2)" :selected="selectIndex === 2" :key="2">硬件连接信息</tab-item>
      <tab-item @on-item-click="onItemClick(3)" :selected="selectIndex === 3" :key="3">图片信息</tab-item>
    </tab>
    <div class="MultiStore_contair" v-show="selectIndex==1">
      <div style="padding:10px;">
        <div ref="temperature" style="width:100%;height:300px;"></div>

      </div>
    </div>
    <div class="MultiStore_contair cameras" v-show="selectIndex==2">
      <ul class="camera-list">
        <li v-for="(item,index) in list" :key="index">
          <p>
            <label>时间:</label>
            <span>{{item.time}}</span>
          </p>
          <p>
            <label>IP地址:</label>
            <span>{{item.IP}}</span>
          </p>
          <p>
            <label>协议名称:</label>
            <span>{{item.TCP}}</span>
          </p>
          <p>
            <label>服务名称:</label>
            <span>{{item.WEB}}</span>
          </p>
          <p>
            <label>服务端口:</label>
            <span>{{item.port}}</span>
          </p>
          <p>
            <label>进程名称:</label>
            <span>{{item.portName}}</span>
          </p>
          <p>
            <label>进程号:</label>
            <span>{{item.portNumber}}</span>
          </p>

        </li>
      </ul>
    </div>
    <div class="MultiStore_contair cameras" v-show="selectIndex==3">
       <div ref="radar" style="width:100%;height:300px;"></div>
    </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
  import VeRadar from 'v-charts/lib/radar'
  import echarts from 'echarts'
  import {
    Tab,
    TabItem,
    CellFormPreview,
    Group,
    Cell,
    Search
  } from "vux";
  export default {
    name: "HardwareMsg",
    components: {
      Tab,
      TabItem,
      CellFormPreview,
      Group,
      Cell,
      Search,

      VeRadar
    },
    data() {
      return {
        radarChart:null,
        temperatureOption: {
          color: ['#ff7800', '#999999'],
          title: {
            text: '温度',
            textStyle: {
              color: '#ff7800',
              fontSize: 15,
              fontWeight: 100
            },
            left: 10,
            top: 20
          },
          legend: {
            data: ['温度']
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          }]
        },
        radar: {
      color:['#ff7800','#999999'],
    title: {
        text: '硬件雷达图',
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
        x: 'center',
        data:['实际值'],
        top:20
    },
    radar: [
        {
            indicator: [
                {text: '清晰度', max: 100},
                {text: '颜色', max: 100},
                {text: '光亮度', max: 100},
             
             
            ],
            radius: 80,
            center: ['50%','60%'],
        }
    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85],
                    name: '实际值'
                }
            ]
        },
        
    ]
},
        list: [{
          time: '2017 17:30:21',
          IP: '192.168.10.126',
          TCP: 'tcp',
          WEB: 'www',
          port: '8080',
          portName: 'monolith',
          portNumber: '287'
        }, {
          time: '2017 17:30:21',
          IP: '192.168.10.126',
          TCP: 'tcp',
          WEB: 'www',
          port: '8080',
          portName: 'monolith',
          portNumber: '287'
        }, {
          time: '2017 17:30:21',
          IP: '192.168.10.126',
          TCP: 'tcp',
          WEB: 'www',
          port: '8080',
          portName: 'monolith',
          portNumber: '287'
        }, {
          time: '2017 17:30:21',
          IP: '192.168.10.126',
          TCP: 'tcp',
          WEB: 'www',
          port: '8080',
          portName: 'monolith',
          portNumber: '287'
        }],
        searchValue: '',
        selectIndex: 1,
        temperatureChart: null
      };
    },
    methods: {
      temperature(option) {
        this.temperatureChart = echarts.init(this.$refs.temperature);
        this.temperatureChart.setOption(option)
      },
      onItemClick(val) {
        let self = this
        this.selectIndex = val;
        if(val===3){
          this.radarInit()
            setTimeout(function (){
               self.radarChart.resize()
            }
           ,200)
          
        }
      },
      radarInit(){
         this.radarChart = echarts.init(this.$refs.radar);
        this.radarChart.setOption(this.radar)
      }
    },
    mounted() {
      this.temperature(this.temperatureOption)
    }
  };

</script>
<style scoped>
  span.red {
    color: #f00 !important;
  }

  .el-icon-fa-youtube-play {
    font-size: 30px !important;
    color: #ddd;
  }

  .camera-list {
    display: inline-block;
    width: 100%;
  }

  .oline.el-icon-fa-youtube-play {
    color: #ff7800;
  }

  .camera-list li {
    display: inline-block;
    padding: 10px 15px;
    width: 100%;
    box-sizing: border-box;
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
