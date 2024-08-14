import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
  async list(search) {
    let cars

    if (search) {
        cars = await sql`select * from cars where title ilike ${'%' + search + '%'}`
    } else {
        cars = await sql`select * from cars`
    }

    return cars
  }

  async create(car) {
    const carId = randomUUID()
    const { title, description, mileage } = car

    await sql`insert into cars (id, title, description, mileage) VALUES (${carId}, ${title}, ${description}, ${mileage})`
  }

  async update(id, car) {
    const { title, description, mileage } = car

    await sql`update cars set title = ${title}, description = ${description}, mileage = ${mileage} WHERE id = ${id}`

  }

  async delete(id) {
    await sql`delete from cars where id = ${id}`
  }
}
