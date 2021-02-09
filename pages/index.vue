<template>
  <div>
    <Search />
    <ProductsHighlight />

    <div class="o-wrapper">
      <FilterProducts @open-categories="showCategories = true" />
      <ListProducts />
    </div>

    <ListCategories
      v-if="showCategories"
      @close-categories="showCategories = false"
    />
    <!-- <QtdProducts/> -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  layout: 'default',

  data() {
    return {
      showCategories: false
    }
  },

  created() {
    this.getProducts();
    this.getHighlights();
    this.getHighlights();
  },

  methods: {
    ...mapActions(
       'products', {
          getProducts : 'getProducts',
          getHighlights: 'getHighlights',
          getCategories: 'getCategories'
       }
    ),
  }
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


