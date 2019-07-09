function addComments(id){
    var addEventName = id.value +'<br>';
    var a = document.getElementById('userComments');
    document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';
    a.value=a.defaultValue;
}


var numberOfClicks=0;
function postLiked(){
    document.getElementById("likeBlog").innerHTML = "<i class='fa fa-thumbs-up'></i> Liked!";
    numberOfClicks += 1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('commentCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('commentCount').innerHTML = numberOfClicks + " people have liked this!";
        }
    }
}



var edit=document.getElementById("Edit_button")
var save=document.getElementById("Save_button")
var editable=document.getElementById("editable")
var blogTitle=document.getElementById("blogTitle")

save.style.display="none";

edit.onclick= function () {

    edit.style.display="none";
    save.style.display="block";
    editable.setAttribute('contenteditable','true');
    editable.style.border="thin solid black";

    blogTitle.setAttribute('contenteditable','true');
    blogTitle.style.border="thin solid black";


}



save.onclick=function saveEdits() {

    save.style.display="none";
    edit.style.display="block";

//get the editable element
    var editElemBody = document.getElementById("blogBody");

//get the edited element content
    var userVersion = editElemBody.innerHTML;



    editElemBody.innerHTML=userVersion;
    editable.setAttribute('contenteditable','false');
    editable.style.border="none";



    // edit the title



    var editElemTitle = document.getElementById("blogTitleNew");


    var userVersion1 = editElemTitle.innerHTML;



    editElemTitle.innerHTML=userVersion1;
    blogTitle.setAttribute('contenteditable','false');
    blogTitle.style.border="none";

}