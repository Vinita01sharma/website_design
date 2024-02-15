// - m<33 - fail
// - 50>m>33 - BA
// - 70>m>50 - ave
// - 90>m>70 - good
// - 90<m - brillient 

let marks = 100;

if (marks >= 33) {
    console.log("fail");
}else if(33 <= 50){
    console.log("below average");
}else if(50 <= 70){
    console.log("average");
}else if(70 <= 90){
    console.log("good");
}else if(marks < 90){
    console.log("brillient");
}
