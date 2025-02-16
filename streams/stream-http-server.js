import http from "node:http";
import { Transform } from "node:stream";

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    // required method "_transform" on Transform. It has a return and pass it to Writable Stream

    const transformed = Number(chunk.toCtring()) * -1;

    console.log(transformed);

    callback(new Error("Number not valid"), Buffer.from(String(transformed))); // first param is when it is with error. The second param is the transformed data (must be buffer and string)
  }
}

const server = http.createServer((req, res) => {
  // req (Readable Stream) e res (Writable Streams) are streams

  return req.pipe(new InverseNumberStream()).pipe(res);
});

server.listen(3334);
