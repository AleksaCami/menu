<template>
  <div id="app">
    <div class="d-flex">
      <Sidebar />
      <div class="d-flex flex-column full">
        <Header />
        <div id="page-content-wrapper">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
export default {
  components: {
    Sidebar,
    Header
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans&display=swap");

html {
  width: 100%;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
  }
}
.full {
  width: calc(100% - 300px);
}
.page-container {
  overflow: hidden;
  position: relative;
  min-height: 100%;
}
.pointer {
  cursor: pointer;
}
</style>
