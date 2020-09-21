

window.addEventListener('load', ()=> {
  let long;
  let lati;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone');
  let locationIcon = document.querySelector('.weather-icon');


  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lati = position.coords.latitude;


      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=78afc1878a56725385229bcff0291e3f&units=metric`;

      fetch(api)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        const { temp, weather} = data.main;
        var iconCode = data.weather[0].icon;
        var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";

        //set DOM Elements from API
        temperatureDegree.textContent = temp;
        temperatureDescription.textContent =  data.weather[0].main;
        locationTimezone.textContent = data.name;
        locationIcon.innerHTML = "<img src ='" + iconUrl + "'>";
      })
    });
  }
});
