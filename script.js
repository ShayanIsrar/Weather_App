const apiKey = '3f820a7a23fa95ccb6d64e51be276830';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const waetherIcon = document.querySelector('.weather-icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        
        var data = await response.json();
        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

    if(data.weather[0].main == 'Clouds'){
        waetherIcon.src = 'cloudy.png';
    }else if(data.weather[0].main == 'Clear'){
        waetherIcon.src = 'sonny.png';
    }else if(data.weather[0].main == 'Rain'){
        waetherIcon.src = 'crain.png';
    }else if(data.weather[0].main == 'Drizzle'){
        waetherIcon.src = 'drizzle.png';
    }else if(data.weather[0].main == 'Mist'){
        waetherIcon.src = 'mist.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }

    
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
    
})
searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        // Prevent the default action (e.g., form submission) if needed
        event.preventDefault();
        
        // Call the checkWeather function
        checkWeather(searchBox.value);
    }
});