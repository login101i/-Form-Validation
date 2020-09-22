const regForm = document.querySelector('form#register')
const errors_el = document.querySelector('form#register .errors');

regForm.addEventListener('submit', validateRegisterForm)

function validateRegisterForm(e) {
    e.preventDefault()

    const firstName = document.querySelector('#register #firstname');
    const surname = document.querySelector('#register #surname')
    const email = document.querySelector('#register #email')
    const password = document.querySelector('#register #password')

    let errores = []

    const email_reg = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const password_reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    if (firstName.value == "") {
        errores.push({ text: "firstname", el: firstName })
    }
    if (surname.value == "") {
        errores.push({ text: "surnname", el: surname })
    }

    if (email.value == "") {
        errores.push({ text: "email", el: email })
    }
    else if (!email_reg.test(email.value)) {
        errores.push({ text: "email", el: email })
    }



    if (password.value == "") {
        errores.push({ text: "password", el: password })
    } else if (!password_reg.test(password.value)) {
        errores.push({ text: "password", el: password })
    }



    if (errores.length > 0) {
        handle_errors(errores)
        return false

    }
    // return true
    alert('wysłano')
    console.log(errores)
}

function handle_errors(errores) {
    let str = `Masz błąd w następujących formularzach: `;

    errores.map((error) => {
        error.el.classList.add('error')
        str += error.text + ", "
    })
    errores[0].el.focus()

    let error_el = document.createElement('div')
    error_el.classList.add('error')
    error_el.innerText = str

    errors_el.appendChild(error_el)

    error_el.addEventListener('click', function () {
        errors_el.style.transform="translateY(3px)"
    })

}
