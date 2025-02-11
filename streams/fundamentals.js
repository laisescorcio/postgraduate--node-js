// Streams

//process.stdin -- string inputed on terminal
//  .pipe(process.stdout) -- string outputed on terminal

import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    // required method "_read" on Readable. It return the datas of the Stream. It works delivering datas
    const i = this.index++;

    setTimeout(() => {
      if (i < 100) {
        this.push(null); // push is the Radable Stream method to delivery informations
      } else {
        const buf = Buffer.from(String(i)); // Buffer is a format. It may be a string

        this.push(buf); // push is the Radable Stream method to delivery informations
      }
    }, 1000);
  }
}

new OneToHundredStream().pipe(process.stdout);
