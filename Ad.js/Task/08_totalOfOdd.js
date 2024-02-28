// total of only odd numbers.

let odd = [1, 2, 3, 4, 5]

let total = 0;

for (let i = 0; i < odd.length; i++) {

    if (odd[i] % 2 === 1) {

        total = total + odd[i]

    }

}
console.log("total of odd no is " + total);
