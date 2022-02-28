const templates = [
    {
        name: "video1",
        image: "https://bit.ly/3Fnn7MX",
        uploadTime: new Date(2021,4,6)
    },
    {
        name: "video2",
        image: "https://bit.ly/3oDUSTw",
        uploadTime: new Date(2021,7,3)
    },
    {
        name: "video3",
        image: "https://bit.ly/30xytPy",
        uploadTime: new Date(2021,3,23)
    },    {
        name: "video4",
        image: "https://bit.ly/3CnD04m",
        uploadTime: new Date(2021,8,5)
    }
]

const templateTags = document.querySelector('.templates');
const sortOptions = document.querySelectorAll('.dropdown-item');

sortOptions.forEach((sorted) => {
    sorted.addEventListener("click", (event) => {
        const sortType = event.target.id;
        console.log(sortType)
        if (sortType === "assending") {
            const sortedByAssending = templates.sort((a,b) =>{ 
                return  a.uploadTime.getTime() - b.uploadTime.getTime();
            });
            makingTemplate(sortedByAssending)
        }else {
            const sortedByDesending = templates.sort((a,b) => {
                return b.uploadTime.getTime() - a.uploadTime.getTime();
            })
            makingTemplate(sortedByDesending)
        }
    })
})

const makingTemplate = (temArray) => {
    templateTags.innerHTML = "";
    temArray.forEach((template) => {
        const templateTag = `
            <div class="templateTag"> 
                <div class="imageContainer">
                    <img class="image" src="${template.image}" />
                </div>
                <div class="name"> ${template.name} </div>
                <div class="date"> ${template.uploadTime.toLocaleString()} </div>
            </div>
        `;
        templateTags.innerHTML += templateTag;
    })
}

makingTemplate(templates);


/*const templatesTag = document.querySelector('.templates');
const assendingAndDesending =document.querySelectorAll('.dropdown-item');
assendingAndDesending.forEach((option) => {
    option.addEventListener('click',(event) => {
        const sortType = event.target.id;
        if (sortType === "assending") {
            const sortedByAssending = templates.sort((a,b) => 
                a.uploadTime.getTime() -b.uploadTime.getTime()
            );
            makingTemplate(sortedByAssending);
        }else {

            const sortedByDesending = templates.sort((a,b) => 
            b.uploadTime.getTime() - a.uploadTime.getTime()
            );
            makingTemplate(sortedByDesending);
        }
    })
});

const makingTemplate = (tempArray) => {
    templatesTag.innerHTML = "";
    tempArray.forEach((temp) => {
        const templateContainer = `
        <div class="innerContainer">
        <div class="imageContainer"> 
            <img src="${temp.image}" />
        </div>
        <div class="name"> ${temp.name} </div>
        <div class="date"> ${temp.uploadTime.toLocaleString()} </div>
        </div>
        `;
        templatesTag.innerHTML += templateContainer;
    });
}

makingTemplate(templates);

//makingTemplate(template);
/*   console.log(templateContainer)
console.log(template.name);
console.log(template.image)*/