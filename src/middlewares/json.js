export async function json(req, res) {
  // To handle the entry body
  const buffers = []; // when you need to wait all chunks to be returned to read to transform or write

  for await (const chunk of req) {
    // to wait each slice of the streams to be returned
    buffers.push(chunk); // insert in the buffer array
  }

  try {
    // create new prop inside req called body
    req.body = JSON.parse(Buffer.concat(buffers).toString());
    // after all chunks are readed
    // JSON.parse() to transform String to JSON
  } catch {
    req.body = null;
  }

  // To handle the response
  res.setHeader("Content-type", "application/json");
}
