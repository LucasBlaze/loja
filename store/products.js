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
  setFilterCategory (state, category) {
    state.filter.category = category
  },

  setFilterSearch (state, search) {
    state.filter.search = search
  },

  setProducts(state, products) { state.list = products },

  setFilteredProducts(state, products) {
    state.listFiltered = products
  },

  setHighlightProducts(state, products) {
    state.listHighlight = products
  },

  setCategories(state, categories) {
    state.listCategories = categories
  }
}

const apiUri = 'https://fakestoreapi.com/products';

export const actions = {
    async getProducts({ commit }) {
      await this.$axios.get(apiUri)
        .then(r => r.status === 200 ? (commit('setProducts', r.data), commit('setFilteredProducts', r.data)) : console.log(`Erro: ${r.status}`))
        .catch((e) => console.log(e))
    },

    async getHighlights({ commit }) {
      await this.$axios.get(`${apiUri}/category/jewelery?limit=5`)
        .then(r => r.status === 200 ? commit('setHighlightProducts', r.data) : console.log(`Erro: ${r.status}`))
        .catch((e) => console.log(e));
    },

    async getCategories({ commit }) {
      await this.$axios.get(`${apiUri}/categories`)
        .then(r => r.status === 200 ? commit('setCategories', r.data) : console.log(`Erro: ${r.status}`))
        .catch((e) => console.log(e))
    },

    async setProductsById({ commit }, productsId) {
      let tempListProducts = [];
      let arrConsultApi = [];

      productsId.forEach((id, index) => {
        arrConsultApi[index] = this.$axios.get(`${apiUri}/${id}`);
      });

      Promise.all(arrConsultApi)
        .then(function(results) {
          tempListProducts = results.map(result => result.data);
          commit('setProducts', tempListProducts);
        })
    }
}

export const getters = {
  getImgById: (state) => (productId) => console.log(productId),
  getTitleById: (state) => (productId) => console.log(productId),
  getPriceById: (state) => (productId) => console.log(productId)
}

