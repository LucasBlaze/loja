<template>
  <div>
      <ul class="c-list-cart" >
        {{ cart.list }}
        <li class="c-list-cart__item" v-for="product in cart.products" :key="product.productId">
          <div class="c-list-cart__img-wrapper">
            <!-- <img :src="product.image" :alt="product.title" class="c-list-cart__img"> -->
          </div>
          <div class="c-list-cart__content">
            <h3 class="c-list-cart__products-ttl">{{ product.title }}</h3>
            <div>
              {{ getImgById(product.productId) }}
              <!-- <QtdBtns /> -->

              <!-- <span class="c-list-cart__total" v-html="$convertPrice(product.price * product.quantity)"></span> -->
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    cart() {
      return this.$store.state.cart.list
    },
    ...mapGetters({
      getImgById: 'products/getImgById'
    })
  },

}
</script>
