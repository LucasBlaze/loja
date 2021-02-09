export default ({ app }, inject) => {
  // Convert price to Brazilian Real
  const convertPrice = (price) => {
    price = price.toString();
    let idx = price.lastIndexOf('.');
    price = idx > -1 ? `$ ${price.replace('.', ',').substr(0, idx+1)}<span>${price.substr(idx+1)}</span>` : `$ ${price},<span>00</span>` ;
    return price;
  }

  // Debounce helper
  const debounce = (func, wait) => {
    let timer = null;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
    }
  }

  // Filter Products Helper
  const filterProducts = (filter, products) => {
    let filteredList = [...products]

    // By Category
    if (filter.category !== 'all') {
      const filtered = filteredList.filter(product => product.category === filter.category)
      filteredList = filtered
    }

    // By Search
    if (filter.search !== '') {
      const searchList = []
      const searchTerm = filter.search.toLowerCase()
      for (let i = 0; i < filteredList.length; i++) {
        if ( (filteredList[i].title !== null && filteredList[i].title.toLowerCase().includes(searchTerm)) ) {
          searchList.push(filteredList[i])
        }
      }
      filteredList = searchList
    }
    return filteredList
  }

  inject('convertPrice', convertPrice);
  inject('debounce', debounce);
  inject('filterProducts', filterProducts);
}
