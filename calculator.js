class Calculator {
 constructor(previousOperandTextElement, currentOperandTextElement) {
  this.previousOperandTextElement = previousOperandTextElement
  this.currentOperandTextElement = currentOperandTextElement
  this.clear()
 }


 clear() {
  this.previousOperand = ''
  this.currentOperand = ''
  this.operation = undefined
 }

 delete() {

 }

 appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
 }

 chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.currentOperand !== '') {
   this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
 }

 compute() {
  let calculation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)

  if (isNaN(prev) || isNaN(current)) return

  if (this.operation === '+') {
   calculation = prev + current
  } else if (this.operation === '-') {
   calculation = prev - current
  } else if (this.operation === '/') {
   calculation = prev / current
  } else if (this.operation === '*') {
   calculation = prev * current
  } else {
   return
  }


  this.currentOperand = calculation
  this.operation = ''
  this.previousOperand = ''

 }

 updateDisplay() {
  this.currentOperandTextElement.innerText = this.currentOperand
  if (this.operation != null) { this.previousOperandTextElement.innerText = `${this.previousOperand} ${this.operation}` }
 }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelector('[data-all-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')



const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
 button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText)
  calculator.updateDisplay()
 })
})

operationButtons.forEach(button => {
 button.addEventListener('click', () => {
  calculator.chooseOperation(button.innerText)
  calculator.updateDisplay()
 })
})

equalsButton.addEventListener('click', () => {
 calculator.compute()
 calculator.updateDisplay()
})

allClearButton.addEventListener('click', () => {
 calculator.clear()
 calculator.updateDisplay()
})
// just checking out something on the git system
console.log('me')