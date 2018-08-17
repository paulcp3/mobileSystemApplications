<template>
  <div class="MachineState">
    <router-view></router-view>
  </div>
</template>
<i18n>
  select address: zh-CN: 选择地址
</i18n>
<script>
import Vue from "vue";

import { Tab, TabItem } from "vux";
export default {
  name: "MachineState",
  components: {
    Tab,
    TabItem
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
