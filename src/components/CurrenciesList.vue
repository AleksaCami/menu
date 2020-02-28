<template>
  <div class="d-flex flex-column list">
    <span class="title">Currency list</span>
    <hr class="title-divider" />
    <div class="d-flex flex-column" v-if="currencies.length">
      <span v-for="currency in currencies" :key="currency.id" class="currency">
        {{ currency.iso }}
        <hr />
      </span>
    </div>
    <div class="d-flex flex-column" v-else>
      No currencies added. Try adding some.
      <hr />
    </div>
    <div class="d-flex">
      <a href="/currencies/add">
        <font-awesome-icon icon="plus-circle" style="color: #ff6600" />
        <span class="add-currency pointer">
          Add currency
        </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getCurrencies();
  },
  data: () => ({
    currencies: [{ id: 1, iso: "EUR", symbol: "e" }]
  }),
  methods: {
    getCurrencies() {}
  }
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
}
.add-currency {
  color: #ff6600;
}
.list {
  padding: 20px;
}
.title {
  color: #ff6600;
  text-align: start;
  font-size: 16px;
}
.title-divider {
  background: #ff6600;
  width: 100%;
}
.currency {
  text-align: start;
  font-size: 16px;
}
</style>
