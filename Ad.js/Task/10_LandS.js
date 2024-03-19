let arr = [1,2,3,4,5,-1]

let lno = arr[0];
let sno = arr[0];

for (let i = 0; i < arr.length; i++) {
       if(arr[i] > lno) {
        lno = arr[i]
       }else{
        sno = arr[i]
       }
}
console.log( "largest number from the array is " + lno);
console.log( "smallest number from the array is " + sno);


