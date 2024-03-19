// let name = "urvish"; //=> name[0] => "u_r_v_i_s_h"
// let newStr = ""; // u_v_s_
// // u_v_sh
// // r_vi
// // ravis =>r_v_s
// for (let i = 0; i < name.length; i++) {
//   console.log("-----------   name[i]----------->", name[i]);
// }


// let name = "urvish" //name => "u_r_v_i_s_h"

// let newstring = ""
// for (let i = 0; i < name.length; i++) {

// }
// console.log(name[0] + "_" + name[1] + "_" + name[2] + "_" + name[3] +"_"+ name[4] + "_" + name[5]  );
// console.log(name[0] + "_" + name[2] + "_" + name[4] + "_");
// console.log(name[0] + "_" + name[2] + "_" + name[4] + name[5]);


// let name1 = "ravi"

// for (let i = 0; i < name1.length; i++) {

// }
// console.log(name1[0] + "_" + name1[2] + name1[3]);


// let name2 = "ravis"

// for (let i = 0; i < name2.length; i++) {

// }
// console.log(name2[0] + "_" + name2[2] + "_" + name[4]);


// let name = "urvish" //name => "u_r_v_i_s_h"  ////  => odd one should be underscroll

// let newstring = ""
// for (let i = 0; i < name.length; i++) {
//     if (i !== name.length - 1) {
//         newstring += name[i] + "_"
//     } else {
//         newstring += name[i]
//     }


// }

// console.log(newstring);


let name = "urvish"

let newstring = ""

for (let i = 0; i < name.length; i++) {
    if (i % 2 === 0) {
        newstring += name[i]
    } else {
        newstring += "_"
    }
}
console.log(newstring);

