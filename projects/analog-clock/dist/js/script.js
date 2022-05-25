let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function updateTime(){
    let deg = 6;
    const d = new Date();
    let hour = (d.getHours() * 30) + 90;
    let minute = (d.getMinutes() * deg) + 90;
    let second = (d.getSeconds() * deg) + 90;
    
    hours.style.transform = `rotate(${(hour)+(minute/12)}deg)`;
    minutes.style.transform = `rotate(${minute}deg)`;
    seconds.style.transform = `rotate(${second}deg)`;
}

setInterval(updateTime, 1000);