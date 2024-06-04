const apiKey = '315a06d7317352ab9cc6a1baf6ce2ac2';



const getWeather=()=>{

  var cityName;
  cityName = inputData.value


  if(cityName){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {

      if(typeof(data.main)==="undefined"){
        alert('Enter a Valid Input')
      }
      else{

      console.log(typeof(data.main));
  
      var temperature = data.main.temp-273 // to convert to °C
      var t= parseFloat(temperature).toFixed(2); // to set value upto two decimal points
      temp.innerHTML =`Temperature: ${t} °C`
  
      var humidity = data.main.humidity
      humid.innerHTML = `Humidity:${humidity}%`
  
      var countryName = data.sys.country
      country.innerHTML = `Country:${countryName}`
  
      var windSpeed = data.wind.speed
      wind.innerHTML = `Wind:${windSpeed} km/h`
  
      var pressureData = data.main.pressure
      pressure.innerHTML = `Pressure: ${pressureData}mb`
  
      var date = new Date();
      dateandtime.innerHTML = date
  
      var iconData = data.weather[0].icon
      console.log(iconData);
      var link = `https://openweathermap.org/img/wn/${iconData}@2x.png`
      icon.setAttribute("src", link);
      }
  
    })
    .catch(error => console.error('Error:', error));
  }
  else{
    alert('Enter a Valid Input')
  }
  
 


} 





// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
