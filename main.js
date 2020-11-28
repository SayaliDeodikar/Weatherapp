const api = {
    key: "4c9bcd3df984dc81348430ecc6b56ebf",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
    
    function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
      
    let weatherType = document.querySelector('.current .weather');
    weatherType.innerText = `${weather.weather[0].main}`;
  
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
   
    if(weatherType.textContent=='Clouds'){
        document.body.style.backgroundImage="url('Images/Clouds.jpg')"
    }
    
    else if(weatherType.textContent=='Mist'){
        document.body.style.backgroundImage="url('Images/Mist.jpg')"
    }

    else if(weatherType.textContent=='Clear'){
        document.body.style.backgroundImage="url('Images/Clear.jpg')"

    }

    else if(weatherType.textContent=='Smoke'){
            document.body.style.backgroundImage="url('Images/Smoke.jpg')"
    }

    else if(weatherType.textContent=='Haze'){
        document.body.style.backgroundImage="url('Images/Mist.jpg')"
    }

    else if(weatherType.textContent=='Rain'){
        document.body.style.backgroundImage="url('Images/Rain.jpg')"
    }
 
    else if(weatherType.textContent=='Snow'){
        document.body.style.backgroundImage="url('Images/Winter.jpg')"
    }    
    
    else if(weatherType.textContent=='Thunderstrom'){
        document.body.style.backgroundImage="url('Images/Thunderstrom.jpg')"
    }
} 
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }