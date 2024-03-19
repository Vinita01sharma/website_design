let today = new Date();
let day = today.getDate();


let mon = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let month = today.getMonth();

let year = today.getFullYear();

let weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
let dayy = today.getDay();

function print() {
    // console.log("today is 28,january 2024 - Wednesday");
    // console.log(`today is ${day}, ${month} ${year} - ${weekDay[dayy]}`);
    console.log(`Today is ${day}, ${mon[month]} ${year} - ${weekDay[dayy]}`);


}
print()