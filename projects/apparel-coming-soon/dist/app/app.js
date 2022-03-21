const emailInput = document.querySelector('.emailinput');
const errorIcon = document.querySelector('.error');
const errorMsg = document.querySelector('.errorMsg');
let error = false;
const subscriptionButton = document.querySelector('button');


subscriptionButton.addEventListener('click', ()=>{
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)){
        errorIcon.style.display = 'block';
        errorMsg.style.display = 'block';
    }
    else{
        errorIcon.style.display = 'none';
        errorMsg.style.display = 'none';
    }
})