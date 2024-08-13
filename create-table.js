import {sql} from './db.js'

sql`
CREATE TABLE cars (
    id TEXT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    mileage INTEGER
)`.then(() => {
    console.log('Tabela criada!')
})
 
