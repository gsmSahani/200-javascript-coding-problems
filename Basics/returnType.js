// write a js function that accepts an argument and return type of argument
// there are 6 possible values of return type: object,number,boolean,function,string and undefined

function returnDataTypes(typ) {
  return typeof typ;
}
console.log(returnDataTypes([]));
console.log(returnDataTypes({}));
console.log(returnDataTypes(1023));
console.log(returnDataTypes("gautam"));
console.log(returnDataTypes(false));
console.log(returnDataTypes(() => {}));
console.log(returnDataTypes(undefined));
