// Require the framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Connect to DB
mongoose.connect('mongodb://localhost/mycargarage')
.then(() => console.log('MongoDB connected…'))
.catch(err => console.log(err))

// Declare a route
fastify.get('/', async (request, reply) => {
    return {hello: 'world'}
})

// Run the server!
const start = async() => {
    try {
        await fastify.listen(3002)
        fastify.log.info(`Server listening on ${fastify.server.address().port}`)
    } catch {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()