<template>
  <div class="c-pay-details">
    <h3 class="o-ttl">Detalhes do Pagamento</h3>
    <div class="c-totalbox">
      <table class="c-table-total">
        <tbody>
          <tr>
            <td>Número de itens</td>
            <td>4 itens</td>
          </tr>
          <tr>
            <td>Total</td>
            <td><strong>R$ 400,00</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href="javascript:;" class="o-btn">Finalizar compra</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.c-pay-details

  .o-ttl
    font-size 20px
    font-weight bold

  .c-totalbox
    box-shadow 0 2px 5px 0 rgba(0, 0, 0, 0.16)
    margin 30px 0
    padding 25px 30px 5px 10px
    background-color #fff

  .c-table-total
    width 100%
    tr
      td
        padding-bottom 20px
        &:nth-child(2)
          text-align right

  .o-btn
    width 100%
    padding 15px
</style>
