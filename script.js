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
else{
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

