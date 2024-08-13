import { randomUUID } from "node:crypto"
import { sql } from "./db.js"

export class DatabasePostgres {
  async list(search) {
    let cars

    if (search) {
        cars = await sql`select * from cars where title ilike "%${search}%"`
    } else {
        cars = await sql`select * from cars`
    }

    return cars
  }

  async create(car) {
    const carId = randomUUID()
    const { title, description, mileage } = car

    await sql`insert into cars (id, title, description, mileage) VALEUS (${carId}, ${title}, ${description}, ${mileage})`
  }

  update(id, car) {
  }

  delete(id) {
  }
}
