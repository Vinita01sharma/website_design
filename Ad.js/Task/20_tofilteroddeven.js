// let no = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

// let even = no.filter((e, i) => {
//     return e % 2 === 0;
// });
// console.log("-----------  evennumber----------->", even);


// let odd = no.filter((e, i) => {
//     return e % 2 === 1;
// });
// console.log("-----------  oddnumber----------->", odd); //task


// more than 6 - trune nai tho false

let arr = ["vinita sharma", "disha bulsar", "urvish patel"];

// let available = arr.some((e) => {
//     return e.length > 6;
//   });
//   console.log("-----------  available----------->", available);


  let available = arr.some((e,i) => {
    return e.includes("sharma");
  });
  console.log("-----------  available----------->", available);






