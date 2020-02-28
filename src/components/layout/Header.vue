<template>
  <div class="nav-color nav-container fixed col-12 pl-0">
    <div class="col-4 nav-color-left nav-content-left">
      <img
        class="logo"
        src="../../assets/images/menulogo500x500px-01.png"
        alt="menu logo"
        height="70"
      />
    </div>
    <div class="col-8 nav-content-right">
      <i class="fa fa-eur" aria-hidden="true" />
      <font-awesome-icon icon="euro-sign" style="color: white" />
      <span class="nav-text">
        Currencies
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #fff;
$accent: #ff6600;

.nav-container {
  display: flex;
  min-width: 1200px;
}
.fixed {
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.nav-text {
  color: $white;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.nav-content-left {
  background-color: #e16320;
  display: flex;
  justify-content: flex-start;
}
.nav-content-right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
}
.nav-color {
  background: $accent;
}
</style>
