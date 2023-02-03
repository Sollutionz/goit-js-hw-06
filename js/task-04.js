let counterValue = 0

function dec() {
    counterValue -= 1;
    value.textContent = counterValue
}

function inc() {
    counterValue += 1;
    value.textContent = counterValue
}

const value = document.querySelector('#value')
const increment = document.querySelector('button[data-action="increment"]')
const decrement = document.querySelector('button[data-action="decrement"]')
increment.addEventListener("click", inc)

decrement.addEventListener("click", dec)
     