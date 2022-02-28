const toastTag = document.querySelector('.toast');
const popUp = () => {
    toastTag.innerHTML = "";
    const alert = document.createElement('div');
    alert.classList.add('alert')
    alert.innerHTML = `Our website uses cookies ,would you like to accept!`;
    const btn = document.createElement('botton');
    btn.innerHTML = "accept"; 
    btn.classList.add('btn');
    alert.append(btn)
    toastTag.append(alert);

    alert.style.bottom = `-${alert.offsetHeight}px`
    setTimeout(() => {
        alert.style.bottom = "0px"
    },500);

    btn.addEventListener('click',() => {
        localStorage.setItem('accepted',"1");
        alert.style.bottom = `-${alert.offsetHeight}px`
    })
}

window.addEventListener('load',() => {
    const accepted = localStorage.getItem('accepted');
    if(accepted !== "1"){
        popUp();
    }
});