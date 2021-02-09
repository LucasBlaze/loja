export const cart = () => ({
  list: {}
});

export const mutations = {
  setCart(state, cart) { state.list = cart }
}

const apiUri = 'https://fakestoreapi.com/carts';

export const actions = {
  async getCart({ commit, state }, userId) {
    await this.$axios.get(`${apiUri}/${userId}`)
      .then(r => {
        if (r.status === 200) {
          commit('setCart', r.data);
        } else {
          console.log(`Erro: ${r.status}`)
        }
      })
      .catch((e) => console.log(e));
  },

}
