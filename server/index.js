const fastify = require('fastify')()
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

let products, PRODUCTS_PATH

try {
  require.resolve('./products.local.json')
  products = require('./products.local.json')
  PRODUCTS_PATH = path.resolve(__dirname, './products.local.json')
} catch (err) {
  products = require('./products.json')
  PRODUCTS_PATH = './products.json'
}

const writeProducts = (products) => fs.writeFile(PRODUCTS_PATH, JSON.stringify(products, null, 2))

// Routes

// Get all products
fastify.get('/products', async (request, reply) => {
  try {
    reply.send(products)
  } catch (err) {
    reply.status(500).send(`Could not load products. ${err.message}`)
  }
})

// Get product by id
fastify.get('/products/:productId', async (request, reply) => {
  try {
    return products.find((p) => p.id === request.params.productId)
  } catch (err) {
    reply.status(500).send(`Could not load products. ${err.message}`)
  }
})

// Create new product
fastify.post('/products', async ({ body }, reply) => {
  try {
    const product = {
      id: uuid(),
      ...body,
    }
    products.push(product)
    writeProducts(products)
    reply.send(product)
  } catch (err) {
    reply.status(500).send(`Could not save product. ${err.message}`)
  }
})

// Update product
fastify.put('/products', async (request, reply) => {
  try {
    const product = request.body
    const productId = product.id
    const index = products.findIndex((p) => p.id === productId)

    if (index === -1) {
      throw new Error(`Cannot find product with id: ${productId}`)
    }

    products.splice(index, 1, product)
    writeProducts(products)
    reply.send({ msg: `Updated product: ${product.title}`, product })
  } catch (err) {
    reply.status(500).send(`Could not update product. ${err.message}`)
  }
})

// Delete product
fastify.delete('/products', async ({ body }, reply) => {
  try {
    const { productId } = body
    const index = products.findIndex((p) => p.id === productId)

    if (index === -1) {
      throw new Error(`Cannot find product with id: ${productId}`)
    }

    const product = { ...products[index] }
    products.splice(index, 1)
    writeProducts(products)
    reply.send({ msg: `Deleted product: ${product.title}`, product })
  } catch (err) {
    reply.status(500).send(`Could not delete product. ${err.message}`)
  }
})

// Run server
const start = async () => {
  try {
    await fastify.listen(3000)
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
