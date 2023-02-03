const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


input.addEventListener('change', (event) => {
    text.style.fontSize = `${event.currentTarget.value}px`
})