function updateHeader(){
    let headerTimeElement = document.querySelector("#displayTime");
    let headerDayElement = document.querySelector(".displayDay");
    let currentTimeZoneElement = moment.tz.guess();
    headerTimeElement.innerHTML = moment()
      .tz(currentTimeZoneElement)
      .format("H:mm:ss").toUpperCase();
      headerDayElement.innerHTML = moment()
        .tz(currentTimeZoneElement)
        .format("ddd, MMMM Do YYYY");   
}
updateHeader();
setInterval(updateHeader, 1000);




function displayCity(){
  let DianiElement = document.querySelector("#Diani");
  let displayCity1DayElement = moment()
    .tz("Africa/Nairobi")
    .format("ddd, MMM Do");
  let displayCity2DayElement = moment()
    .tz("America/New_York")
    .format("ddd, MMM Do");

  let displayCity1TimeElement = moment()
    .tz("Africa/Nairobi")
    .format("h:mm:ss [<small>]a[</small>]")
    .toUpperCase();
  let displayCity2TimeElement = moment()
    .tz("America/New_York")
    .format("h:mm:ss [<small>]a[</small>]")
    .toUpperCase();
  DianiElement.innerHTML = ` <div id="cityContainer">
            <h4 id="city">Diani
                <div id="day">${displayCity1DayElement}</div>
            </h4>
<div id="time">${displayCity1TimeElement}</div>
`;
  let MiamiElement = document.querySelector("#Miami");

  
    MiamiElement.innerHTML = ` <div id="cityContainer">
            <h4 id="city">Miami
                <div id="day">${displayCity2DayElement}</div>
            </h4>
<div id="time">${displayCity2TimeElement}</div>
`;
}


displayCity();
setInterval(displayCity, 1000);

function updateCity(event) {
        event.preventDefault();
        let cityTZElement = event.target.value;
        let dayElement = moment().tz(cityTZElement).format("ddd, MMM Do");
        let timeElement = moment()
          .tz(cityTZElement)
          .format("h:mm:ss [<small>]a[</small>]")
          .toUpperCase();
        let cityElement = cityTZElement.split("/")[1].replace("_", " ");
        console.log(cityTZElement);
        console.log(cityElement);
        console.log(dayElement);
        console.log(timeElement);

        let citiesElement = document.querySelector(".cities");

        citiesElement.innerHTML += `
      <div id="cityContainer">
            <h4 id="city">${cityElement}
                <div id="day">${dayElement}</div>
            </h4>
<div id="time">${timeElement}</div>
`;
  }



  document.querySelector("select").addEventListener("change", updateCity);


