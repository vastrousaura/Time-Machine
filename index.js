// Arrays
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
let arr1 = [
    "Building Warmholes...",
    "Calling Aliens..",
    "Missed Call Recieved from Narender Modi...",
    `${nextYear} m toh duniya khatam hai💀`
];
let arr2 = [
    "Building Warmholes...",
    "Calling Aliens..",
    "Missed Call Recieved from Narender Modi...",
    `Gandu ${currentYear} m hi reh jaa 😂`
];
let arr3 = ["Kya hai ye? Kuch samajh nahi aaya!"];
let arr4 = [
    `${currentYear} khtam ho gya??..`,
    "Lemme Check my Calender",
    "nhi!!",
    `Toh ye Gandu ${currentYear} se ${currentYear} m hi jayega 😂`
];
let intervalId = null; // store interval

// Make placeholder disappear on click
document.getElementById("Year-date").addEventListener("focus", function () {
    if (this.innerText.trim() === "Enter Year") {
        this.innerText = "";
    }
});

document.getElementById("submit").addEventListener("click", function () {
    // clear old interval if running
    if (intervalId) {
        clearInterval(intervalId);
    }

    let yearText = document.getElementById("Year-date").innerText.trim();
    let year = parseInt(yearText);
    let display = document.getElementById("display-text");

    let arrToUse;

    if (!isNaN(year) && year > currentYear) {
        arrToUse = arr1;
    } else if(!isNaN(year) && year < currentYear) {
        arrToUse = arr2;
    }
    else if(!isNaN(year) && year == currentYear) {
        arrToUse = arr4;
    }
    else{
        arrToUse = arr3;
    }

    let index = 0;
    display.innerText = arrToUse[index];

    intervalId = setInterval(() => {
        index++;
        if (index >= arrToUse.length) {
            index = 3; // loop
        }
        display.innerText = arrToUse[index];
    }, 1000);
});
