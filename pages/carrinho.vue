<template>
  <div class="c-cart">
    <div class="o-wrapper">
      <ArrowBack />

      <ListCart />

      <PayDetails />

    </div>
  </div>
</template>

<script>
import {  mapGetters } from 'vuex'
export default {
  layout: 'clean',
  computed: {
    cart() {
      return this.$store.state.cart
    },
  },
  async created() {
    await this.$store.dispatch('cart/getCart', 1);
    this.getProductsIds();
  },
  methods: {
    getProductsIds() {
      let arrIds = [];
      this.cart.list.products.forEach((el) => arrIds.push(el.productId));
      this.$store.dispatch('products/getProductsById', arrIds);

    },

  }
}
</script>

<style lang="stylus" scoped>
@import 'kouto-swiss'

.c-cart
  padding 20px 0
  background-color #F5F5F5


  .c-list-cart
    margin-top 50px
    display flex
    align-items center
    flex-direction column

    &__item
      padding 20px
      border-radius 4px
      box-shadow 0 2px 5px 0 rgba(0, 0, 0, 0.16)
      background-color #fff
      display flex
      margin-bottom 25px
      width 100%
      min-height 150px

    &__img-wrapper
      max-width 85px

    &__img
      width 100%
      max-height 110px
      display block
      margin 0 auto

    &__content
      padding-left 30px
      display flex
      flex-direction column
      justify-content space-between
      > div
        display flex
        margin-bottom auto
        padding-top 15px

    &__products-ttl
      font-size rem(16px)
      font-weight bold
      margin-bottom auto

    &__total
      font-weight bold
      font-size 16px
      margin-left 10px
      min-width 70px

      &:before
        content 'Total'
        display block
        font-size 10px
        margin-bottom 5px

</style>
