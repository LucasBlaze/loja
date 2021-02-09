<template>
  <header class="c-header">
    <div class="o-wrapper">
      <div class="c-header__col">
        <h1 class="c-header__name">Hi, Dwight</h1>
        <a href="javascript:;" class="c-header__address">1725 Slough Avenue</a>
      </div>
      <div class="c-header__col">
        <NuxtLink to="/carrinho" class="c-header__cart-link" title="Carrinho de Compras">
          <span class="c-header__cart-notify">3</span>
          <img src="~assets/img/icons/cart.svg" alt="Carrinho de compras" class="c-header__cart-img">
        </NuxtLink>
      </div>
      <div class="c-header__col">
        <a href="javascript:;" class="c-header__profile-link" title="Perfil">
          <img src="~assets/img/icons/profile.svg" alt="Perfil" class="c-header__profile-img">
        </a>
      </div>
    </div>
  </header>
</template>


<style lang="stylus">
@import 'kouto-swiss'

.c-header
  padding 20px 0

  .o-wrapper
    display flex
    flex-direction row
    align-items center

  &__col
    &:nth-child(2)
      margin 0 25px 0 auto

  &__name
    font-size rem(20px)
    margin 0
    line-height 1.2
    font-weight bold

  &__address
    font-size rem(12px)
    line-height 1.33
    color #3b3f51
    position relative
    &:after
      content ''
      position absolute
      top calc('50% + 2px')
      transform translateY(-50%)
      right -15px
      width 10px
      height 6px
      background-size contain
      background-repeat no-repeat
      background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10.322' height='5.85' viewBox='0 0 10.322 5.85'%3E%3Cg id='seta' transform='translate(-145.337 -49.871)'%3E%3Cpath id='Line_2' data-name='Line 2' d='M.522.522,4.957,4.957' transform='translate(145.522 50.056)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3Cpath id='Line_2-2' data-name='Line 2' d='M4.957.522.522,4.957' transform='translate(149.994 50.056)' fill='none' stroke='%230550a0' stroke-linecap='square' stroke-miterlimit='10' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A")

  &__cart-link
    display block
    position relative

  &__cart-notify
    position absolute
    width 15px
    height 15px
    border-radius 50%
    background-color #1f41fc
    color #fff
    font-size rem(8px)
    display flex
    justify-content center
    align-items center
    right -10px
    top -3px

  &__cart-img
    width 42px
    height 38px

  &__profile-img
    width 48px
    height 48px


</style>
