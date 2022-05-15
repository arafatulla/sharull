let seconds = document.querySelector('.dial.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let dial = document.querySelector('.dial');

function updateTime(){
    const d = new Date();
    let second = d.getSeconds() + 1;
    let minute = d.getMinutes() + 1;
    let hour = d.getHours() + 1;

    let s = ((second / 60) * 360) + 90;
    let m = ((minute / 60) * 360) + 90;
    let h = ((hour / 12) * 360) + 60;

    if(h > 12){
        hour = hour - 12;
    }
    if(second == 60 || second <= 1){
        seconds.style.transition = 'none';
    } else {
        seconds.style.transition = 'all 0.5s ease-in';
    }
    
    seconds.style.transform = 'rotate('+ s + 'deg)';
    minutes.style.transform = 'rotate('+ m + 'deg)';
    hours.style.transform = 'rotate('+ h + 'deg)';
}


setInterval(updateTime, 1000);

updateTime();