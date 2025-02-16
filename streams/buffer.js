const buf = Buffer.from("ok");

console.log(buf); // returned: <Buffer 6f 6b>, 6f(O), 6b(K) = 'ok'
console.log(buf.toJSON()); // returned: { type: 'Buffer', data: [ 111, 107 ] }
