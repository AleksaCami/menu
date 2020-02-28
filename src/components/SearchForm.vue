<template>
  <div class="container">
    <form class="mb-5">
      <div class="input-group">
        <input
          v-model="searchString"
          @keydown.13.prevent="parseSearchString"
          type="text"
          class="form-control"
          placeholder="Search..."
        />
        <div class="input-group-append">
          <button v-if="searchString.length" @click="clearSearch">
            <font-awesome-icon
              class="mr-1"
              :icon="['fas', 'trash']"
              style="color: #ff6600"
            />
          </button>
          <button
            @click="parseSearchString"
            class="btn btn-outline-primary"
            type="button"
          >
            <font-awesome-icon
              class="mr-1"
              :icon="['fas', 'search']"
              style="color: #ff6600"
            />
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchForm",
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    parseSearchString() {
      const trimmedSearchString = this.searchString.trim();
      if (trimmedSearchString !== "") {
        const searchParams = trimmedSearchString.split(/\s+/);
        this.$emit("search", searchParams);
      }
    },
    clearSearch() {
      this.searchString = "";
      this.$emit("clearSearch");
    }
  }
};
</script>

<style scoped>
input,
button {
  box-shadow: none !important;
  border-color: #ff6600;
}
input:focus {
  border-color: #ff6600;
}
button:hover {
  border-color: #ff6600;
  background: white;
}
button:focus {
  border-color: #ff6600;
}
.form-control {
  border-color: #ff6600;
}
</style>
