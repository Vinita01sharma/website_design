let data =[
    {
        name: "urvish",
        marksheet: [
            {
               subject: "english",
               marks: 50,
            },
            {
                subject: "maths",
                marks: 95,
             },
             {
                subject: "science",
                marks: 85,
             },
        ]
    }
]


// let marks = 0
// let totalmarks = data[0].marksheet.map((e) => {
//     // console.log("e",e);
//     return marks = marks + e.marks; 
// });
// // console.log("------------total------------",totalmarks);
// console.log("------------total------------",marks);





// let totalMarks = data[0].marksheet.reduce((total, subject) => total + subject.marks, 0);
// console.log(totalMarks);


// let maximum  = 0 ;
// let sub = ""

// let result = data[0].marksheet.map((e , i)=>{
//     if(e.marks > maximum ){
//         sub =  e.subject
//         maximum = e.marks
//     }
// })
// console.log(sub);


// let maximum  = 90;
// let minimum  = 80;

// let sub = ""

// let result = data[0].marksheet.map((e)=>{
//     if(e.marks < maximum && e.marks > minimum){
//         sub =  e.subject
//     }
// })
// console.log(sub);
