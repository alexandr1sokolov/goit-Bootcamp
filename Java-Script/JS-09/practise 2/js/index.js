const deadline =  new Date(2019, 0,1,0,0,0);
let secText =  document.querySelector('.seconds');
let minText = document.querySelector('.minutes');
let hoursText = document.querySelector('.hours');
let daysText = document.querySelector('.days');



function timer(){
    const today = new Date();
    // console.log(today);
    let result = deadline - today;
    let sec = Math.floor(result/1000);
    // console.log(sec);
    let min = Math.floor(sec/60);
    let hours = Math.floor(min/60);
    let days = Math.floor(hours/24);
    sec= sec%60;
    min = min%60;
    hours = hours%24;
    console.log(sec, min, hours, days);
    secText.textContent = sec <10? `0${sec}`:sec;
    minText.textContent = min <10? `0${min}`:min;
    hoursText.textContent =hours <10? `0${hours}`:hours;
    daysText.textContent =days<10? `0${days}`:days;
}
setInterval(timer,1000);
