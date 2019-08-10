<template>
  <div class="loanContainer">
    Průmerná výše {{ loanAmount }}
    {{ loanAmount === 1 ? "půjčky" : "půjček" }} činí&nbsp;
    <vue-numeric
      read-only-class="importantNumber"
      currency="Kč"
      separator="space"
      v-model="avgLoan"
      currency-symbol-position="suffix"
      precision="2"
      read-only
    ></vue-numeric>
  </div>
</template>
<script>
import VueNumeric from "vue-numeric";
export default {
  name: "AvgLoanAmount",
  props: ["loanAmount", "avgLoan"],
  components: {
    VueNumeric
  }
};
</script>
<style lang="less" scoped>
.loanContainer {
  height: 20px;
  line-height: 20px;
}
.aa {
  vertical-align: middle;
}
.importantNumber {
  font-size: 22px;
  color: #37b4be;
}
</style>
