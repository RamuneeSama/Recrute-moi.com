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



const eye1 = document.getElementById('show1');
const eyeoff1 = document.getElementById('cache1');
const passwordField1 = document.getElementById('password1');

eye1.addEventListener('click', function(){
    eye1.style.visibility = "hidden";
    eyeoff1.style.visibility = "visible";
    passwordField1.type = "text";
   
});

eyeoff1.addEventListener('click', function(){
    eyeoff1.style.visibility = "hidden";
    eye1.style.visibility = "visible";
    passwordField1.type = "password";
   
});
