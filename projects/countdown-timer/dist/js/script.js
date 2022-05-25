// selecting all the necessary elements
const incrementHour = document.querySelector('[data-h-increment]')
const incrementMinute = document.querySelector('[data-m-increment]')
const incrementSecond = document.querySelector('[data-s-increment]')
const decrementHour = document.querySelector('[data-h-decrement]')
const decrementMinute = document.querySelector('[data-m-decrement]')
const decrementSecond = document.querySelector('[data-s-decrement]')
const btn = document.querySelector('[data-button]')

// holding the value of user input in the timer
let h = 0;
let m = 0;
let s = 0;


// adding user value to the timer
incrementHour.addEventListener('click', ()=> {
    // checking and converting single digits to double digits
    if(h <= 8){
        h++;
        h = "0" + h;
    } else{
        h++;
    }
    if(h > 24){
        h = "0" + 0;
    }
    incrementHour.nextElementSibling.innerText = h;
})
incrementMinute.addEventListener('click', ()=> {
    // checking and converting single digits to double digits
    if(m < 9){
        m++;
        m = "0" + m;
    } else{
        m++;
    }
    if(m >= 60){
        m = "0" + 0;
    }
    incrementMinute.nextElementSibling.innerText = m;
})
incrementSecond.addEventListener('click', ()=> {
    // checking and converting single digits to double digits
    if(s < 9){
        s++;
        s = "0" + s;
    } else{
        s++;
    }
    if(s >= 60){
        s = "0" + 0;
    }
    incrementSecond.nextElementSibling.innerText = s;
})


// decreasing user value to the timer
decrementHour.addEventListener('click', ()=> {
    // checking and converting single digits to double digits
    if(h == "00"){
        h = 24;
    }
    if(h <= 10){
        h--;
        h = "0" + h;
    } else{
        h--;
    }
    decrementHour.previousElementSibling.innerText = h;
})
decrementMinute.addEventListener('click', ()=> {
    // checking and converting single digits to double digits
    if(m == "00"){
        m = 60;
    }
    if(m <= 10){
        m--;
        m = "0" + m;
    } else{
        m--;
    }
    decrementMinute.previousElementSibling.innerText = m;
})
decrementSecond.addEventListener('click', ()=> {
    // checking and converting single digits to double digits
    if(s == "00"){
        s = 60;
    }
    if(s <= 10){
        s--;
        s = "0" + s;
    } else{
        s--;
    }
    decrementSecond.previousElementSibling.innerText = s;
})

btn.addEventListener('click', ()=> {

    // it will disabled the button after one click from preventing it from double click issues
    btn.disabled = true;

    // converting or getting the user input value to bumbers
    let hrs = parseInt(h);
    let min = parseInt(m);
    let sec = parseInt(s);

    // converting value to seconds and adding them
    sec = sec * 1000;
    min = (min * 60) * 1000;
    hrs = ((hrs * 60) * 60) * 1000;

    // sum of all the seconds value
    let totalValue = hrs + min + sec;
    
    // calculation
    let x = 1000;
    let y = x * 60;
    let z = y * 60;
    let i = z * 24;
    
    // stopping the timer after it is finished
    function finishedTimer(){
        alert("time's up");
        clearInterval(timer);
        btn.disabled = false;
    }

    // putting the timer value
    const timer = setInterval( ()=> {
        const textHour = Math.floor((totalValue % i)/ z);
        const textMinute = Math.floor((totalValue % z)/ y);
        const textSecond = Math.floor((totalValue % y)/ x);

        // checking if the timer is completed or not
        if(totalValue == 0){
            totalValue -= 1000;
            finishedTimer();
        } else{
            totalValue -= 1000;
        }

        // checking and converting single digits to double digits
        if(textHour < 11){
            incrementHour.nextElementSibling.innerText = `0${textHour}`;
        } else {
            incrementHour.nextElementSibling.innerText = `${textHour}`;
        }

        if(textMinute < 11){
            incrementMinute.nextElementSibling.innerText = `0${textMinute}`;
        } else {
            incrementMinute.nextElementSibling.innerText = `${textMinute}`;
        }
        if(textSecond < 11){
            incrementSecond.nextElementSibling.innerText = `0${textSecond}`;
        } else {
            incrementSecond.nextElementSibling.innerText = `${textSecond}`;
        }

    },1000)
})


