<template>
  <div class="flex fixed">
    <div class="nav-color nav-content-left">
      <span>Menu left</span>
    </div>
    <div class="nav-color nav-content-right">
      <span>Menu right</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #fff;
$accent: #ff6600;

.flex {
  display: flex;
}
.fixed {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  margin-left: -8px;
}
.nav-text {
  color: $white;
}
.nav-content-left {
  padding: 15px;
}
.nav-content-right {
  padding: 15px;
}
.nav-color {
  background: $accent;
}
</style>
