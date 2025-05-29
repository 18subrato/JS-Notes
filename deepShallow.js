/*************************************************
*   SHALLOW COPY vs DEEP COPY IN JAVASCRIPT
*   Includes Code Examples & Interview Questions
**************************************************/

/* ----------- SHALLOW COPY ----------- */

// Shallow copy using spread operator
const original = {
    name: "John",
    address: {
        city: "New York"
    }
};

const shallowCopy = { ...original };

shallowCopy.name = "Mike";              // ✅ Only affects shallowCopy
shallowCopy.address.city = "Chicago";   // ⚠️ Affects both copies (shared)

console.log(original.name);             // John
console.log(shallowCopy.name);          // Mike
console.log(original.address.city);     // Chicago
console.log(shallowCopy.address.city);  //Chicago


/* ----------- DEEP COPY ----------- */

// Method 1: Using JSON (simple but limited)
const deepOriginal = {
    name: "Alice",
    address: {
        city: "Boston"
    }
};

const deepCopy1 = JSON.parse(JSON.stringify(deepOriginal));
deepCopy1.address.city = "Seattle";

console.log(deepOriginal.address.city); // Boston ✅
console.log(deepCopy1.address.city);    //Seattle


// Method 2: Recursive Deep Copy Function
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    const copy = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        copy[key] = deepClone(obj[key]);
    }

    return copy;
}

const nested = {
    user: "Tom",
    details: {
        email: "tom@example.com",
        scores: [10, 20]
    }
};

const deepCopy2 = deepClone(nested);
deepCopy2.details.scores[0] = 99;

console.log(nested.details.scores[0]); // 10 ✅


// Method 3: Using structuredClone (modern browsers only)
const deepCopy3 = structuredClone(nested);
deepCopy3.details.email = "new@example.com";

console.log(nested.details.email); // tom@example.com ✅


/* ----------- INTERVIEW QUESTIONS ----------- */

/**
 * Q1: What is a shallow copy?
 * A: A copy where only the first level is copied; nested references are shared.

 * Q2: What is a deep copy?
 * A: A recursive copy of all properties including nested objects and arrays.

 * Q3: How do you create a shallow copy?
 * A:
 *    - Using spread operator: {...obj}
 *    - Object.assign({}, obj)
 *    - Array.slice(), Array.from()

 * Q4: How do you create a deep copy?
 * A:
 *    - JSON.parse(JSON.stringify(obj))
 *    - structuredClone(obj)
 *    - Recursive function

 * Q5: Limitations of JSON method?
 * A:
 *    - Cannot copy functions, undefined, Date, RegExp, Map, Set
 *    - Fails with circular references

 * Q6: What does structuredClone support?
 * A: All data types except functions and DOM elements.
 */

/*************************************************
*                 END OF FILE
**************************************************/
