import fs from "node:fs/promises";

const databasePath = new URL("../db.json", import.meta.url); // where de 'db.json' file will be created

export class Database {
  #database = {}; // to receive all types of data // the # symbol is to turn database privated in Node

  // to rescue data when the application initializes
  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((data) => {
        this.#database = JSON.parse(data); // saving in database
      })
      .catch(() => {
        this.#persist(); // if data doesn't exist, create the file empty
      });
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database)); // write a file sending a string JSON (must be) of database
  }

  // to select the specifc table to return
  select(table, search) {
    let data = this.#database[table] ?? []; // ?? [] to don't return undefined

    if (search) {
      data = data.filter((row) => {
        // Object.entries() = convert Object to Arrays = [['name', 'Lais'], ['email', 'lais@gmail.com']]
        // some = to check if at least one of the elements of the array satisfies the condition. Key (name or email) and value (Lais or lais@gmail.com)
        return Object.entries(search).some(([key, value]) => {
          return row[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    }

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

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id); // search the index thar we want to delete

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1); // delete the data
      this.#persist(); // save the data in the physical file
    }
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex((row) => row.id === id); // search the index that we want to update

    if (rowIndex > -1) {
      this.#database[table][rowIndex] = { id, ...data }; // update the data
      this.#persist(); // save the data in the physical file
    }
  }
}
