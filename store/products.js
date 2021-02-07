export const state = () => ({
  listProducts: {},
  listFilteredProducts: {},
  filter: {
    search: '',
    category: 'all'
  }
});


export const mutations = {

  setFilterCategory (state, category) { state.filter.category = category },
  setFilterSearch (state, search) { state.filter.search = search },
  setProducts(state, products) { state.listProducts = products },
  setFilteredProducts(state, products) { state.listFilteredProducts = products },

}
