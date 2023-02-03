const form = document.getElementsByClassName('login-form')[0]

form.addEventListener('submit', event => {
    const { elements: { email, password } }
        = event.currentTarget;
    console.log({ email: email.value, password: password.value })

    
    if (email.value.length === 0 || password.value.length === 0) {
        alert('Atention, all fields mast be filled')
    }

    event.preventDefault()
    event.currentTarget.reset()
}
)