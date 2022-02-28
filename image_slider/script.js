const leftArrow = document.getElementsByClassName('left')[0];
const rightArrow = document.getElementsByClassName('right')[0];
const imageTag = document.getElementById('images');
const unorderedBall =document.getElementsByClassName('unorderedBall')[0];
//const originalImageSrc = imageTag.src;

const imageArray = [
    "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80",
    'https://images.unsplash.com/photo-1635821412009-6620f2c8fe0d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://media.istockphoto.com/photos/quality-control-certification-checked-guarantee-of-standard-picture-id1282804749?b=1&k=20&m=1282804749&s=170667a&w=0&h=pxajgIoOB8XGjTPHwWAsnVS3PCoUZWxBwCYBdpqCVk8=',
    'https://media.istockphoto.com/photos/love-working-from-home-picture-id1182641010?b=1&k=20&m=1182641010&s=170667a&w=0&h=8vcHvvDfC7HnyZb24As-jdr7z8tNu8Xr5JJRvHYVXEw=',
    'https://media.istockphoto.com/photos/user-typing-password-on-computer-security-code-picture-id1283382475?b=1&k=20&m=1283382475&s=170667a&w=0&h=DBb3Xbr8lwlpl0R8apndP1ohBoDKW280jSTsvDq3vEo='
]

let count = 0;
imageTag.src = imageArray[count];

//making current-image with ball
let ball;
const makingBall = () => {
    for(let i=0; i<imageArray.length; i++){
        ball = document.createElement('div');
        ball.classList.add('currentImage');
        unorderedBall.append(ball);

        if (i===0) {
            ball.classList.add('active')
        }
    }
}

makingBall();

//showing current image with ball
const ballToShowCurrentImage = document.getElementsByClassName('currentImage');
const showCurrentImage = () => {
    for (let i = 0; i < ballToShowCurrentImage.length; i++) {
        ballToShowCurrentImage[i].classList.remove('active');
    }
    console.log(count)
    if(count === imageArray.length){
        count = 0;
    }else if(count === -1){
        count = imageArray.length -1;
    }
    ballToShowCurrentImage[count].classList.add('active');
}


const leftMoving = () => {
    count -=1;
    showCurrentImage();
    if(count === 0){
        imageTag.src = imageArray[count];
        return;
    }else if(count === -1){
        count = imageArray.length-1;
        imageTag.src = imageArray[count];
        console.log(count);
        return;
    }

    imageTag.src = imageArray[count];
    console.log(count);
}

const rightMoving =() => {
    count +=1;
    showCurrentImage();
    if(count === imageArray.length){
        count = 0;
        console.log(count);
    }
    imageTag.src = imageArray[count];
   // console.log(count);
}

leftArrow.addEventListener("click",leftMoving);
rightArrow.addEventListener("click",rightMoving);

//console.log(unorderedBall[0])


