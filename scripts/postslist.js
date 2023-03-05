var deletePostModal=document.getElementById('deletePostModal');
var deletePostModalIcon=document.getElementById('dltIcon');
var deletePostModalspan=document.getElementById('notDlt');

deletePostModalIcon.onclick=function(){
    deletePostModal.style.display="block"
}
deletePostModalspan.onclick=function(){
    deletePostModal.style.display="none"
}
window.onclick=function(event){
    if(event.target==deletePostModal){
    deletePostModal.style.display="none"
    }
}
var id="";
function setId(htmlId){
    deletePostModal.style.display="block";
    id=htmlId;
}
function dltPost(){
    deletePostModal.style.display="none";
    document.getElementById(id).style.display="none";
}