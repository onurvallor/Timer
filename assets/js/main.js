
let timer;
let sec = 0;
let min = 0;
let hour = 0;

let timer_element = document.getElementById("timer");

let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");

start_btn.addEventListener("click", () => {
    timer = setInterval(TimerHandler, 1000);
    reset_btn.disabled = true;
});


stop_btn.addEventListener("click", () => {
    timer = clearInterval(timer);
    reset_btn.disabled = false;
});


reset_btn.addEventListener("click", () => {
    timer = clearInterval(timer);
    min, hour, sec = 0;
    timer_element.innerHTML = "00" + " : " + "00" + " : " + "00";
})

function TimerHandler(){
    sec++;

    if(sec == 60){
        sec = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hour++;
    }
    DisplayTime();
}

function DisplayTime(){
    let sec_pretty;
    let min_pretty;
    let hour_pretty;
    if(sec < 10){
        sec_pretty = "0" + sec;
    }else{
        sec_pretty = sec;
    }

    if(min < 10){
        min_pretty = "0" + min;
    }else{
        min_pretty = min;
    }

    if(hour < 10){
        hour_pretty = "0" + hour;
    }else{
        hour_pretty = hour;
    }

    timer_element.innerHTML = hour_pretty + " : " + min_pretty + " : " + sec_pretty;


}