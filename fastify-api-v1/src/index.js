// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
const mongoose = require('mongoose')
const routes = require('./routes')
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage')
.then(() => console.log('MongoDB connected…'))
.catch(err => console.log(err))

// Declare a default route
fastify.get('/', async (request, reply) => {
    return {hello: 'world'}
})

// Declare routes
routes.forEach( (route, index) => {
    fastify.route(route)
})

// Run the server!
const start = async() => {
    try {
        await fastify.listen(3002)
        fastify.swagger()
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    } catch {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()