


function updateCity(event){
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

let selectElement = document.querySelector("select");
selectElement.addEventListener('change', updateCity);




