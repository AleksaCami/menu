<template>
  <div>
    <div class="container-fluid">
      <div class="d-flex flex-column form-title">
        <span class="title">Edit currency</span>
        <hr class="title-divider" />
      </div>
      <div class="d-flex flex-column form-spacing">
        <div class="input-wrapper">
          <label for="code">
            Currency code
          </label>
          <input id="code" v-model="currency.iso" maxlength="3" required />
        </div>
        <hr class="form-divider" />
        <div class="input-wrapper">
          <label for="symbol">
            Currency symbol
          </label>
          <input id="symbol" v-model="currency.symbol" required />
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-end form-spacing">
        <button class="btn btn-primary" @click="editCurrency">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.getCurrencies();
    if (this.$route.name === "CurrenciesEditing") {
      this.currency.id = this.$route.params.id;
      this.getCurrentCurrency();
    }
  },
  data: () => ({
    currency: {
      id: null,
      iso: null,
      symbol: null
    },
    currencies: []
  }),
  methods: {
    getCurrentCurrency() {
      if (localStorage.getItem("currencies")) {
        try {
          this.currencies = JSON.parse(localStorage.getItem("currencies"));
          this.currencies.find(element => {
            if (element.id === this.currency.id) {
              this.currency = element;
            }
          });
        } catch (e) {
          localStorage.removeItem("currencies");
        }
      }
    },
    getCurrencies() {
      if (localStorage.getItem("currencies")) {
        try {
          this.currencies = JSON.parse(localStorage.getItem("currencies"));
        } catch (e) {
          localStorage.removeItem("currencies");
        }
      }
    },
    editCurrency() {
      this.currencies.forEach(element => {
        if (element.id === this.currency.id) {
          element = this.currency;
          this.saveCurrencies();
        }
      });
      this.$router.push({ name: "Currencies" });
      window.location.reload();
    },
    saveCurrencies() {
      let parsed = JSON.stringify(this.currencies);
      localStorage.setItem("currencies", parsed);
      this.currency = {
        id: "",
        iso: "",
        symbol: ""
      };
    }
  }
};
</script>

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
.btn-primary:hover {
  background-color: #e05a01;
  border-color: #e05a01;
}
</style>
