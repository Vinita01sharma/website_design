// add 10 in odd no.
// add 20 in even no.

let arr = [1,2,3,4,5,6,7,8,9,10]

let odd = 0;
let even = 0;

for (let i = 0; i < arr.length; i++) {
    if(arr[i]%2 !== 0)  {
        console.log((arr[i]+10));
        odd+= [arr[i]+10]
    }  else {
        console.log((arr[i]+20));
        even+= [arr[i]+10]
    }
}

// console.log([arr[i]]);if(arr[i]%2 !== 0)