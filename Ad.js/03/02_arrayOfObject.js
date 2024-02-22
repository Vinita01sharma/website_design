let userDetails = [
    {
      name: "uv",
      age: 23,
      panCard: "FMGPP3019F",
    },
    {
      name: "vinita",
      age: 21,
    },
    {
      name: "zubair",
      age: 18,
    },
  ];
  
  for (let i = 0; i < userDetails.length; i++) {
    console.log("---i----", i);
    console.log(`my name is ${userDetails[i].name}`);
  }
  
// ------------------------------------------------------------------------------

let data = [
    {
        "city": "Delhi",
        "state_name": "Delhi",
        "population": 32226001
    },
    {
        "city": "Mumbai",
        "state_name": "Mahārāshtra",
        "population": 24973000
    },
    {
        city: "Kolkāta",
        "state_name": "West Bengal",
        "population": 18502000
    },
    {
        "city": "Bangalore",
        "state_name": "Karnātaka",
        "population": 15386000
    },
    {
        "city": "Chennai",
        "state_name": "Tamil Nādu",
        "population": 12395000
    },
]



// find total numbers of population of array 
let totalPopulation = 0

// totalPopulation = totalPopulation+data[i].population

for (let i = 0; i < data.length; i++) {
    totalPopulation = totalPopulation+data[i].population

    // console.log(data[0].population+data[1].population+data[2].populationdata[3].populationdata[4].population); 
}
console.log(totalPopulation);   



// to print all population numbers only
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i].population);    
// }



// print:- CHENNAI is located in TAMIL NADU

// for (let i = 0; i < data.length; i++) {
//     console.log(`${data[i].city} is located in ${data[i].state_name}`);
// }
