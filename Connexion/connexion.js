const eye = document.getElementById('show');
const eyeoff = document.getElementById('cache');
const passwordField = document.getElementById('password');



eye.addEventListener('click', function(){
    eye.style.visibility = "hidden";
    eyeoff.style.visibility = "visible";
    passwordField.type = "text";
   
});

eyeoff.addEventListener('click', function(){
    eyeoff.style.visibility = "hidden";
    eye.style.visibility = "visible";
    passwordField.type = "password";
   
});