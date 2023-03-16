function updateTime(){
let cityElement = document.querySelector("h4");
let dayElement = document.querySelector(".cityDay");
dayElement.innerHTML = moment().format('ddd, MMM Do');
let timeElement = document.querySelector(".losAngelesTime");
timeElement.innerHTML = moment().tz("America/Los_Angeles").format('h:mm:ss [<small>]a[</small>]').toUpperCase();
}
updateTime();
setInterval(updateTime, 1000);