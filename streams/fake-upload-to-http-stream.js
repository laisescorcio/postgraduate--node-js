import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    // required method "_read" on Readable. It return the datas of the Stream. It works delivering datas
    const i = this.index++;

    setTimeout(() => {
      if (i < 5) {
        this.push(null); // push is the Radable Stream method to delivery informations
      } else {
        const buf = Buffer.from(String(i)); // Buffer is a format. It may be a string

        this.push(buf); // push is the Radable Stream method to delivery informations
      }
    }, 1000);
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
  duplex: "half",
})
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    console.log(data);
  });
