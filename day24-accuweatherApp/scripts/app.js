const cityForm = document.querySelector("form");
const cardElement = document.querySelector(".card");
const detailsElement = document.querySelector(".details");
const timeImageElement = document.querySelector("img.time");
const iconElement = document.querySelector(".icon");
const forecast = new Forecast();

console.log(forecast);

const updateUI = (data) => {

	// destructure properties
	const { cityDetails, weather } = data;

	// update details template
	detailsElement.innerHTML = `
		<h5 class="my-3">${cityDetails.EnglishName}</h5>
		<div class="my-3">${weather.WeatherText}</div>
		<div class="display-4 my-4">
			<span>${weather.Temperature.Metric.Value}</span>
			<span>&deg;C</span>
		</div>
	`;

	// update night/day image and set icon image based on weather
	const iconSource = `img/icons/${weather.WeatherIcon}.svg`;
	iconElement.setAttribute('src',iconSource);
	
	let timeImageSource = null;
	if (weather.IsDayTime) {
		timeImageSource = 'img/day.svg';
	} else {
		timeImageSource = 'img/night.svg';
	}
	timeImageElement.setAttribute('src',timeImageSource);

	// remove d-none class from card if the class is present
	if (cardElement.classList.contains('d-none')) {
		cardElement.classList.remove('d-none');
	}
};

cityForm.addEventListener("submit", e => {
	// prevent default action
	e.preventDefault();

	// get city user input from form
	const city = cityForm.city.value.trim();
	cityForm.reset();

	// update the UI with new city
	forecast.updateCity(city)
		.then(data => updateUI(data))
		.catch(err => console.log(err));
});