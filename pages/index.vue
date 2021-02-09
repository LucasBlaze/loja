<template>
  <div>
    <Search />
    <Productshighlight />

    <div class="o-wrapper">
      <Filterproducts @open-categories="showCategories = true" />
      <Listproducts />
    </div>

    <Listcategories v-if="showCategories" @close-categories="showCategories = false" />
    <!-- <Qtdproducts/> -->
  </div>
</template>

<script>

export default {
  layout: 'default',
  data() {
    return {
      showCategories: false
    }
  },
  created() {
    this.$store.dispatch('products/getProducts');
    this.$store.dispatch('products/getHighlights');
    this.$store.dispatch('products/getCategories');
  },
}
</script>

<style lang="stylus" scoped>
.c-search
  margin-top 10px

.c-slider-products
  margin-top 15px

.c-list-products
  margin-top 15px

.c-filter
  margin 15px 0 30px

</style>


