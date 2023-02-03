function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('button[data-create]')
const btnDestr = document.querySelector('button[data-destroy]')
const div = document.getElementById('controls')
const input = div.firstElementChild
const boxes = document.getElementById('boxes')

function createBoxes() {
  let size = 30
  for (let i = 1; i <= input.value; i += 1){
    size += 10
    let a = document.createElement("div")
    a.style.backgroundColor = getRandomHexColor()
    a.style.width = `${size}px`
    a.style.height = `${size}px`
    boxes.appendChild(a)
  }
}


btnCreate.addEventListener('click', createBoxes)
btnDestr.addEventListener('click', () => {
  boxes.innerHTML = ""
})