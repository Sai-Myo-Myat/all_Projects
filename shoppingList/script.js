const inputTag = document.getElementsByClassName('inputTag')[0];
const ordered = document.getElementsByClassName('orderList')[0];


const addList = (event) => {
    const list = event.target.value;
    console.log(list);
    const createdList = document.createElement('li');
    createdList.append(list);
    createdList.classList.add('list-group-item')
    ordered.append(createdList);
    inputTag.value = "";

    const doneFunction = _ => createdList.classList.toggle('done');

    createdList.addEventListener('click',doneFunction);
}

inputTag.addEventListener('change',addList)