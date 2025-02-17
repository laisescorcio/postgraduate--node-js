export class Database {
  #database = {}; // to receive all types of data
  // the # symbol is to turn database privated in Node

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

    return data;
  }
}
