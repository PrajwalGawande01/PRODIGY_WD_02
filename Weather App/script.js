const weatherData = {
  Mumbai: { desc: "Rainy", temp: 28, wind: 4, icon: "09d", bg: "linear-gradient(to top, #a1c4fd, #c2e9fb)" },
  Delhi: { desc: "Sunny", temp: 35, wind: 5, icon: "01d", bg: "linear-gradient(to top, #ffe259, #ffa751)" },
  Pune: { desc: "Cloudy", temp: 26, wind: 3, icon: "03d", bg: "linear-gradient(to top, #d7d2cc, #304352)" },
  Bengaluru: { desc: "Thunderstorm", temp: 24, wind: 6, icon: "11d", bg: "linear-gradient(to top, #4b6cb7, #182848)" },
  Chennai: { desc: "Windy", temp: 31, wind: 7, icon: "50d", bg: "linear-gradient(to top, #de6262, #ffb88c)" },
  Kolkata: { desc: "Foggy", temp: 23, wind: 2, icon: "50d", bg: "linear-gradient(to top, #757f9a, #d7dde8)" },
  Hyderabad: { desc: "Clear", temp: 30, wind: 3, icon: "01d", bg: "linear-gradient(to top, #56ccf2, #2f80ed)" }
};

const citySelect = document.getElementById("citySelect");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const description = document.getElementById("description");
const temperature = document.getElementById("temperature");
const wind = document.getElementById("wind");
const forecastDiv = document.getElementById("forecast");
const clock = document.getElementById("clock");

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function updateWeather(city) {
  const data = weatherData[city];
  cityName.textContent = city;
  description.textContent = data.desc;
  temperature.textContent = `Temperature: ${data.temp}°C`;
  wind.textContent = `Wind: ${data.wind} m/s`;
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;
  document.body.style.background = data.bg;

  forecastDiv.innerHTML = '';
  for (let i = 1; i <= 7; i++) {
    const fluctuation = Math.floor(Math.random() * 6) - 3;
    const temp = data.temp + fluctuation;
    const forecastItem = document.createElement('div');
    forecastItem.className = 'forecast-day';
    forecastItem.innerHTML = `
      <strong>Day ${i}</strong><br/>
      <img src="https://openweathermap.org/img/wn/${data.icon}@2x.png"/><br/>
      ${temp}°C
    `;
    forecastDiv.appendChild(forecastItem);
  }
}

function updateClock() {
  const now = new Date();
  clock.textContent = `Time: ${now.toLocaleTimeString()}`;
}

citySelect.addEventListener("change", () => {
  updateWeather(citySelect.value);
});

setInterval(updateClock, 1000);
updateClock();
updateWeather(citySelect.value);
