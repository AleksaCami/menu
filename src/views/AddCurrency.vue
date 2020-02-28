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
          <input
            id="code"
            @keyup="error = ''"
            v-model="currency.iso"
            maxlength="3"
          />
        </div>
        <span class="error" v-if="error">
          {{ error }}
        </span>
        <hr class="form-divider" />
        <div class="input-wrapper">
          <label for="symbol">
            Currency symbol
          </label>
          <input id="symbol" v-model="currency.symbol" />
        </div>
      </div>
      <hr />
      <div class="d-flex justify-content-end form-spacing">
        <button class="btn btn-primary" @click="addCurrency">
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";

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
    currencies: [],
    error: ""
  }),
  computed: {
    formValid() {
      return !this.error.length && this.currency.iso && this.currency.symbol;
    }
  },
  methods: {
    getCurrencies() {
      if (localStorage.getItem("currencies")) {
        try {
          this.currencies = JSON.parse(localStorage.getItem("currencies"));
        } catch (e) {
          localStorage.removeItem("currencies");
        }
      }
    },
    addCurrency() {
      this.currencies.filter(element => {
        if (element.iso === this.currency.iso) {
          this.error = "Already exists";
        }
      });
      if (this.formValid) {
        this.currency.id = _.uniqueId();
        this.currencies.find(element => {
          if (element.id === this.currency.id) {
            this.currency.id = _.uniqueId();
          }
        });
        this.currencies.push(this.currency);
        this.saveCurrencies();
        window.location.reload();
      }
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
