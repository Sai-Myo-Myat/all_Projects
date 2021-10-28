const userInput = document.getElementsByClassName('input1')[0];
const lists = document.getElementsByClassName("listThings")[0];
const btn = document.getElementsByClassName("btn")[0];

const createList = () => {
    let li = document.createElement('li');;
    li.appendChild(document.createTextNode(userInput.value));
    lists.appendChild(li);
    userInput.value = "";

    const addBtn = document.createElement("button");
    addBtn.appendChild(document.createTextNode("x"));
    li.appendChild(addBtn);

    const deleteLi = () => {
        li.classList.add('delete');
    }

    addBtn.addEventListener("click",deleteLi);

    const done = () => {
        li.classList.toggle('done');
    }

    li.addEventListener('click',done)
    
}

const inputLength = _ => userInput.value.length;

const entered = (event) => {
    if(event.which === 13 &&  inputLength() > 0){
        createList();
    }
}

const check = () => {
    if(inputLength() >0){
        createList();
    }
}

btn.addEventListener('click',check);
userInput.addEventListener('keypress',entered)