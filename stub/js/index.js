var createModal = document.getElementById("ceateModal");

var createPost=document.getElementById("craetePost");

createPost.onclick=function () {
    createModal.style.display="block";
}

var cancel = document.getElementById("createPostCancel");

cancel.onclick=function () {
    createModal.style.display="none";
}

var close = document.getElementById("close1");

close.onclick=function () {
    createModal.style.display="none";
}

