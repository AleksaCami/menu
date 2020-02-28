<template>
  <div class="d-flex" id="wrapper">
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="nav-color-left sidebar-heading">
        <img
          class="logo"
          src="../../assets/images/menulogo500x500px-01.png"
          alt="menu logo"
          height="70"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #fff;
$accent: #ff6600;

#sidebar-wrapper {
  min-height: 100vh;
  width: 300px;
  margin-left: -15rem;
  -webkit-transition: margin 0.25s ease-out;
  -moz-transition: margin 0.25s ease-out;
  -o-transition: margin 0.25s ease-out;
  transition: margin 0.25s ease-out;
}
#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;
}
#page-content-wrapper {
  min-width: 100vw;
}
@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }
  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }
}
.nav-text {
  color: $white;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 600;
}
.nav-color-left {
  background-color: #e85d00;
  max-height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.currencies-container {
  display: flex;
  min-width: 1200px;
}
.currencies-list {
  background-color: #9292924d;
  height: 100vh;
}
</style>
