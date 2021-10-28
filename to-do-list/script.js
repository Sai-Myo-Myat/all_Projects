const allThingsContainer =document.getElementsByClassName('allThingsContainer')[0];
const addIcon = document.getElementById("addIcon");
const inputValue = document.getElementById("inputValue");

const createList =  () => {
    const toDoThing = document.createElement('div');
    toDoThing.classList.add('things')
    toDoThing.innerHTML = inputValue.value;
    const toDoContainer = document.createElement('div');
    toDoContainer.classList.add('toDoContainer');
    inputValue.value = "";
    const deleteBtn = document.createElement('i');
    deleteBtn.classList.add("iconFontSize", "fas", "fa-trash");

    toDoContainer.append(toDoThing,deleteBtn);
    allThingsContainer.appendChild(toDoContainer);

    const done = () => {
        toDoContainer.classList.toggle('done');
    }

    const deleteList = () => {
        toDoContainer.remove();
    }

    deleteBtn.addEventListener('click',deleteList)
    toDoContainer.addEventListener('click',done)
};

const inputLength = () => {
    return inputValue.value.length;
}

const check = () => {
    if(inputLength() > 0){
        createList();
    }
}

const enteredKey = (event) => {
    if(event.which === 13 && inputLength() > 0){
        createList();
    }
}

addIcon.addEventListener('click',check);
inputValue.addEventListener('keypress',enteredKey);