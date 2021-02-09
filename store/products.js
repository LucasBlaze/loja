export const state = () => ({
  list: {},
  listFiltered: {},
  listHighlight: {},
  listCategories: [],
  filter: {
    search: '',
    category: 'all'
  }
});

export const mutations = {
  setFilterCategory (state, category) { state.filter.category = category },
  setFilterSearch (state, search) { state.filter.search = search },
  setProducts(state, products) { state.list = products },
  setFilteredProducts(state, products) { state.listFiltered = products },
  setHighlightProducts(state, products) { state.listHighlight = products },
  setCategories(state, categories) { state.listCategories = categories }
}

const apiUri = 'https://fakestoreapi.com/products';

export const actions = {
    async getProducts({ commit }) {
      await this.$axios.get(apiUri)
        .then(r => {
          if (r.status === 200) {
            commit('setProducts', r.data);
            commit('setFilteredProducts', r.data);
          } else {
            console.log(`Erro: ${r.status}`)
          }
        })
        .catch((e) => console.log(e));
    },
    async getHighlights({ commit }) {
      await this.$axios.get(`${apiUri}/category/jewelery?limit=5`)
        .then(r => {
          if (r.status === 200) {
            commit('setHighlightProducts', r.data);
          } else {
            console.log(`Erro: ${r.status}`)
          }
        })
        .catch((e) => console.log(e));
    },
    async getCategories({ commit }) {
      await this.$axios.get(`${apiUri}/categories`)
        .then(r => {
          if (r.status === 200) {
            commit('setCategories', r.data);
          } else {
            console.log(`Erro: ${r.status}`)
          }
        })
        .catch((e) => console.log(e));
    },
    async getProductsById({ commit, state }, productsId) {
      let listProducts = [];
      productsId.forEach( async (id) => {
        await this.$axios.get(`${apiUri}/${id}`)
          .then(r => {
            if (r.status === 200) {
              listProducts.push(r.data);
            } else {
              console.log(`Erro: ${r.status}`)
            }
          })
          .catch((e) => console.log(e));
        })
        listProducts = Object.assign({}, listProducts);
        console.log(listProducts);
        commit('setProducts', JSON.stringify(listProducts));
    }
}
