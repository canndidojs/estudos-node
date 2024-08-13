import { fastify } from "fastify";
import { databaseMemory } from "./database-memory.js";

const server = fastify()

const database = new databaseMemory()

server.post('/cars', (request, reply) => {
    const { title, description, mileage } = request.body

    database.create({
        title,
        description,
        mileage
    })

    return reply.status(201).send()
})

server.get('/cars', () => {
    const cars = database.list()

    return cars
})
 
server.put('/cars/:id', (request, reply) => {
    const carId = request.params.id
    const { title, description, mileage } = request.body


    const car = database.update(carId, {
        title,
        description,
        mileage
    })

    return reply.status(204).send()
})

server.delete('/cars/:id', () => {
    return 'gm/chevrolet cars'
})


server.listen({
    port: 3000,
})