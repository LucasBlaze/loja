<template>
  <div class="c-search">
    <div class="o-wrapper">
      <div class="c-search__mask">
        <input type="text" placeholder="Busque seu produto" class="o-input" @input="handleSearch">
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  computed: {
    products() {
      return this.$store.state.products.list
    },
    filter() {
      return this.$store.state.products.filter
    }
  },
  methods:{
    handleSearch(e){
      this.$debounce(this.setStore(e.target.value), 500);
    },
    setStore(word) {
      this.setFilterSearch(word);
      this.setFilteredProducts(this.$filterProducts(this.filter, this.products));
    },
    ...mapMutations({
      setFilterSearch: 'products/setFilterSearch',
      setFilteredProducts: 'products/setFilteredProducts'
    })
  }
}
</script>

<style lang="stylus">
@import 'kouto-swiss'

.c-search
  .o-input
    width 100%
    font-size rem(14px)
    padding-right 30px

  &__mask
    position relative

    &:after
      pointer-events none
      content ''
      position absolute
      width 16px
      height 16px
      right 15px
      top 50%
      transform translateY(-50%)
      background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='15.998' viewBox='0 0 16 15.998'%3E%3Cg%3E%3Cpath fill='%2300519d' d='M11.022-116.294a7.327 7.327 0 0 0-.527-9.777 7.324 7.324 0 0 0-10.358.015A7.324 7.324 0 0 0 .152-115.7a7.324 7.324 0 0 0 9.776.51l2.968 2.979 1.1-1.1zm-1.509-.5a5.641 5.641 0 0 1-4.051 1.682 5.824 5.824 0 0 1-4.051-1.7 5.754 5.754 0 0 1-.076-8.137 5.754 5.754 0 0 1 8.137-.076 5.754 5.754 0 0 1 1.723 4.079v.081a5.8 5.8 0 0 1-1.681 4.073z' transform='translate(2 128.209)'/%3E%3C/g%3E%3C/svg%3E%0A")
      background-repeat no-repeat
      background-position 95% center

</style>
