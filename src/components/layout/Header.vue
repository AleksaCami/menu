<template>
  <div class="nav-color nav">
    <div class="col-8 nav-content">
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

.nav {
  min-height: 80px;
  margin-left: -1px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: calc(1200px - 300px);
  width: 100%;
}
.nav-content {
  display: flex;
  align-items: center;
}
.nav-text {
  color: $white;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.nav-color {
  background: $accent;
}
</style>
