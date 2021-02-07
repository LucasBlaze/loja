<template>
  <div class="c-slider-products">
    <VueSlickCarousel v-bind="settings" v-if="products.length > 0">
      <div class="c-card-highlight" v-for="product in products" :key="product.id">
        <div class="c-card-highlight__col">
          <img :src="product.image" :alt="product.title" class="c-card-highlight__product-img">
        </div>
        <div class="c-card-highlight__col">
          <span class="c-card-highlight__price" v-html="$convertPrice(product.price)"></span>
          <span class="c-card-highlight__title">{{ product.title }}</span>
          <a href="javascript:;" class="o-btn" title="Adicionar">Adicionar</a>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';

export default {
  components: { VueSlickCarousel },
  props: ['products'],

  data() {
    return {
      settings: {
        dots: true,
        slideToShow: 1,
        slideToScroll: 1,
        arrows: false,
        centerMode: true,
        mobileFirst: true,
        responsive: [{
          breakpoint: 400,
          settings: {

            }
        }]
      }
    }
  },
}
</script>

<style lang="stylus">
@import 'rupture'
@import 'kouto-swiss'

.c-slider-products
  max-width 100vw
  overflow hidden

  .slick-list
    padding 20px 20% 20px 30px !important
    margin 0 -10px
    +above(400px)
      margin 0 -20px

  .slick-track
    display flex !important

  .slick-slide
    height inherit !important
    margin 0 10px
    +above(400px)
      margin 0 20px

    > div
      height 100%

  .slick-dots
    display flex !important
    flex-direction row
    bottom -25px
    justify-content center

    > li
      display flex
      justify-content center
      align-items center

      > button
        width 10px
        height 10px
        border solid 1px #02519d
        border-radius 50%
        padding 0
        transition .2s ease-out

      &.slick-active
        > button
          width 12px
          height 12px
          background-color #02519d



  .c-card-highlight
    padding 30px 15px
    border-radius 4px
    box-shadow 0 2px 5px 0 rgba(0, 0, 0, 0.16)
    background-color #fff
    display flex!important
    justify-content space-between
    height 100%

    &__col
      width calc('50% - 12px')
      display flex

      &:nth-child(1)
        justify-content center
        align-items center

      &:nth-child(2)
        flex-direction column
        justify-content space-between

    &__product-img
      max-width 100%
      max-height 140px

    &__price
      font-size rem(28px)
      font-weight bold
      +above(400px)
        font-size rem(36px)

      > span
        font-size rem(18px)
        +above(400px)
          font-size rem(20px)

    &__title
      font-size 12px
      line-height 1.33
      padding 10px 0

    .o-btn
      font-size rem(12px)

</style>

