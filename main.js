let min = 0;
let sec = 0;
let msec = 0;

const timerMin = document.getElementById("min");
const timerSec = document.getElementById('sec');
const timerMsec = document.getElementById('msec');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

function res(intrvl, time, html){ //resets interval funtion; takes in (interval func, related variable, html element)
    clearInterval(intrvl); time = 0; html.textContent = "00";

}
function leap(){
    
}

function fTimer(){
    mInterval = setInterval(()=>{ // minute interval function
        min++;
        timerMin.textContent = min < 10 ? `0${min}`: min;
    },60000)
    sInterval = setInterval(()=>{ // second interval function
        sec++;
        if(sec == 60) sec = 1;
        timerSec.textContent = sec < 10 ? `0${sec}` : sec;
    },1000)
    msecInterval = setInterval(()=>{ // millisecond interval function
        msec++;
        if(msec == 100) msec = 1;
        timerMsec.textContent = msec < 10 ? `0${msec}` : msec;
    },10)
}

stop.addEventListener('click', () => { //stops timer
    clearInterval(mInterval);
    clearInterval(sInterval);
    clearInterval(msecInterval);
})
reset.addEventListener('click', () => { //resets timer to zero
    res(mInterval, min, timerMin); 
    res(sInterval, sec, timerSec);
    res(msecInterval, msec, timerMsec);
})

