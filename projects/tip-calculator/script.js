const button = document.querySelector('[data-compute]')
let output = document.querySelector('[data-output]')
let note = document.querySelector('[data-note]')

function calculation() {
    let value = document.querySelector('#bill').value
    let percentage = document.querySelector('#splitting-tip').value
    let person = document.querySelector('#per-person').value

    let d = (value / 100) * (percentage);
    let f;

    if(!person == 0){
        f = "RS." + (d / person);
        note.innerText = "each person";
    } else {
        f = "RS." + d;
        note.innerText = "";
    }

    output.innerText = `${f}`;
}

button.addEventListener('click', ()=>{
    calculation();
})
 
