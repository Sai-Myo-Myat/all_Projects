const btnTag = document.getElementsByClassName('btn')[0];
const imageTag = document.getElementsByClassName('img1')[0];
const imageSrc = imageTag.src;
const imageArray = [
    'https://images.unsplash.com/photo-1635703957000-299fa122a16a?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1635701670995-187145516356?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
]

/* 
count
image.sic = imageArray[count]
*/

let count = 0;
const imageChange = () => {
    if(count === imageArray.length){
        imageTag.src = imageSrc;
        count = 0;
        return;
    }
    imageTag.src = imageArray[count];
    count += 1;
}

btnTag.addEventListener('click',imageChange);

