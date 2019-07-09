var trashModal = document.getElementById("trashModal");
var noBuuton = document.getElementById("No");
// trashModal.style.display="block";
function trashShow() {
    trashModal.style.display="block";
}

noBuuton.onclick=function () {

    trashModal.style.display="none";
}