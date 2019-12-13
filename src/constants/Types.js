// Extend Array to provide properties (syntactic sugar)
// without breaking existing code, relying on Array interface
// Types[0] == Types.SOLEMNITY and so on
class TypesArray extends Array {
  constructor(...items) {
    // initialize Array
    super(...items);

    // iterate over all types and create dynamic read-only properties
    for (var i = 0; i < this.length; ++i) {
      Object.defineProperty(this, this[i], {
        value: this[i],
        writable: false
      });
    }
  }
}

const Types = new TypesArray(
  "SOLEMNITY",          // [0]
  "SUNDAY",             // [1]
  "TRIDUUM",            // [2]
  "HOLY_WEEK",          // [3]
  "FEAST",              // [4]
  "MEMORIAL",           // [5]
  "OPT_MEMORIAL",       // [6]
  "COMMEMORATION",      // [7]
  "FERIA"               // [8]
);
export default Types;
