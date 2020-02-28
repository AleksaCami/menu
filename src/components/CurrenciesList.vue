<template>
  <div class="d-flex flex-column list">
    <span class="title">Currency list</span>
    <hr class="title-divider" />
    <div class="d-flex flex-column" v-if="currencies.length">
      <div
        v-for="(currency, index) in currencies"
        :key="currency.id"
        @mouseover="deleting = true"
        @mouseleave="deleting = false"
        @click="editCurrency(currency)"
        class="currency pointer"
        :class="[deleting ? 'hovering' : '']"
      >
        <div>
          {{ currency.iso }}
        </div>
        <div class="pointer" v-if="deleting" @click="removeCurrency(index)">
          Delete
        </div>
      </div>
      <hr class="currency-divider" />
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
    if (localStorage.getItem("currencies")) {
      try {
        this.currencies = JSON.parse(localStorage.getItem("currencies"));
      } catch (e) {
        localStorage.removeItem("currencies");
      }
    }
  },
  watch: {},
  data: () => ({
    currencies: [],
    currenciesValues: [],
    storage: [],
    deleting: false
  }),
  methods: {
    editCurrency(currency) {
      this.$router.push(`/currencies/edit/${currency.id}`);
    },
    removeCurrency(id) {
      this.currencies.splice(id, 1);
      this.saveCurrencies();
    },
    saveCurrencies() {
      let parsed = JSON.stringify(this.currencies);
      localStorage.setItem("currencies", parsed);
    }
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
.hovering {
  background-color: #e8e8e8;
}
.currency {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 10px;
}
.currency-divider {
  width: 100%;
}
</style>
