import axios from 'axios'
import uuid from 'uuid'

const deletProduct = async (product) => {
  const deletedProduct = await axios.delete('/api/products', product)
  return deletedProduct.data
}

const getProducts = async () => {
  const products = await axios.get('/api/products')
  return products.data
}

const getProduct = async (productId) => {
  const product = await axios.get('/api/products/' + productId)
  return product.data
}

const saveProduct = async (product) => {
  let savedProduct
  if (product.id) {
    savedProduct = await axios.put('/api/products', product)
  } else {
    savedProduct = await axios.post('/api/products', { id: uuid(), ...product })
  }
  return savedProduct.data
}

export default {
  getProducts,
  getProduct,
  deletProduct,
  saveProduct,
}
