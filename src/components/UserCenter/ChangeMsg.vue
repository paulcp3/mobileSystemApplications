<template>
  <div class="change-msg" style="height:100%;">
     <group class="form-group">
        
          <x-input title="昵称：" v-model="formData.name"></x-input>
          <x-input title="生日：" v-model="value2" @click.native="showPopup=!showPopup"></x-input>
          <x-input title="手机号码：" v-model="formData.name"></x-input>

          <x-button type="primary">保存</x-button>
     </group>
     <div v-transfer-dom>
      <popup v-model="showPopup">
        <datetime-view v-model="value2"></datetime-view>
      </popup>
    </div>
  </div>

</template>
<script>
import Vue from "vue";
import { TransferDom } from 'vux'
import {

  DatetimeView,
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
  Popup
} from "vux";
export default {
  name: "post-wei-xin",
  components: {
    Popup,
    XTable,
    DatetimeView,
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
      addressData: ChinaAddressV4Data,
      value2:'',
      showPopup:false,
      formData: []
    };
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
