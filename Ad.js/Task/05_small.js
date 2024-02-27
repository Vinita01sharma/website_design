let small = [1, 2, 43, 74, 2, 32, 4, 0, 56, 7]
let s = small[0]


for (let i = 0; i < small.length; i++) {
    if(small[i] < s){
        s = small[i];
    }
}
console.log(s);





