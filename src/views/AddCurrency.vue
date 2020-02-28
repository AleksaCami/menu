<template>
  <div>
    <div class="container-fluid">
      <div class="d-flex flex-column form-title">
        <span class="title">Add currency</span>
        <hr class="title-divider" />
      </div>
      <div class="d-flex flex-column form-spacing">
        <div class="input-wrapper">
          <label for="code">
            Currency code
          </label>
          <input id="code" />
        </div>
        <hr class="form-divider" />
        <div class="input-wrapper">
          <label for="symbol">
            Currency symbol
          </label>
          <input id="symbol" />
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-end form-spacing">
        <button class="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  color: #ff6600;
  text-align: start;
  font-size: 16px;
}
.title-divider {
  background: #ff6600;
  width: 100%;
}
.form-divider {
  width: 100%;
}
.form-title {
  padding: 20px;
}
.form-spacing {
  padding: 20px;
}
.input-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.btn-primary {
  background-color: #ff6600;
  border-color: #ff6600;
}
</style>
