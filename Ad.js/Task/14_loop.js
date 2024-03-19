// 5 => 01010 => loop
// "4322052" => loop 
// is prime number or not => video
// pelendrom string  or not => video 



// Output: "01010"
let number = 5;
let bno = '';

for (let i = 0; i < number.length; i++) {

    bno = bit + bno;
}
console.log(bno); 


// for (let i = 5; i >= 0; i--) {
//   let bit = number & (1 << i) ? 1 : 0;
//   bno = bit + bno;
// }

// console.log(bno); 