



// clock
setInterval(showTime, 1000);
function showTime() {
    let time = new Date();

    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();



    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime1 = hour + ":"
        + min + ":" + sec;

    document.getElementById("clock")
        .innerHTML = currentTime1;
}
showTime();
// clock end
// date
var currentTime = new Date()
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var weekday = weekdays[currentTime.getDay()];
var month = months[currentTime.getMonth()];
var day = currentTime.getDate()
document.getElementById("date")
    .innerHTML = `${weekday} ${month} ${day}`;
// date end
// greeting start
let time = new Date()
let hour = time.getHours();
if (hour > 6 && hour < 12) { document.getElementById("greeting").innerHTML = "Good morning" }
else if (hour >= 12 && hour < 18) { document.getElementById("greeting").innerHTML = "Good day" }
else if (hour >= 18 && hour < 0) { document.getElementById("greeting").innerHTML = "Good evening" }
else { document.getElementById("greeting").innerHTML = "Good night" }

function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)

// greeting end
// slider start
let rnd = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
function getTimeOfDay(){
    if (hour > 6 && hour < 12) {
        return a = "morning"
    }
    else if (hour >= 12 && hour < 18) {
        return a = "day"
    }
    else if (hour >= 18 && hour < 0) {
        return a = "evening"
    }
    else{
        return a = "night"
    }
}
    getTimeOfDay();
    if (rnd < 10) { rnd = "0" + rnd }
    let url1 = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${a}/${rnd}.jpg')`
  
    console.log(url1)

const slidePrev = document.querySelector('.slide-prev')
const slideNext = document.querySelector('.slide-next')

function setBg() {  
    const img = new Image();
    img.src = "./assets/img/bg.jpg"
    img.onload = () => {      
      document.body.style.backgroundImage = url1
    }; 
  }
  

function getSlideNext(){
    setBg();
    rnd++
    if (rnd < 10) { rnd = "0" + rnd 
    url1 = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${a}/${rnd}.jpg')`
    document.body.style.backgroundImage = url1
    
}
   else{ url1 = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${a}/${rnd+1}.jpg')`
    document.body.style.backgroundImage = url1
    if(rnd >20){rnd = "01"}}
    
}

function getSlidePrev(){
    setBg();
    rnd--
    if (rnd < 10) { rnd = "0" + rnd 
    url1 = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${a}/${rnd}.jpg')`
    document.body.style.backgroundImage = url1
    if (rnd < 01){rnd = "20"}
}
   else{ url1 = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${a}/${rnd-1}.jpg')`
    document.body.style.backgroundImage = url1
}

}

slidePrev.addEventListener('click', getSlidePrev)

slideNext.addEventListener('click',getSlideNext)
document.body.style.backgroundImage = url1
// slider end
// weather
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city')
async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;
}
getWeather()
city.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        async function getWeather() {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;

            const res = await fetch(url);
            const data = await res.json();
            console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
            weatherIcon.className = 'weather-icon owf';
            weatherIcon.classList.add(`owf-${data.weather[0].id}`);
            temperature.textContent = `${data.main.temp}°C`;
            weatherDescription.textContent = data.weather[0].description;
        }
        getWeather()
    }
})
city.addEventListener('mouseleave', (e) => {
    async function getWeather() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;

        const res = await fetch(url);
        const data = await res.json();
        console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${data.main.temp}°C`;
        weatherDescription.textContent = data.weather[0].description;
    }
    getWeather()
})

// weather end
// audio player start

let isPlay = false;

const playBtn = document.querySelector('.play');
const audio = new Audio();

function toggleBtn() {
    playBtn.classList.toggle('pause');
}

playBtn.addEventListener('click', toggleBtn);

function playAudio() {
    if (!isPlay) {
        audio.src = playList[playNum].src;

        audio.currentTime = 0;
        audio.play();
        isPlay = true;
    }
    else {
        audio.pause();
        isPlay = false;
    }
}
playBtn.addEventListener('click', playAudio);

let playNum = 0;

function playNext(){
 playNum++
 playAudio()
 if(playNum>1){
     playNum=0
 }
}

function playPrev(){
 playNum--
 playAudio()
 if(playNum<0){
     playNum=1
 }
}
const playNext1 = document.querySelector('.play-next')
const playPrev1 = document.querySelector('.play-prev')

playNext1.addEventListener('click', playNext)
playPrev1.addEventListener('click', playPrev)

const playList = [
    {      
      title: 'Aqua Caelestis',
      src: './assets/sounds/Aqua Caelestis.mp3',
      duration: '00:58'
    },  
    {      
      title: 'River Flows In You',
      src: './assets/sounds/River Flows In You.mp3',
      duration: '03:50'
    }
  ]


  for(let i = 0; i < playList.length; i++) {
    const li = document.createElement('li');
    li.classList.add("play-item")
    li.textContent = `${playList.title}`
    document.querySelector(".play-list").append(li)
  }

console.log(playList.title)

// audio player end