import { fastify } from "fastify"
import { DatabasePostgres } from "./database-postgres.js"

const server = fastify()

const database = new DatabasePostgres()

server.post('/cars', async (request, reply) => {
    const { title, description, mileage } = request.body

    await database.create({
        title,
        description,
        mileage
    })

    return reply.status(201).send()
})

 server.get('/cars', async (request) => {
    const search = request.query.search
    
    const cars = await database.list(search)

    return cars
})
 
server.put('/cars/:id', async (request, reply) => {
    const carId = request.params.id
    const { title, description, mileage } = request.body


    await database.update(carId, {
        title,
        description,
        mileage
    })

    return reply.status(204).send()
})

server.delete('/cars/:id', async (request, reply) => {
    const carId = request.params.id
    
    await database.delete(carId)

    return reply.status(204).send
})


server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3000,
})