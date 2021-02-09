<template>
  <div>

    <div class="o-wrapper o-wrapper--404">

      <ArrowBack text="Voltar para Home" link="/" />

      <div class="o-title-container">
        <h1 v-if="error.statusCode === 404" class="o-ttl">OPS...</h1>
        <h1 v-else class="o-ttl"> Algum erro ocorreu!</h1>
        <h2 class="o-sbttl">Esta página não foi encontrada</h2>
      </div>

    </div>

    <img src="~assets/img/icons/404.png" alt="404 - Página não encontrada" class="o-img-icon">

  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'error',
  props: ['error']
}
</script>

<style lang="stylus">
  .o-wrapper.o-wrapper--404
    padding-left 50px
    padding-top 40px

  .o-title-container
    margin-top 50px

  .o-img-icon
    margin-left auto
    margin-top 80px

</style>
