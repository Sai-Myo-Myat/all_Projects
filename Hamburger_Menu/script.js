const hamburgerMenuContainer = document.querySelector('.hamburgerMenuContainer');
const line1Tag = document.querySelector('.line1');
const line2Tag = document.querySelector('.line2');
const line3Tag = document.querySelector('.line3');
const overlayDiv = document.querySelector('.overlayDiv');
const liTags = document.getElementsByTagName('li');

hamburgerMenuContainer.addEventListener('click', () => {
    if(hamburgerMenuContainer.classList.contains('isOpening')){
        line2Tag.classList.remove('hideLine2');
        line1Tag.classList.remove('rotatePlus');
        line3Tag.classList.remove('rotateMinus');
        hamburgerMenuContainer.classList.remove('isOpening');
        overlayDiv.classList.remove('showOverlay');
        for(let i=0; i<liTags.length; i++){
            liTags[i].classList.remove('moveUpLiTags');
        }
    }else {
        line2Tag.classList.add('hideLine2');
        line1Tag.classList.add('rotatePlus');
        line3Tag.classList.add('rotateMinus');
        hamburgerMenuContainer.classList.add('isOpening');
        overlayDiv.classList.add('showOverlay');
        for(let i=0; i<liTags.length; i++){
            liTags[i].classList.add('moveUpLiTags');
        }
    }
})
