
var signInModal = document.getElementById("mySignInModal");
var Sign_In_btn = document.getElementById("Sign_in");
var SignInSpan = document.getElementsByClassName("close")[0];

Sign_In_btn.onclick = function() {
    signInModal.style.display = "block";
}


SignInSpan.onclick = function() {
    signInModal.style.display = "none";
}




var modal = document.getElementById("myModal");
var btn = document.getElementById("Sign_up");
var span = document.getElementsByClassName("close")[1];

btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}



var hyper=document.getElementsByClassName("hyper")[0];
hyper.onclick = function() {
    signInModal.style.display = "none";
    modal.style.display = "block";
}




// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }