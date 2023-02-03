const input = document.getElementById('validation-input')
function validNum(event) {
    console.log(input.dataset.length)
    console.log(Number(input.dataset.length))
    event.currentTarget.value.length === Number(input.dataset.length)
    ? (input.className = "valid")
    : (input.className = "invalid");
}
input.addEventListener('blur', validNum)
