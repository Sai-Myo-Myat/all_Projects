const menuTabs = ["Home","About","Services","Contact"];
const nameWords = ['a ','m ','a ','n ','d ','a '];

const menuTag = document.querySelector('.menu');
const nameTag = document.getElementsByClassName('name')[0];
const imageContainer = document.getElementsByClassName('imageContainer')[0];
const homeTag = document.querySelector('.home');

const tabContainer = document.createElement('div');
tabContainer.classList.add('tabContainer');
const slider = document.createElement('div');
slider.classList.add('slider');

let count = 0;
const forName = () => {
    imageContainer.style.transform =`rotate(30deg)`
    setTimeout(() => {
        imageContainer.style.transform = `rotate(-30deg)`;
    },400);
    if (count === nameWords.length) {
        count = 0;
        nameTag.textContent = "";
        return;
   }
    nameTag.textContent += nameWords[count].toUpperCase();
    count ++;
}

setInterval(forName,800);  // for name and image animation

const moveSlider = (event) => {
    const clickedTab = document.getElementById(event.target.id);
    slider.style.width = clickedTab.offsetWidth + "px";
    slider.style.transform = `translateX(${clickedTab.offsetLeft}px)`;
}//moving slider

for (let i = 0; i < menuTabs.length; i++) {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.id = i;
    tab.textContent = menuTabs[i];
    tab.addEventListener('click',moveSlider);
    tabContainer.append(tab);
    menuTag.append(tabContainer);
    if (i === 0) {
        slider.style.width = tab.offsetWidth + "px";
    }
} // making tabs
tabContainer.append(slider);

const allTab = document.getElementsByClassName('tab'); // acessing tabs
//about tab
const aboutTab = () => {
    homeTag.style.transform = `translateX(-${homeTag.offsetWidth}px)`;
    setTimeout(()=>{
        homeTag.style.display = "none";
    },1000)
}

allTab[1].addEventListener('click',aboutTab)


