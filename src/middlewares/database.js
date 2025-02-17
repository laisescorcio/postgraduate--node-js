import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url); // where de 'db.json' file will be created

export class Database {
  #database = {}; // to receive all types of data // the # symbol is to turn database privated in Node

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database)); // write a file sending a string JSON (must be) of database
  }

  // to select the specifc table to return
  select(table) {
    const data = this.#database[table] ?? []; // ?? [] to don't return undefined

    return data;
  }

  // to receive the data tables and the data
  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      // if already exist a array inside the table, insert data in the array
      this.#database[table].push(data);
    } else {
      // else, create new array insert data inside of the new array
      this.#database[table] = [data];
    }

    this.#persist(); // after insert the data will be saved in the physical file

    return data;
  }
}
