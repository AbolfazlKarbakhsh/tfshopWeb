
var timerTag = document.getElementById('timer');
var confirmTimer = document.getElementById('confirmTimer');
var pTimer = document.querySelector('.pTimer');
timerTag.innerHTML = 00 + ":" + 05;




function addConfirm(e) {
    e.pr
    var confirmTag = document.querySelector(".confirm");
    var checkbox = document.querySelector(".checkbox");

    confirmTag.classList.remove("d-none");
    checkbox.classList.add("d-none");
    confirmTimer.classList.remove("d-none");


    console.log(checkbox);
    submit.value = "ورود";
    submit.setAttribute("title", "وارد شوید");

    startTimer();
    var t = setInterval(startTimer, 1000);

}
var submit = document.querySelector("#do_login");
submit.addEventListener('click', addConfirm);





function startTimer() {

    var presentTime = document.getElementById('timer').innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if (s == 59) { m = m - 1 }
    if (m == -1) {
        pTimer.outerHTML = `
        <p class='field pTimer' id="confirmTimer">
        <label>کد تایید دوباره برای شما ارسال شد </label>
        </p>
        `
        pTimer.classList.add("d-none");
    }

    document.getElementById('timer').innerHTML =
        m + ":" + s;
}


function checkSecond(sec) {
    if (sec < 10 && sec >= 0) { sec = "0" + sec }; // add zero in front of numbers < 10
    if (sec < 0) { sec = "59" };
    return sec;
}
