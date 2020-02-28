<template>
  <div class="d-flex flex-column list">
    <span class="title">Currency list</span>
    <hr class="title-divider" />

    <SearchForm @search="search" @clearSearch="getCurrencies" />

    <div v-if="currencies.length">
      <div class="d-flex flex-column" v-if="!searching">
        <div v-for="(currency, index) in currencies" :key="currency.id">
          <div
            class="currency pointer"
            @click="editCurrency(currency)"
            @mouseover="deleting = true"
            @mouseleave="deleting = false"
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
      </div>
      <div v-else>
        <div v-for="(currency, index) in searchResults" :key="currency.id">
          <div
            class="currency pointer"
            @click="editCurrency(currency)"
            @mouseover="deleting = true"
            @mouseleave="deleting = false"
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
      </div>
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
import SearchForm from "./SearchForm";
export default {
  components: {
    SearchForm
  },
  mounted() {
    this.getCurrencies();
  },
  data: () => ({
    currencies: [],
    currenciesValues: [],
    storage: [],
    deleting: false,
    searching: false,
    reformattedSearchString: "",
    searchResults: []
  }),
  methods: {
    getCurrencies() {
      this.searchResults = [];
      this.searching = false;
      if (localStorage.getItem("currencies")) {
        try {
          this.currencies = JSON.parse(localStorage.getItem("currencies"));
        } catch (e) {
          localStorage.removeItem("currencies");
        }
      }
    },
    editCurrency(currency) {
      this.$router.push(`/currencies/edit/${currency.id}`).catch(() => {});
    },
    removeCurrency(id) {
      this.currencies.splice(id, 1);
      this.saveCurrencies();
    },
    saveCurrencies() {
      let parsed = JSON.stringify(this.currencies);
      localStorage.setItem("currencies", parsed);
    },
    search(searchParams) {
      this.searching = true;
      this.reformattedSearchString = searchParams.join(" ");
      this.currencies.filter(element => {
        if (element.iso === this.reformattedSearchString) {
          this.searchResults.push(element);
        }
      });
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
