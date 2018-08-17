<template>
  <div class="FormTemplate">
    <group>
      <cell title="选择时间类型" @click.native="showPopup=true" :value="setVal"></cell>
      <popup v-model="showPopup" class="checker-popup">
        <div style="padding:10px 10px 40px 10px;">
          <p style="padding: 5px 5px 5px 2px;color:#888;">请选择时间类型</p>
          <checker v-model="typeVal" default-item-class="demo4-item" selected-item-class="demo4-item-selected" disabled-item-class="demo4-item-disabled">
            <checker-item value="YYYY" @on-item-click="onItemClick">年</checker-item>
            <checker-item value="YYYY-MM" @on-item-click="onItemClick">月</checker-item>
            <checker-item value="YYYY-MM-DD" @on-item-click="onItemClick">日</checker-item>
          </checker>
        </div>
      </popup>
      <datetime v-model="startTime" title="开始时间" :format="typeVal" @on-change="startTimes"></datetime>
      <datetime v-model="endTime" title="结束时间" :format="typeVal" @on-change="EndTimes"></datetime>
      <x-input title="店铺选择" v-model="cityVal" ><x-button slot="right" mini type="primary" plain @click.native="showPopupPicker=true">选择店铺</x-button ></x-input>
      <popup-picker title="111" :show.sync="showPopupPicker" :data="list3" :show-cell="false" @on-change="storeSelected" :columns="3"
        v-model="city" show-name></popup-picker>
      <popup-picker title="店铺排名" :data="list1" v-model="value1" ></popup-picker>
    </group>
    <group class="text-center cover" title="最多只能生成三个数据池">
      <x-button type="primary" plain @click.native="savaCode">立即生成数据池</x-button>
      </group>
      <group-title>数据池</group-title>
    <checker v-model="vipType" default-item-class="chcker-item" selected-item-class="item-selected" type="checkbox">
        <checker-item v-for="(item,index) in formData" :key="index" :value="item.value" class="data-bg">
            <p>
              <label>开始时间：</label>{{item.startTime}}
            </p>
            <p>
              <label>结束时间：</label>{{item.endTime}}
            </p>
            <p class="ellipsis-1">
              <label>店铺：</label>{{item.storeSelected}}
            </p>
            <p class="ellipsis-1">
              <label>店铺排名：</label>{{item.ranking}}
            </p>
            <x-icon @click.self.stop.native="closedBase(item.value)" type="ios-close-outline" size="30" class="break-icon" style="fill:#ff7800;"></x-icon>
        </checker-item>
    </checker>
    <group class="text-center getchart">
      <x-button type="primary" @click.native="chartBtn">生成图表</x-button>
      </group>
      <popup v-model="showDialogStyle" class="style-dialog" position="left" width="100%">
        <div ref="popChart" :style="{ width: size.width+'px', height: size.height + 'px' }" ></div>
       
        <div class="chartBtn" @click="showDialogStyle=false">
           <x-icon type="ios-close-outline" size="40" class="break-icon" style="fill:#ff7800;"></x-icon> <span>返回</span>
        </div>
      </popup>
      <confirm v-model="confirms"
      title="警告！"
      @on-confirm="onConfirm"
 >
        <p style="text-align:center;">是否删除此程序池？删除后将不可恢复</p>
      </confirm>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
  import Vue from "vue";
   import VeBar from 'v-charts/lib/bar'
  import $ from "jquery";
    import echarts from 'echarts'
  import {
   Confirm,
    GroupTitle,
    PopupPicker,
    Checker,
    CheckerItem,
    Popup,
    Datetime,
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
    XButton,
    Toast,
    XInput
  } from "vux";
  export default {
    name: "FormTemplate",
    components: {
      Confirm,
      VeBar,
      GroupTitle,
      XInput,
      PopupPicker,
      Toast,
      Checker,
      CheckerItem,
      Popup,
      Datetime,
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
        deletBaseIndex:null,
        confirms:false,
        dataBase:0,
        formData:[],
        vipType: [],
        
        chartBarData: {
          chartSettings: {
            dimension: ['城市'],
            metrics: ['客流量'],
            xAxisType: ['KMB', 'percent'],
            xAxisName: ['客流量'],
          },
          chartData: {
            columns: ['城市', '客流量'],
            rows: [{
              '城市': '合肥',
              '客流量': '1571'
            }, {
              '城市': '上海',
              '客流量': '181'
            }, {
              '城市': '杭州',
              '客流量': '198544'
            }, {
              '城市': '深圳',
              '客流量': '5849'
            }]

          }
        },
        showDialogStyle: false,
         list1: [['前五名', '后五名']],
    
        value1: ['前五名'],
        cityValArr: [],
        cityVal: '',
        showPopupPicker: false,
        city: [],
        list3: [{
          name: '华东区',
          value: 'huadong',
          parent: '0'
        }, {
          name: '浙江省',
          value: 'zhejiang',
          parent: 'huadong'
        }, {
          name: '南京夫子庙店',
          value: 'nanjing',
          parent: 'zhejiang'
        }, {
          name: '华北区',
          value: 'huabei',
          parent: '0'
        }, {
          name: '北京市',
          value: 'beijing',
          parent: 'huabei'
        }, {
          name: '北京市XX店',
          value: 'xx',
          parent: 'beijing'
        }],
        showPopup: false,
        required: true,
        typeVal: 'YYYY',
        startTime: '2018',
        endTime: '2018',
        size:{
          width:'',
          height:''
        },
        popChartOption:{
          color:['#ff7800','#999999'],
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
          }
      }
    },
    watch:{

      cityVal(newVal,oldVal){
        let self = this
          if(newVal===''){
            self.cityValArr.length=0
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
    mounted() {
      let width = $('body').width()
      let height = $('body').height()-50
      this.size={
        width:width,
        height:height
      }
      
    },
    methods: {
      popChartInit(option) {
        this.popChart = echarts.init(this.$refs.popChart);
        this.popChart.setOption(option)
      },
      chartBtn() {
        this.showDialogStyle = true
        let option = this.popChartOption
        this.popChartInit(option)
      },
      storeSelected(val) {
        let arr = []
        let self = this
        for (let i = 0; i <= self.list3.length; i++) {
           let values = self.list3[i].value
           if(values===val[2]){
             if(self.cityValArr.indexOf(self.list3[i].name)!=-1) break
             self.cityValArr.push(self.list3[i].name)
             break
           }
        }
        arr = self.cityValArr
        this.cityVal= arr.toString()
        
      },
      macthTime(S, E) {
        let self = this
        let start = new Date(S.replace(/-/g, "\/"))
        let end = new Date(E.replace(/-/g, "\/"))
        if (start > end) {
          this.$vux.toast.show({
            text: '结束时间不能大于开始时间',
            type: 'warn'

          })
          self.endTime = S
        }
      },
      savaCode(){
        
        let self = this
        let obj = {
          value:self.dataBase++,
          startTime:self.startTime,
          endTime:self.endTime,
          storeSelected:self.cityValArr.toString(),
          ranking:self.value1.toString()
        }
        if(self.formData.length==3){
          self.formData.splice(0,1)
        }
        self.formData.push(obj)
        this.$vux.toast.show({
            text: '添加入程序池成功！',
            type: 'success',
            onHide () {//清空表单
               self.startTime = ''
               self.endTime = ''
               self.cityValArr.length = 0
              
            }
          })
      },
      EndTimes(val) {

        this.endTime = val
        this.macthTime(this.startTime, this.endTime)
      },
      startTimes(val) {

        this.startTime = val
        this.macthTime(this.startTime, this.endTime)
      },
      onConfirm(){
        let self = this
        
        self.formData.map((item,indexs)=>{
          if(item.value==self.deletBaseIndex){
            self.formData.splice(indexs,1)
          }
        })
      },
      onItemClick(value) {
        this.showPopup = false
      },
      closedBase(index){
        let self = this
        self.confirms = true
        this.deletBaseIndex = index
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

</style>
