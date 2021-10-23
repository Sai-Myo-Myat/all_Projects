const Italic = document.getElementById('italic');
const Bold = document.getElementById('bold');
const textArea = document.getElementById('text');

let myFunction = (a,b) => {
    if(a.className === "click"){
        a.classList.add("clicked");
        a.classList.remove('click');
        textArea.classList.add (b);
    } else if (a.className === "clicked") {
        a.classList.remove('clicked');
        a.classList.add('click')
        textArea.classList.remove(b)
    }
}

//Italic.addEventListener('click',myFunction(Italic));