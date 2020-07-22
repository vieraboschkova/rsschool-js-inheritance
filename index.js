//-------------------------------------------COMMON
function addition (...args) {
    return [...args].reduce(function(acc, val) { return acc + val; }, 0);
};

function substraction (...args) {
    return [...args].reduce(function(acc, val) { return acc - val; }, 0);
};

function multiplication (a, b) {
  return a*b;
};

function division (a, b) {
  return a/b;
};

//-------------------------------------------ES5 BASE "CLASS"

function Base (yourValue) {
  this.yourValue = yourValue;
};

Base.prototype.plus = function (...values) {
  console.log("I come from ES5 Base 'Class'");
  return this;
};

Base.prototype.minus = function (...values) {
  console.log("I come from ES5 Base 'Class'");
};

Base.prototype.multiply = function (n) {
  console.log("I come from ES5 Base 'Class'");
};

Base.prototype.divide = function (n) {
  console.log("I come from ES5 Base 'Class'");
};

Base.prototype.get = function () {
  console.log("I come from ES5 Base 'Class'");
  console.log("LET ME GET THE CURRENT VALUE :" + this.yourValue);
};

// -------------------------------------------------------ES6 IntBuilder

class IntBuilder extends Base {
  constructor (yourValue=0) {
    super(yourValue);
    if (typeof yourValue !== "number") {throw "It is NOT a NUMBER. Do you want to pass another NUMBER?";};
  };

  plus (...numbers){
    super.plus();
    for (let i of numbers) {
      if (typeof i !== "number") {throw "It is NOT a NUMBER. Do you want to pass another NUMBER?";}
    };
    console.log("THESE ARE YOUR ARGUMENTS TO ADD: " + numbers);
    console.log("THIS IS THE VALUE BEFORE: "  + this.yourValue);
    this.yourValue = addition(this.yourValue,...numbers);
    console.log("THIS IS THE VALUE AFTER: "  + this.yourValue);
    return this ;
  };

  minus (...numbers){
    super.minus();
    for (let i of numbers) {
      if (typeof i !== "number") {throw "It is NOT a NUMBER. Do you want to pass another NUMBER?";}
    };
    console.log("THESE ARE YOUR ARGUMENTS TO SUBSTRACT: " + numbers);
    console.log("THIS IS THE VALUE BEFORE: "  + this.yourValue);
    this.yourValue = this.yourValue+substraction(...numbers);
    console.log("THIS IS THE VALUE AFTER: "  + this.yourValue);
    return this;
  };

  multiply (n){
    super.multiply();
    if (typeof n !== "number") {throw "It is NOT a NUMBER. Do you want to pass another NUMBER?";};
    console.log("THIS IS YOUR ARGUMENT TO MULTIPLY: " + n);
    console.log("THIS IS THE VALUE BEFORE: "  + this.yourValue);
    this.yourValue = multiplication (this.yourValue, n);
    console.log("THIS IS THE VALUE AFTER: "  + this.yourValue);
    return this;
  };

  divide (n){
    super.divide();
    if (typeof n !== "number") {throw "It is NOT a NUMBER. Do you want to pass another NUMBER?";};
    console.log("THIS IS YOUR ARGUMENT TO DIVIDE: " + n);
    console.log("THIS IS THE VALUE BEFORE: "  + this.yourValue);
    this.yourValue = Math.floor(division (this.yourValue, n));
    console.log("THIS IS THE VALUE AFTER: "  + this.yourValue);
    return this;
  };

  mod (n) {
    if (typeof n !== "number") {throw "It is NOT a NUMBER. Do you want to pass another NUMBER?";};
    console.log("THIS IS YOUR ARGUMENT TO DIVIDE WITH: " + n);
    console.log("THIS IS THE VALUE BEFORE: "  + this.yourValue);
    this.yourValue = this.yourValue % n;
    console.log("THIS IS THE VALUE AFTER: "  + this.yourValue);
    return this;
  };

  get() {
    super.get();

  };

