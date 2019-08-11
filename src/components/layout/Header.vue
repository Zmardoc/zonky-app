<template>
  <nav>
    <img alt="Zonky.cz logo" src="../../assets/logo.svg" class="logo" />
    <div class="build">[v{{ version }}]</div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    version: process.env.VUE_APP_BUILD
  })
};
</script>

<style lang="less" scoped>
nav {
  .logo {
    top: 8px;
    position: absolute;
    left: 20px;
    z-index: inherit;
    height: 29px;
    color: transparent;
    background-color: transparent;
  }
  .build {
    float: right;
    line-height: 41px;
    margin-right: 15px;
    color: white;
    font-size: 15px;
  }
  height: 41px;
  background-color: #37b4be;
  -webkit-box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.3);
}
</style>
