<template>
  <ul class="c-list-products">
    <li class="c-list-products__item" v-for="product in products" :key="product.id">
      <div class="c-list-products__header">
        <span class="c-list-products__price" v-html="$convertPrice(product.price)"></span>
        <a href="javascript:;" class="c-list-products__heart"></a>
      </div>
      <img :src="product.image" :alt="product.title" class="c-list-products__product-img">
      <span class="c-list-products__title">{{ product.title }}</span>
      <a href="javascript:;" class="o-btn" title="Adicionar">Adicionar</a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products.listFilteredProducts
    }
  },
}
</script>

<style lang="stylus">
@import 'rupture'
@import 'kouto-swiss'

.c-list-products
  display flex
  flex-wrap wrap
  justify-content space-between

  &__item
    padding 10px 10px 15px
    border-radius 4px
    box-shadow 0 2px 5px 0 rgba(0, 0, 0, 0.16)
    background-color #fff
    width calc('50% - 12px')
    display flex
    flex-direction column
    align-items center
    margin-bottom 25px

  &__product-img
    max-width 80%
    max-height 110px
    margin-top auto
    margin-bottom 15px

  &__header
    display flex
    width 100%
    justify-content space-between
    margin-bottom 15px

  &__price
    font-size rem(16px)
    font-weight bold

  &__heart
    width 18px
    height 16px
    background-size contain
    background-repeat no-repeat
    background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18.651' height='16.6' viewBox='0 0 18.651 16.6'%3E%3Cg id='iconfinder_heart_1814104' transform='translate(-7.6 -10.6)'%3E%3Cg id='Icon-Heart' transform='translate(8.1 11.1)'%3E%3Cpath id='Fill-18' d='M-161.074-203.464l-.3-.258c-6.721-5.465-8.53-7.386-8.53-10.524a4.657,4.657,0,0,1,4.653-4.653,5.333,5.333,0,0,1,4.173,2.142A5.333,5.333,0,0,1-156.9-218.9a4.657,4.657,0,0,1,4.653,4.653c0,3.139-1.809,5.059-8.53,10.524l-.3.258Zm-4.173-14.476a3.7,3.7,0,0,0-3.693,3.693c0,2.7,1.7,4.468,7.866,9.527,6.167-5.059,7.866-6.832,7.866-9.527a3.7,3.7,0,0,0-3.693-3.693,4.61,4.61,0,0,0-3.619,1.994l-.554.628-.554-.628a4.61,4.61,0,0,0-3.619-1.994Z' transform='translate(169.9 218.9)' fill='none' stroke='%23707070' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")

  &__title
    font-size 12px
    line-height 1.33
    padding 10px 0
    margin-top auto
    padding 0 15px 6px

  .o-btn
    font-size rem(12px)

</style>

