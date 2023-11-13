
document.querySelector('form').addEventListener('submit', (e) => {
    document.querySelectorAll('.error-message').forEach((error) => {
        error.style.display = "none";
        error.style.color="red"
    });

    if (!isValidForm()) {
        e.preventDefault();
    }
});
const email = document.querySelector('#formEmail').value;
const msg = document.querySelector('#formMessage').value;
const name = document.querySelector('#formName').value;

function isValidForm() {
    let isValid = true;

    const name = document.querySelector('#formName').value;
    const nameError = document.querySelector('#name-error');
    if (name.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.style.display = "block";
        isValid = false;
    }

    const email = document.querySelector('#formEmail').value;
    const emailError = document.querySelector('#email-error');
    if (email.trim() === "" || !isValidEmail(email)) {
        emailError.textContent = "Invalid email address.";
        emailError.style.display = "block";
        isValid = false;
    }

    const msg = document.querySelector('#formMessage').value;
    const msgError = document.querySelector('#message-error');
    if (msg.trim() === "") {
        msgError.textContent = "Message is required.";
        msgError.style.display = "block";
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    const pattern = /^[\w\-.]+@[a-zA-Z-]{1,6}\.[a-zA-Z-]{2,}$/
    //this allows only 5 chars after @ and dont allow numbers
    return pattern.test(email);
}
sendmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ce.20.242@student.uotechnology.edu.iq",
        Password : "jan#11223344",
        To : 'ce.20.242@student.uotechnology.edu.iq',
        From : email,
        Subject : "This is the subject",
        Body : `Name: ${document.querySelector('#formName').value
    } <br> Email: ${document.querySelector('#formEmail').value} <br> ${msg = document.querySelector('#formMessage').value}`
    }).then(
      message => alert("message sent succesfully")
    );



}
