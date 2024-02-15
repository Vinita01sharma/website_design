// STORE :- Name, age , hobby, Address.
// PRINT :- Name, age, 
//    hobby :- cooking,
//    address :- city, pincode 


let myself = {
    name: "vinita",
    age: 21,
    hobby: {
        hobby: ["traveling", "dancing", "cooking"],
    },
    address: {
        address: "A-604, Shivam Heights, Patiya, Surat",
        city: "surat",
        state: "Gujrat",
        pinCode: 395007,
        num: [1, { test: [40, { name: "urvish" }] }]
    },

}



console.log(myself.name);
console.log(myself.age);
console.log(myself.hobby.hobby[2]);
console.log(myself.address.city);
console.log(myself.address.pinCode);
console.log(myself.address.num[1].test[1].name);