const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeather');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const conditionEl = document.getElementById('condition');
const errorEl = document.getElementById('error');


const API_KEY = 'YOUR_API_KEY';

async function fetchWeather() {
    const city = cityInput.value.trim();
    if (!city) {
        errorEl.textContent = 'Please enter a city name.';
        return;
    }

 
    temperatureEl.textContent = '';
    humidityEl.textContent = '';
    conditionEl.textContent = '';
    errorEl.textContent = '';
    getWeatherBtn.disabled = true;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        temperatureEl.textContent = `Temperature: ${data.main.temp} °C`;
        humidityEl.textContent = `Humidity: ${data.main.humidity} %`;
        conditionEl.textContent = `Condition: ${data.weather[0].description}`;
    } catch (error) {
        errorEl.textContent = 'Error fetching weather: ' + error.message;
        console.error(error);
    } finally {
        getWeatherBtn.disabled = false;
    }
}

getWeatherBtn.addEventListener('click', fetchWeather);
