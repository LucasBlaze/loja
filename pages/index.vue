<template>
  <div>

    <Search />

    <Productshighlight :products="highlightProducts" />

    <div class="o-wrapper">

      <Filterproducts @open-categories="showCategories = true" />

      <Listproducts />

    </div>

    <Listcategories v-if="showCategories" @close-categories="showCategories = false" :categories="categories"/>

  </div>
</template>

<script>

export default {
  data() {
    return {
      highlightProducts: {},
      categories: {},
      showCategories: false
    }
  },

  created() {

    this.setProducts();
    this.getHighlightProducts();
    this.getCategories();

  },

  methods: {

    setProducts() {
      this.$axios.get('https://fakestoreapi.com/products')
        .then(r => {
          this.$store.commit('products/setProducts', r.data)
          this.$store.commit('products/setFilteredProducts', r.data)
        })
        .catch((e) => {
          console.log(e);
        }
      );
    },

    getHighlightProducts() {
      this.$axios.get('https://fakestoreapi.com/products/category/jewelery?limit=5')
        .then(r => this.highlightProducts = r.data)
        .catch((e) => {
          console.log(e);
        }
      );
    },

    getCategories() {
      this.$axios.get('https://fakestoreapi.com/products/categories')
        .then(r => this.categories = r.data)
        .catch((e) => {
          console.log(e);
        }
      );
    },

  }
}
</script>

<style lang="stylus">
.c-search
  margin-top 10px

.c-slider-products
  margin-top 15px

.c-list-products
  margin-top 15px

.c-filter
  margin 15px 0 30px

</style>


