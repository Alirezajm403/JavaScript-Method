// Hello 👋 I'm Alireza 😎, in this project I want to show you some different methods of String, Number, Object, List to work together.



// Method 1 => String

//Example_1 : 
let password = "12345";

if (password.length < 8) {
  console.log("رمز عبور کوتاه است");   //استفاده از متد Length 
}

//Example_2 :
let email_2 = "Alireza@gmail.com";

if (email_2.includes("@")) {
  console.log("ایمیل معتبر است");  //استفاده از متد ()includes 
}
else {
  console.log("ایمیل نامتعبر است");
}

//Example_3 :
let username = "AliReZa";

let fixedUsername = username.toLowerCase();  //استفاده از متد ()toLowerCase
console.log(fixedUsername);

//Example_4 :
let nameInput = "   Ali   ";

let cleanName = nameInput.trim();  //استفاده از متد ()trim 
console.log(cleanName);

//Example_5 :
let tags = "js,html,css";

let tagList = tags.split(",");   //استفاده از متد ()split 
console.log(tagList);

//Example_6 :
let comment = "این سایت مزخرف است";

let safeComment = comment.replace("مزخرف", "***");  //استفاده از متد ()replace 
console.log(safeComment);

//Example_7 :
const text = "JavaScript is very powerful language";

let preview = text.slice(0, 10);  // استفاده از متد ()slice 



// Method 2 => Number

//Example_1 :
function safeNumber(input) {
  const num = Number(input);    // Number + isNaN استفاده از متد
  return isNaN(num) ? null : num;
}
console.log(safeNumber("123"));

//Example_2 :
function extractPrice(text) {                   // parseInt استفاده از متد 
  return parseInt(text.replace(/[^0-9]/g, ""));
}

console.log(extractPrice("قیمت: 45,000 تومان"));

//Example_3 :
function pageCount(items, perPage) {
  return Math.floor(items / perPage);   // Math.floor استفاده از متد 
}
console.log(pageCount());

//Example_4 :
function roundPrice(price) {
  return Number(price.toFixed());    // toFixed + Number استفاده از متد 
}
console.log(roundPrice(24.75));

//Example_5 :
function finalScore(score) {    // Math.min + Math.round استفاده از متد 
  return Math.min(20, Math.round(score * 1.1));
}
console.log(finalScore(10));

//Example_6 :
function generateOTP() {    // Math.floor + Math.random استفاده از متد 
  return Math.floor(100000 + Math.random() * 900000);
}
console.log(generateOTP());



//Method 3 => Object

//Example_1 :
const users_1 = {               // Object.values + filter استفاده از متد 
  u1: { name: "Ali", age: 17 },
  u2: { name: "Reza", age: 22 },
  u3: { name: "Sara", age: 19 }
};
console.log(Object.values(users_1).filter(u => u.age >= 18));

//Example_2 :
const users_2 = {               // entries + map استفاده از متد 
  u1: { name: "Ali", age: 17 },
  u2: { name: "Reza", age: 22 },
  u3: { name: "Sara", age: 19 }
};
console.log(Object.entries(users_2).map(([id, user]) => ({
  id,
  ...user
})));

//Example_3 :
const users_3 = {               // hasOwnProperty استفاده از متد 
  u1: { name: "Ali", age: 17 },
  u2: { name: "Reza", age: 22 },
  u3: { name: "Sara", age: 19 }
};
function hasAge(user_3) {
  return user_3.hasOwnProperty("age");
}
console.log(hasAge(users_3));

//Example_4 :
const users_4 = {              // delete استفاده از متد 
  u1: { name: "Ali", age: 17 },
  u2: { name: "Reza", age: 22 },
  u3: { name: "Sara", age: 19 }
};
function sanitizeUser(users_4) {
  const copy = { ...users_4 };
  delete copy.password;
  return copy;
}
console.log(sanitizeUser(users_4));

//Example_5 :
const users_5 = {             // assign اسفتاده از متد 
  u1: { name: "Ali", age: 17 },
  u2: { name: "Reza", age: 22 },
  u3: { name: "Sara", age: 19 }
};
let defaultSettings = { theme: "light", lang: "fa" };
let userSettings = { theme: "dark" };

console.log(Object.assign({}, defaultSettings, userSettings))



//Method 4 => List (Array)

//Example_1 :
const orders_1 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//      filter + map استفاده از متد
console.log(orders_1
  .filter(o => o.paid)
  .map(o => o.price));

//Example_2 :
const orders_2 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//      reduce استفاده از متد
let out = orders_2.reduce((sum, o) => {
  return o.paid ? sum + o.price : sum;
}, 0);
console.log(out);

//Example_3 :
const orders_3 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//         find استفاده از متد 

console.log(orders_3.find(o => o.id === 2));

//Example_4 :
const orders_4 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//       some استفاده از متد 
console.log(orders_4.some(o => !o.paid));


//Example_5 :
const orders_5 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//       every استفاده از متد 
console.log(orders_5.every(o => o.paid));

//Example_6 :
const orders_6 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//      sort استفاده از متد 
console.log(orders_6.sort((a, b) => b.price - a.price));

//Example_7 :
const orders_7 = [
  { id: 1, price: 120, paid: true },
  { id: 2, price: 80, paid: false },
  { id: 3, price: 200, paid: true }
];
//      splice استفاده از متد 
const index = orders_7.findIndex(o => o.id === 2);
console.log(orders_7.splice(index, 1));
