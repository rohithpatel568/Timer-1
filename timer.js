let minute = document.querySelector(".minute-counter");
let second = document.querySelector(".second-counter");
let buttonStart = document.querySelector(".start");
let buttonEnd = document.querySelector(".end");

if(!(minute.value > 0))
minute.value = 0;

buttonStart.addEventListener('click', () => {
    let m = minute.value;
    let s = second.value;
    console.log(m, s);
    updateClock(m, s);
    function updateClock(m, s) {
        if (s == 0 && m > 0) {
            m -= 1;
            s = 59;
        }
        // if (m == 0 && s == 0) {
        //     return;
        // }
        minute.value = m;
        second.value = s;
        console.log(m, s)
        setTimeout(() => {
            if(m >= 0 && s > 0)
            updateClock(m, s-1);
        }, 1000)  
    }
})