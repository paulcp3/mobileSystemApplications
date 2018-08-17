<template>
  <div class="MultiStore">
    <tab>
      <tab-item @on-item-click="onItemClick(1)" :selected="selectIndex === 1" :key="1">热力图</tab-item>
      <tab-item @on-item-click="onItemClick(2)" :selected="selectIndex === 2" :key="2">客流计数</tab-item>
    </tab>
     <div class="MultiStore_contair" v-show="selectIndex==1">
       <form-Template></form-Template>
     </div>
     <div class="MultiStore_contair" v-show="selectIndex==2">
       <form-Template></form-Template>
     </div>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
import Vue from "vue";
import FormTemplate from "./FormTemplate";
import { Tab, TabItem } from "vux";
export default {
  name: "MultiStore",
  components: {
    Tab,
    TabItem,
    FormTemplate
  },
  data() {
    return {
      selectIndex: 1
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

</style>
