const input = document.querySelector(".input-text");
const main = document.querySelector("#name");
const temp = document.querySelector(".temp");
const desc = document.querySelector(".desc");
const clouds = document.querySelector(".clouds");
const button = document.querySelector(".submit");

button.addEventListener("click", function (name) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&units=metric&appid=50a7aa80fa492fa92e874d23ad061374"
  ).then((response) => response.json()).then((data) => {
      const tempValue = data["main"]["temp"];
      const nameValue = data["name"];
      const descValue = data["weather"][0]["description"];
      const cloudsValue = data["clouds"]["all"];

      main.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue + " °C";
      clouds.innerHTML = "Clouds - " + cloudsValue;
      input.value = "";
    })
    .catch((err) => alert("Wrong city name!"));
});