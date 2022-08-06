/* Global Variables */
const apiKey = '&appid=4a95bc018029d53fc2fdf913abe5d01f&units=metric'
/*The temperature according to the country*/ 
const getWeather = async (city) =>{
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}${apiKey}`)
  try {
  const data = await res.json();
  hour(data);
  contentWather(data);
  }
  catch(error){
    console.log("error", error)
  }
} 
const hour = (obj)=>{
  //To get the date
  let date = new  Date(obj.dt*1000)
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  //To add the date
  document.querySelector('.date').innerHTML = `Date: ${day}/${month}/${year}`
}
const contentWather = (obj)=>{
  //To get weather data
  const { name } = obj;
  const { icon, description} = obj.weather[0];
  const { temp, humidity } = obj.main;
  const { speed } = obj.wind;
  
  //To add weather data
  document.querySelector('.wInCity').innerText = "Today the weather in " + name + " is:";
  document.querySelector('.temp').innerText = temp + "°C";
  document.querySelector('.icon').src = "https://openweathermap.org/img/wn/"+ icon + ".png";
  document.querySelector('.description').innerText = description;
  document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
  document.querySelector('.wind').innerText = "Wind speed: " + speed + " km/h";
  document.querySelector(".weather").classList.remove("loading");
}
document.querySelector('#generate').addEventListener('click', ()=>{
  getWeather(document.querySelector('.myInput').value);//The .value so that what is written is the country
})
document.querySelector('.myInput').addEventListener("keyup", (event)=>{
  if(event.key == "Enter"){
    getWeather(document.querySelector('.myInput').value); //To know the time pressing enter
  }
})

//The temperature according to the country
const getWeatherWithZip = async (zip) =>{
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}${apiKey}`)
  try {
  const data = await res.json();
  hourZip(data);
  contentWatherZip(data);
  }
  catch(error){
    console.log("error", error)
  }
} 
const hourZip = (obj)=>{
  //To get the date
  let date = new  Date(obj.dt*1000)
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  //To add the date
  document.querySelector('.dateZ').innerHTML = `Date: ${day}/${month}/${year}`
}
const contentWatherZip = (obj)=>{
  //To get weather data
  const { name } = obj;
  const { icon, description} = obj.weather[0];
  const { temp, humidity } = obj.main;
  const { speed } = obj.wind;
  
  //To add weather data
  document.querySelector('.wInCityZ').innerText = "Today the weather in " + name + " is:";
  document.querySelector('.tempZ').innerText = temp + "°C";
  document.querySelector('.iconZ').src = "https://openweathermap.org/img/wn/"+ icon + ".png";
  document.querySelector('.descriptionZ').innerText = description;
  document.querySelector('.humidityZ').innerText = "Humidity: " + humidity + "%";
  document.querySelector('.windZ').innerText = "Wind speed: " + speed + " km/h";
  document.querySelector(".weatherZ").classList.remove("loadingZ");
}
document.querySelector('#generateZ').addEventListener('click', ()=>{
  getWeatherWithZip(document.querySelector('.myInputZ').value);//The .value so that what is written is the country
})
document.querySelector('.myInputZ').addEventListener("keyup", (event)=>{
  if(event.key == "Enter"){
    getWeatherWithZip(document.querySelector('.myInputZ').value); //To know the time pressing enter
  }
})
getWeather('London')
getWeatherWithZip('94040')
