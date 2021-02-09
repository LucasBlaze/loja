export const cart = () => ({
  list: {
    date: '',
    id: '',
    products: [],
    userId: ''
  }
});

export const mutations = {
  setCart(state, cart) {
    state.list = cart
  }
}

const apiUri = 'https://fakestoreapi.com/carts';
//const today = new Date;

export const actions = {
  async getCart({ commit, state }, userId) {
    await this.$axios.get(`${apiUri}/${userId}`)
      .then(r => {
        if(r.status === 200) {
          commit('setCart', r.data)
        } else {
          console.log(`Erro: ${r.status}`)
        }
      })
      .catch((e) => console.log(e))
  },
  /* async addNewProduct({ commit, state }, userId, product) {
    await this.$axios.post(apiUri, {
      body:JSON.stringify(
        {
            userId: userId,
            date: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
            products: product
        }
      )
    })
    .then(r => r.json())
    .then(json => console.log(json))
    .catch((e) => console.log(e));
  },
  async updateProduct({ commit, state }, userId, product) {
    await this.$axios.put(apiUri, {
      body:JSON.stringify(
        {
            userId: userId,
            date: `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`,
            products: product
        }
      )
    })
    .then(r => r.json())
    .then(json => console.log(json))
    .catch((e) => console.log(e));
  }, */


}

export const getters = {
  getNumItensCart: (state) => state.list.products.length
}
