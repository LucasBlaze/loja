<template>
  <div class="c-qtdbox">
    <a href="javascript:;" class="c-qtdbox__btn-less"></a>
    <span class="c-qtdbox__qtd"><!-- {{ product.quantity }} --></span>
    <a href="javascript:;" class="c-qtdbox__btn-more"></a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.c-qtdbox
  box-shadow 0 2px 5px 0 rgba(38, 48, 60, 0.2)
  display flex
  height 40px

  &__qtd
    border-left 1px solid #f2f6f9
    border-right 1px solid #f2f6f9
    width 50px
    text-align center
    line-height 2.5

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

</style>
