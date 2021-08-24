const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {
// toggle the type attribute
const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
password.setAttribute('type', type);
// toggle the eye / eye slash icon
this.classList.toggle('bi-eye');
});

//Log In Function

function check(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
 if(form.email.value == "admin" && form.password.value == "abc123")
  {
    window.open('main.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("Error Password or Username")/*displays error message*/
  }
}

