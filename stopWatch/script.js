const startButton = document.getElementsByClassName('Start')[0];
const pauseButton = document.getElementsByClassName('Pause')[0];
const continueButton = document.getElementsByClassName('Continue')[0];
const restartButton = document.getElementsByClassName('Restart')[0];
const stopWatch = document.getElementsByClassName("stopWatch")[0];
const miliSecondTag = document.getElementsByClassName('miliSecond')[0];

let minute = 59, second = 57, hour = 0, milisecond = 0;

const startingTime = () => {
/*
    milisecond += 1;
    if(milisecond === 1000){
        milisecond = 0; */
        second += 1;
        if(second === 60){
            second = 0;
            minute +=1;
            if(minute === 60){
                minute = 0;
                hour +=1;
            }
        }

    //condition ? code : code
    const forSecond = second < 10 ? "0" + second.toString() : second;
    const forMinute = minute < 10 ? "0" + minute.toString() : minute;
    const forHour = hour < 10 ? "0" + hour.toString() : hour;
    //const forMiliSecond = milisecond < 100 ? "00" + milisecond.toString() : milisecond;

    stopWatch.innerHTML = forHour + ":" + forMinute + ":" + forSecond;
    //miliSecondTag.innerHTML = forMiliSecond;
}

let intervalId ;
startButton.addEventListener('click',() => {
    const checked = stopWatch.classList.contains('clicked');
    if(checked){
        return;
    } 
    stopWatch.classList.add('clicked');
    intervalId = setInterval(startingTime,1000);
});
 
pauseButton.addEventListener('click',() => {
    clearInterval(intervalId);
    stopWatch.classList.remove('clicked');
});

continueButton.addEventListener('click',() => {
    stopWatch.classList.add('clicked');
    clearInterval(intervalId);
    intervalId = setInterval(startingTime,1000);
});

restartButton.addEventListener('click',() => {
    second =0;
    minute =0;
    hour =0;
});