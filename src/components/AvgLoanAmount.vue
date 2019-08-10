<template>
  <div class="loanContainer">
    Průmerná výše {{ loanAmount }}
    {{ loanAmount === 1 ? "půjčky" : "půjček" }} činí&nbsp;
    <span class="importantNumber">{{ avgLoan }} Kč</span>
  </div>
</template>
<script>
export default {
  name: "AvgLoanAmount",
  props: ["loanAmount", "avgLoan"]
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
