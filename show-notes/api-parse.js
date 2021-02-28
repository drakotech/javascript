/* JSON Parsing Guide for API Development

Notes:

The JSON.parse() method parses a JSON string, constructing the
JavaScript value or object described by the string. An optional
reviver function can be provided to perform a transformation on
the resulting object before it is returned. 

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true

*/