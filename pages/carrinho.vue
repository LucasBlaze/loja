<template>
  <div class="c-cart">
    <div class="o-wrapper">
      <Arrowback />

      <ul class="c-list-cart" >
        <li class="c-list-cart__item" v-for="product in cartDetails" :key="product.id">
          <div class="c-list-cart__img-wrapper">
            <img :src="product.image" :alt="product.title" class="c-list-cart__img">
          </div>
          <div class="c-list-cart__content">
            <h3 class="c-list-cart__products-ttl">{{ product.title }}</h3>
            <div>
              <div class="c-list-cart__qtd-btns">
                <a href="javascript:;" class="c-list-cart__btn-less"></a>
                <span class="c-list-cart__qtd">{{ product.quantity }}</span>
                <a href="javascript:;" class="c-list-cart__btn-more"></a>
              </div>
              <span class="c-list-cart__total" v-html="$convertPrice(product.price * product.quantity)"></span>
            </div>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  layout: 'clean',

  data() {
    return {
      cart: {},
      cartDetails: [],
    }
  },

  methods: {
    getCart() {
      return this.$axios('https://fakestoreapi.com/carts/1')
        .then(r => this.cart = r.data)
        .catch(e => console.log(e))
    },

    getProducts() {
      this.cart.products.forEach((el, index) => {
        this.$axios('https://fakestoreapi.com/products/'+el.productId)
          .then(r => {
            console.log(el)
            this.cartDetails.push(Object.assign(r.data, this.cart.products[index]));
          })
          .catch(e => console.log(e))
      });
    },

  },

  async created() {
    await this.getCart();
    this.getProducts();
  },

}
</script>

<style lang="stylus">
@import 'kouto-swiss'

body
  background-color #F5F5F5

.c-cart
  padding 20px 0

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

  &__qtd-btns
    box-shadow 0 2px 5px 0 rgba(38, 48, 60, 0.2)
    display flex
    height 40px

  &__qtd
    border-left 1px solid #f2f6f9
    border-right 1px solid #f2f6f9
    width 50px
    text-align center
    line-height 2.5

  &__products-ttl
    font-size rem(16px)
    font-weight bold
    margin-bottom auto

  &__btn-less
  &__btn-more
    width 30px
    display flex
    justify-content center
    align-items center

    &:before
      content ''
      width 10px
      height 20px
      background-repeat no-repeat
      background-size contain

  &__btn-less
    &:before
      background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11.849' height='22.371' viewBox='0 0 11.849 22.371'%3E%3Cg id='Grupo_1906' data-name='Grupo 1906' transform='translate(1588.164 -506.815) rotate(90)'%3E%3Cpath id='Line_2' data-name='Line 2' d='M.522.522,10.957,10.957' transform='translate(507 1576.5)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3Cpath id='Line_2-2' data-name='Line 2' d='M10.957.522.522,10.957' transform='translate(517.522 1576.5)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A")

  &__btn-more
    &:before
      background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11.849' height='22.371' viewBox='0 0 11.849 22.371'%3E%3Cg id='Grupo_35' data-name='Grupo 35' transform='translate(-1576.315 529.185) rotate(-90)'%3E%3Cpath id='Line_2' data-name='Line 2' d='M.522.522,10.957,10.957' transform='translate(507 1576.5)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3Cpath id='Line_2-2' data-name='Line 2' d='M10.957.522.522,10.957' transform='translate(517.522 1576.5)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A")

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
