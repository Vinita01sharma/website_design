/*
// "" -- null -- undefined - 0 - false => falsy value
let m = "10";
let m2 = 10;

console.log("----------- m == m2----------->", m == m2);
console.log("----------- m === m2 ----------->", m === m2);
*/

/*
if (10 == 10 || 20 == 10) {
  console.log("---1-->");
}
if (true || true) {
  console.log("---2-->");
}

if (true && false) {
  console.log("---3-->");
}
if (true && true) {
  console.log("---4-->");
}


// aplly conditions and chek what answer is coming in above given conditions

// if(10==10 || 20==10){
//     console.log("-----1---->");
// }

// if(10==10 || 10==10){
//     console.log("-----2---->");
// }

// if(10==10 && 20==10){
//     console.log("-----3------>");
// }


// if(10==10 && 10==10){
//     console.log("-----4---->");
// }



 t || f = t
 f || f = f
 f && t = f
 t && t = t
*/

let x = "urvish"; // "" / null / undefined / 0 /false
if (x && x !== "test") {
  console.log("-----------  x----------->", x);
} else {
  console.log("nothing have x");
}


// let x = "urvish"; // "urvish,""
// if(x || ){
//     console.log("----x-------", x);
// }else{
//     console.log("nothing have x");
// }




// =========================================================

// console.log(10 == "10"); // check only value

// console.log(10 === "10"); // check value and data type both

// console.log(20 != "20"); // check only value
// console.log(20 !== "20"); // check value and data type both

// && all condition should be true
// || just one condition should be true then it will return true

// let x = 0;
// it will reperasent x's value should not be null/undefine/0/false
// if (x || x === 0) {
  // console.log("x is ", x);
// }

// it will reperasent x's value should be null/undefine/0/false
// if (!x) {
//   console.log("x ! is ", x);
// }