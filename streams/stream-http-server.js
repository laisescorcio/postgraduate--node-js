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

const server = http.createServer(async (req, res) => {
  // req (Readable Stream) e res (Writable Streams) are streams

  const buffers = []; // when you need to wait all chunks to be returned to read to transform or write

  for await (const chunk of req) {
    // to wait each slice of the streams to be returned
    buffers.push(chunk); // insert in the buffer array
  }

  const fullStreamContent = Buffer.concat(buffers).toString(); // after all chunks are readed

  console.log(fullStreamContent);

  return res.end(fullStreamContent);

  return req.pipe(new InverseNumberStream()).pipe(res);
});

server.listen(3334);
