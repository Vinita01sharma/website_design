// total of only odd numbers.

let no = [1, 2, 3, 4, 5]

let oddtotal = 0;
let eventotal = 0;

for (let i = 0; i < no.length; i++) {

    if (no[i] % 2 === 1) {

        oddtotal = oddtotal + no[i]

    }else{
        eventotal = eventotal + no[i]

    }

}
console.log("total of odd no is " + oddtotal + " and total of even no is " + eventotal)
