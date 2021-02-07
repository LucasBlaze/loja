<template>
  <div>
    <div class="o-bg-mask"></div>
    <ul class="c-list-categories">
      <a href="javascript:;" @click="$emit('close-categories')" title="Fechar Categorias" class="c-list-categories__close">
        <img src="~/assets/img/icons/close.svg" class="c-list-categories__close-img" alt="Fechar Categorias">
      </a>
      <li class="c-list-categories__item">
        <a href="javascript:;" @click="handleFilter" title="all">
          Todos
        </a>
      </li>
      <li
      v-for="category in categories"
      :key="category"
      class="c-list-categories__item">
        <a href="javascript:;" @click="handleFilter" :title="category">
          {{category}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['categories'],
  computed: {
    products() {
      return this.$store.state.products.listProducts
    },
    filter() {
      return this.$store.state.products.filter
    }
  },
  methods:{
    handleFilter(e){
      this.setStore(e.target.title);
    },

    setStore(category) {
      this.$store.commit('products/setFilterCategory', category);
      this.$store.commit('products/setFilteredProducts', this.$filterProducts(this.filter, this.products));
      this.$emit('close-categories');
    },
  }
}
</script>

<style lang="stylus">
  @import 'kouto-swiss'

  .o-bg-mask
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    background-color #3E3F58
    opacity .8

  .c-list-categories
    position fixed
    width calc('100% - 50px')
    max-width 390px
    transform translate(-50%, -50%)
    background-color #fff
    top 50%
    left 50%
    z-index 20
    box-shadow 0 2px 5px 0 rgba(0, 0, 0, 0.16)
    border-radius 4px
    padding 22px 30px
    display flex
    flex-direction column
    justify-content space-evenly

    &__item
      margin 5px 0
      position relative
      display flex
      align-items center
      padding-top 10px
      flex-direction column

      > a
        color #707070
        font-size rem(26px)
        font-family Helvetica, sans-serif
        font-weight 400
        display block
        width 100%
        padding-left 15px
        margin-top 10px
        padding-bottom 10px

        &:hover
          color #00519d

        &:first-letter
          text-transform uppercase

      &:before
      &:after
        content ''
        width 100%
        height 1px
        background-color #707070
        position absolute
        bottom -10px
        left 0
        opacity .27

      &:before
        width 0
        background-color #00519d
        opacity 1
        transition .2s ease-out
        height 2px

      &:hover:before
        width 100%

      &:last-child:after
      &:last-child:before
        content none

    &__close
      position absolute
      top 20px
      right 20px

      > img
        width 16px
        height 16px


</style>
