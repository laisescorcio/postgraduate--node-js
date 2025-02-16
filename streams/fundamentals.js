// Streams

//process.stdin -- string inputed on terminal
//  .pipe(process.stdout) -- string outputed on terminal

import { Readable, Writable } from "node:stream";

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

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callbak) {
    // required method "_write" on Writable. It doesn't return. It's only to process the data

    console.log(chunk.toString() * 10); // chunk is a buffer. So it must be a string
    callback();
  }
}

new OneToHundredStream().pipe(new MultiplyByTenStream()); // read the data and process multiplying to 10
