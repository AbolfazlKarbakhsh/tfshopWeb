function addConfirm(){
    var confirmTag = document.querySelector(".confirm");
    confirmTag.classList.remove("d-none");
    submit.value = "ورود";
    submit.setAttribute("title","وارد شوید")
}
var submit = document.querySelector("#do_login");
submit.addEventListener('click',addConfirm)