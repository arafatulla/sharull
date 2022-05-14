class Calculator {
    constructor(previousOperand, currentOperand){
        this.previousOperand = previousOperand
        this.currentOperand = currentOperand
        this.clear()
    }
    clear(){
        this.current = ''
        this.previous = ''
        this.operation = undefined
    }
    delete(){
        this.current = this.current.toString().slice(0, -1)
    }
    appendNumber(number){
        if(number === '.' && this.current.includes('.')) return
        this.current = this.current.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.current === '') return
        if(this.previos !== ''){
            this.compute()
        }
        this.operation = operation
        this.previous = this.current
        this.current = ''
    }
    compute(){
        let computation
        const prev = parseFloat(this.previous)
        const current = parseFloat(this.current)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation){
            case '+': 
            computation = prev + current
            break
            case '-': 
            computation = prev - current
            break
            case '/': 
            computation = prev / current
            break
            case '*': 
            computation = prev * current
            break
            default: 
            return
        }
        this.current = computation
        this.operation = undefined
        this.previous = ''
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits: 0})
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }
    updateDisplay(){
        this.currentOperand.innerText = this.getDisplayNumber(this.current)
        if(this.operation != null){
            this.previousOperand.innerText = `${this.getDisplayNumber(this.previous)} ${this.operation}`
        } else {
            this.previousOperand.innerText = ''
        }
    }
}


const numberbtn = document.querySelectorAll('[data-number]');
const operationbtn = document.querySelectorAll('[data-operation]');
const equalbtn = document.querySelector('[data-equal]');
const deletebtn = document.querySelector('[data-delete]');
const allclearbtn = document.querySelector('[data-all-clear]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

const calculator = new Calculator (previousOperand, currentOperand)

// numberbtn.forEach( (button) => {
//     button.addEventListner('click', () => {
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();
//     });
// });
// operationbtn.forEach( button => {
//     button.addEventListner('click', function() {
//         calculator.chooseOperation(button.innerText);
//         calculator.updateDisplay();
//     });
// });


for (const button of numberbtn) {
    button.addEventListener('click', function() {
      console.log(button.innerText);
      calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
}
for (const button of operationbtn) {
    button.addEventListener('click', function() {
      console.log(button.innerText);
      calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
});
}

equalbtn.addEventListener('click', function() {
    calculator.compute()
    calculator.updateDisplay();
})
deletebtn.addEventListener('click', function() {
    calculator.delete()
    calculator.updateDisplay();
})
allclearbtn.addEventListener('click', function() {
    calculator.clear()
    calculator.updateDisplay();
})