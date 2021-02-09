<template>
  <div>
    <a v-if="!text && !link" @click="$router.go(-1)" class="o-btn-back">Voltar</a>
    <NuxtLink v-else :to="link" class="o-btn-back">{{ text }}</NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    'text': String,
    'link': String
    }
}
</script>
<style lang="stylus">

.o-btn-back
  color #3b3f51
  position relative
  padding-left 20px
  font-size 20px

  &:before
    content ''
    width 10px
    height 20px
    background-image url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11.849' height='22.371' viewBox='0 0 11.849 22.371'%3E%3Cdefs%3E%3Cstyle%3E .cls-1%7Bfill:none;stroke:%230550a0;stroke-linecap:square;stroke-miterlimit:10%7D %3C/style%3E%3C/defs%3E%3Cg id='Grupo_1908' transform='rotate(90 1047.49 540.675)'%3E%3Cpath id='Line_2' d='M.522.522l10.435 10.435' class='cls-1' transform='translate(507 1576.5)'/%3E%3Cpath id='Line_2-2' d='M10.957.522L.522 10.957' class='cls-1' transform='translate(517.522 1576.5)'/%3E%3C/g%3E%3C/svg%3E%0A")
    background-repeat no-repeat
    background-size contain
    position absolute
    left 0
    top calc(50% + 2px)
    transform translateY(-50%)

</style>
