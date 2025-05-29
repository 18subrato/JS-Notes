/*************************************************
*        JavaScript structuredClone() Notes
*     Deep Cloning Built-in Method (ES2021+)
**************************************************/

/**
 * structuredClone(value)
 * 
 * A built-in method that creates a deep copy of any structured value,
 * including complex and nested data types.
 */

// ✅ Basic Example
const original = { name: "Alice", age: 30 };
const copy = structuredClone(original);

copy.name = "Bob";
console.log(original.name);  // Output: Alice ✅ (not modified)


/* ----------- ADVANCED EXAMPLES ----------- */

// ✅ Cloning Nested Objects
const nested = {
    user: "Tom",
    address: {
        city: "NY",
        zip: 12345
    }
};
const deepCopy = structuredClone(nested);
deepCopy.address.city = "LA";
console.log(nested.address.city); // Output: NY ✅


// ✅ Cloning Arrays, Maps, and Sets
const map = new Map([["a", 1]]);
const set = new Set([1, 2, 3]);

const clonedMap = structuredClone(map);
const clonedSet = structuredClone(set);

console.log(clonedMap.get("a")); // 1 ✅
console.log(clonedSet.has(2));   // true ✅


// ✅ Cloning Circular References
const a = {};
a.self = a;

const circularCopy = structuredClone(a);
console.log(circularCopy.self === circularCopy); // true ✅


/* ----------- LIMITATIONS ----------- */

// ❌ Fails on functions, symbols, DOM nodes, WeakMap/WeakSet

const objWithFunc = {
    greet: () => console.log("Hello")
};

// structuredClone(objWithFunc); 
// ❌ Uncaught DataCloneError: function could not be cloned


/* ----------- SUPPORTED TYPES ----------- */

// ✅ Works with:
// - Objects
// - Arrays
// - Date, RegExp
// - Map, Set
// - ArrayBuffer, TypedArray
// - Blob, File, ImageData
// - BigInt
// - Circular references

// ❌ Does NOT work with:
// - Functions
// - DOM elements
// - Symbol
// - WeakMap, WeakSet


/* ----------- BROWSER & ENVIRONMENT SUPPORT ----------- */

// Modern Support:
// ✅ Chrome 98+, Firefox 94+, Safari 15.4+, Node.js 17+

if (typeof structuredClone !== "function") {
    console.warn("structuredClone() is not supported in this environment.");
}


/* ----------- INTERVIEW NOTES ----------- */

/**
 * Q: What does structuredClone() do?
 * A: It performs a deep copy of a structured object, including nested data.

 * Q: Difference between structuredClone() vs JSON.stringify?
 * A:
 *  - structuredClone handles types like Map, Set, Date, BigInt, etc.
 *  - It supports circular references
 *  - JSON loses types and fails on circular references

 * Q: When should I use structuredClone?
 * A: When you need a safe, deep copy of an object — especially with nested data.

 * Q: What are the alternatives?
 * A: 
 *   - JSON.parse(JSON.stringify(obj)) [limited]
 *   - lodash.cloneDeep(obj) [3rd party]
 *   - Custom recursive function [advanced]
 */


/*************************************************
*              END OF structuredClone NOTES
**************************************************/
