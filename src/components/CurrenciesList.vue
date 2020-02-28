<template>
  <div class="d-flex flex-column list">
    <span class="title">Currency list</span>
    <hr class="title-divider" />
    <div class="d-flex flex-column" v-if="currencies.length">
      <div
        v-for="currency in currencies"
        :key="currency.id"
        @mouseover="deleting = true"
        @mouseleave="deleting = false"
        class="currency"
      >
        <div>
          {{ currency.iso }}
        </div>
        <div class="pointer" v-if="deleting">
          Delete
        </div>
      </div>
      <hr />
    </div>
    <div class="d-flex flex-column" v-else>
      No currencies added. Try adding some.
      <hr />
    </div>
    <div class="d-flex">
      <router-link to="/currencies/add">
        <font-awesome-icon icon="plus-circle" style="color: #ff6600" />
        <span class="add-currency pointer">
          Add currency
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getCurrencies();
  },
  data: () => ({
    currencies: [
      // { id: 1, iso: "EUR", symbol: "e" }
    ],
    deleting: false
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
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
</style>
