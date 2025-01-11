// test.js - Purposely contains linting errors

const name = "John"   // ❌ Missing semicolon and extra spaces

console.log("Hello, " + name)   // ❌ String concatenation instead of template literals, missing semicolon

const sum = (a, b) => {
  return a + b; // ❌ Unused variable warning and unnecessary return statement
}

sum(2, 3);

if(true) console.log("This line has a bad if statement") // ❌ Bad spacing and missing semicolon

let unusedVar = 42  // ❌ Unused variable and missing semicolon

function oldStyleFunction() { // ❌ Function declared but never used
    console.log("This is an old-style function");


}