  static random (a, b) {
    let randomNumber;
    if (a > b) {
      randomNumber = Math.floor(Math.random() * (a - b)) + b;
      console.log(`THIS IS A RANDOM NUMBER BETWEEN: ${b} AND ${a} : ${randomNumber}`);
    }
    else {
      randomNumber = Math.floor(Math.random() * (b - a)) + a;
      console.log(`THIS IS A RANDOM NUMBER BETWEEN: ${a} AND ${b} : ${randomNumber}`);
    };

    return randomNumber;
  };
};

// -------------------------------------------------------ES5 StringBuilder

function StringBuilder(yourValue) {
  Base.call(this, yourValue);
  if (typeof yourValue !== "string") {throw "It is not a String. Do you want to pass it as a string?";}
  this.yourValue=yourValue===undefined? "": yourValue;
};

StringBuilder.prototype = Object.create(Base.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.plus =
  function(...newStr) {
    console.log("THESE ARE YOUR ARGUMENTS TO ADD WITH: " + newStr);
    console.log("THIS IS THE STRING BEFORE: "  + this.yourValue);
    for (let i of newStr) {
      if (typeof i !== "string") {throw "It is not a String. Do you want to pass it as a string?";}
    };
    this.yourValue= this.yourValue.concat(...newStr);
    console.log("THIS IS THE STRING AFTER: "  + this.yourValue);
    return this;
  };

StringBuilder.prototype.minus =
  function(n) {
    console.log("THIS IS THE NUMBER OF CHARS YOU WANT TO DELETE: " + n);
    console.log("THIS IS THE STRING BEFORE: "  + this.yourValue);
    if (typeof n !== "number") {throw "It is not a number. Do you want to pass another number?";};
    this.yourValue= this.yourValue.substring(0, this.yourValue.length - n);
    console.log("THIS IS THE STRING AFTER: "  + this.yourValue);
    return this;
  };

StringBuilder.prototype.multiply =
  function(n) {
    console.log("THIS IS THE NUMBER OF TIMES YOU WANT TO REPEAT: " + n);
    console.log("THIS IS THE STRING BEFORE: "  + this.yourValue);
    if (typeof n !== "number") {throw "It is not a number. Do you want to pass another number?";};
    this.yourValue= this.yourValue.repeat(n);
    console.log("THIS IS THE STRING AFTER: "  + this.yourValue);
    return this;
  };

StringBuilder.prototype.divide =
  function(n) {
    console.log("THIS IS THE NUMBER YOU WANT TO DIVIDE IT BY: " + n);
    console.log("THIS IS THE STRING BEFORE: "  + this.yourValue);
    if (typeof n !== "number") {throw "It is not a number. Do you want to pass another number?";};
    let k = Math.floor(this.yourValue.length / n);
    this.yourValue= this.yourValue.substring(0, k);
    console.log("THIS IS THE STRING AFTER: "  + this.yourValue);
    return this;
  };

StringBuilder.prototype.remove =
  function(str) {
    console.log("THIS IS THE NUMBER YOU WANT TO REMOVE: " + str);
    console.log("THIS IS THE STRING BEFORE: "  + this.yourValue);
    if (typeof str !== "string") {throw "It is not a string. Do you want to pass it as a string?";};
    this.yourValue= this.yourValue.split(str).join("");
    console.log("THIS IS THE STRING AFTER: "  + this.yourValue);
    return this;
  };

  StringBuilder.prototype.sub =
  function(from, n) {
    console.log("THIS IS THE INDEX YOU WANT TO START FROM: " + from);
    console.log("THIS IS THE LENGTH YOU WANT: " + n);
    console.log("THIS IS THE STRING BEFORE: "  + this.yourValue);
    if (typeof from !== "number" || typeof n !== "number") {throw "It is not a number. Do you want to pass another number?";};
    this.yourValue= this.yourValue.substring(from, from+n);
    console.log("THIS IS THE STRING AFTER: "  + this.yourValue);
    return this;
  };


//----------------------------------------------------------TESTS
/*
IntBuilder.random(10, 100);          // 42;

let intBuilder = new IntBuilder(10); // 10;
intBuilder
  .plus(2, 3, 2)                     // 17;
  .minus(1, 2)                       // 14;
  .multiply(2)                       // 28;
  .divide(4)                         // 7;
  .mod(3)                            // 1;
  .get();

let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e';
*/

//---------------------------------------------------ERRORS

//let str2 = new StringBuilder(10)
//let int1 = new IntBuilder("a")