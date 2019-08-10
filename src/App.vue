<template>
  <div id="app">
    <Header />
    <div class="appContainer">
      <RatingCalculator class="center" />
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import RatingCalculator from "./components/RatingCalculator";
export default {
  name: "App",
  components: {
    Header,
    RatingCalculator
  }
};
</script>

<style>
html,
#app,
body {
  height: 100%;
}
body {
  font-family: Roboto Slab, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f6f6f6;
  display: flex;
  margin: 0;
  height: 100%;
}
#app {
  width: 100%;
}
.appContainer {
  height: 90%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
