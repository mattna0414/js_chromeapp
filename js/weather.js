const API_KEY = "7e45d486d63a5c3d4e7287cc164bf750";

function onGeoOk(position){
  const lat= position.coords.latitude;
  const lon= position.coords.longitude;
  console.log("you live in" , lat , lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weatherContainer = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child")
    weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    city.innertext =data.name;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
