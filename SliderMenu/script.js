const menuContainer = document.querySelector('.menuContainer');
const sliderTag = document.querySelector('.slider');

const tabs = ["home","about","services","help","contact"];
const handleSlider = (event) => {
    const clickLiTag = document.getElementById(event.target.id);
    sliderTag.style.width = `${clickLiTag.offsetWidth}px`
    sliderTag.style.transform = `translateX(${clickLiTag.offsetLeft}px)`
}

const sliderContainer = document.getElementsByClassName('sliderContainer')[0];

for (let i = 0; i < tabs.length; i++) {
    const liTag = document.createElement('li');
    liTag.classList.add('liTag');
    liTag.id = i;
    liTag.append(tabs[i].toUpperCase());
    liTag.addEventListener('click',handleSlider)
    menuContainer.append(liTag);
    //console.log(slider.offsetLeft)

    if (i === 0) {
        sliderTag.style.width = `${liTag.offsetWidth}px`
    }
}
sliderContainer.style.width = menuContainer.offsetWidth + "px";