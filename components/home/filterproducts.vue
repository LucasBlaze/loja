<template>
  <div>
    <div class="c-filter">
      <h1 class="c-filter__ttl">Produtos</h1>
      <a href="javascript:;" @click="$emit('open-categories')" class="c-filter__select-box">
        {{ category == 'all' ? 'Categorias' : category }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    category() {
      return this.$store.state.products.filter.category
    }
  }
}
</script>

<style lang="stylus">
@import 'kouto-swiss'

.c-filter
  display flex
  align-items center
  justify-content space-between

  &__ttl
    width calc('50% - 12px')
    font-size rem(20px)
    font-weight bold
    line-height 1.2

  &__select-box
    width calc('50% - 12px')
    box-shadow 0 2px 5px 0 rgba(0, 0, 0, 0.16)
    padding 15px 50px 15px 15px
    font-size rem(14px)
    color #3b3f51
    position relative

    &:first-letter
      text-transform uppercase

    &:before
      content ''
      width 1px
      height 100%
      position absolute
      background-color #f2f6f9
      top 0
      right 50px

    &:after
      content ''
      width 20px
      height 10px
      background-size contain
      background-repeat no-repeat
      background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22.371' height='11.849' viewBox='0 0 22.371 11.849'%3E%3Cg id='Grupo_35' data-name='Grupo 35' transform='translate(-506.815 -1576.315)'%3E%3Cpath id='Line_2' data-name='Line 2' d='M.522.522,10.957,10.957' transform='translate(507 1576.5)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3Cpath id='Line_2-2' data-name='Line 2' d='M10.957.522.522,10.957' transform='translate(517.522 1576.5)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A")
      position absolute
      right 15px
      top calc('50% + 1px')
      transform translateY(-50%)

</style>
