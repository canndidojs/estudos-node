import { randomUUID } from "node:crypto"

export class databaseMemory {
  #cars = new Map()

  list(search) {
    return Array.from(this.#cars.entries()).map((videoArray) => {
      const id = videoArray[0]
      const data = videoArray[1];

      return {
        id,
        ...data,
      };
    })
    .filter(car => {
        if (search) {
            return car.title.includes(search)
        }

        return true
    })
    // array.from converte estrutura de dados que não é array, para um array
  }

  create(car) {
    const carId = randomUUID() // universal unique id - uuid

    this.#cars.set(carId, car)
  }

  update(id, car) {
    this.#cars.set(id, car)
  }

  delete(id) {
    this.#cars.delete(id)
  }
}
