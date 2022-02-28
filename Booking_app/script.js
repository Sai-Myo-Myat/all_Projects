const btnTag =document.querySelector('.Btn');

/* const year = document.querySelector('.year').value;
const month = document.querySelector('.month').value;
const date = document.querySelector('.day').value;
const hours = document.querySelector('.hour').value;
const minute = document.querySelector('.minute').value;*/

const [year,month,date,hours,minute] = ["2021","10","17","23","44"]
const booking = new Date(year,month,date,hours,minute);
const canceling = (bookingTime) => {
    console.log(year,month,date,hours,minute)
    const currentTime = new Date();
    //let newCurrentTime = currentTime.setHours(currentTime.getHours() + 24);
    // --> newCurrentTime.getTime();
    currentTime.setHours(currentTime.getHours() + 24);
    if (currentTime.getTime() < bookingTime.getTime()) {
        console.log('allow')
    }else{
        console.log("not allow");
    }
}
const call = () => {
    canceling(booking);
}

btnTag.addEventListener('click',call);

/* 
    1. const currentTime = new Dare();
    2. currentTiem.setHours(currentTime.getHours + 24); --> newCurrentTime
    3. date
*/

/* 
    1. const booking = booking time - 24hours
    2. const cancel = cancel Time
    3. if(cancel < booking){allowed}
    4. else (cancel > booking) {not allow}
*/

