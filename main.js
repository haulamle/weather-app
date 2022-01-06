var search = document.querySelector(".search");
var city = document.querySelector(".city");
var country = document.querySelector(".country");
var value = document.querySelector(".value");
var wind = document.querySelector(".wind span");
var visibility = document.querySelector(".visibility span");
var humidity = document.querySelector(".humidity span");
var value = document.querySelector(".value");
var time = document.querySelector(".time");
var shortDesc = document.querySelector(".short-desc");
var content = document.querySelector(".content");

async function changerWeather(){
    let capSearchWeather = search.value.trim();
    let apiWeather = `https://api.openweathermap.org/data/2.5/weather?q=${capSearchWeather}&appid=394ee5a141553a87826a04c6c30ba3f4`

    let data = await fetch(apiWeather).then(response => response.json());

    if(data.cod == 200){
        content.classList.remove("hide");
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + "m";
        wind.innerText = data.wind.speed + "m/s";
        humidity.innerText = data.main.humidity + "%";
        value.innerText = Math.round((data.main.temp - 273.15));
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ""
        time.innerText = new Date().toLocaleString('VietNam');
    }else {
        content.classList.add("hide");
    }
    
}



search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        changerWeather()
    }
});