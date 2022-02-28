const url = 'https://fakestoreapi.com/products';
let products;
fetch(url).then((response) => {
  const responsedData = response.json();
  return responsedData;
})
.then((productFromServer) => {
  products = productFromServer;
  console.log('products are arrived')
  autoComplete.disabled = false;
})
.catch((err) => {
  console.log("error occured",err)
})

const autoComplete = document.getElementsByClassName('autoComplete')[0];
const resultContainer = document.getElementsByClassName('resultContainer')[0];

let filteredProducts = [];
autoComplete.addEventListener('keyup',(event) => {
  if(event.key === "ArrowDown" ||
    event.key === "ArrowUp" ||
    event.key === "Enter"){
      nevigationProduct();
      return;
    }
    
  resultContainer.innerHTML = "";
   const searchText = event.target.value.toLocaleLowerCase();
   if(searchText === ""){
     filteredProducts = [];
     indexToSelect = -1;
      return
   }// to be worked regularly every time input becomes "" string!, if we don't do this, will 
   //raise  a lot of errors when user make input empty while using nevigation;
  filteredProducts = products.filter((product) => {
        return product.title.toLocaleLowerCase().includes(searchText);
  });

   const hasFilteredProducts = filteredProducts.length > 0;
    if(hasFilteredProducts){
        for(let i=0; i<filteredProducts.length; i++){
            const productContainer = document.createElement('div');
            productContainer.id = filteredProducts[i].id;
            productContainer.classList.add('productContainer');
    
            const productTitle = document.createElement('div');
            productTitle.classList.add("productTitle");
            productTitle.append(filteredProducts[i].title);

            const productImage = document.createElement('img');
            productImage.classList.add('productImage');
            productImage.src = filteredProducts[i].image;

            productContainer.append(productImage,productTitle);
            resultContainer.append(productContainer);
        }
    }
});

let indexToSelect = -1;
const nevigationProduct = () => {
    if(filteredProducts.length === 0){
      return;
    } // fixing error when user uses nevigation before searching any product

    if(event.key === "ArrowDown"){

      if(indexToSelect === filteredProducts.length -1){
        indexToSelect = -1; // to be abale to use arrowdown again
        deslectProduct();
        return
      }
      indexToSelect +=1;
      console.log(indexToSelect)
      const productToSelect = selectProduct(indexToSelect);

      if(indexToSelect > 0){
        deslectProduct();
      }// removing selected class name 

      productToSelect.classList.add('selected');// to deselect

    }else if(event.key === "ArrowUp"){

      if(indexToSelect === 0){
        deslectProduct();
        indexToSelect = -1; // to use up and down again and again at first product
        return
      }

      if(indexToSelect === -1){
        return;
      }

      indexToSelect -=1;
      console.log(indexToSelect)  
      deslectProduct();
      const productToSelect = selectProduct(indexToSelect);
      productToSelect.classList.add('selected');

    }else {
      const currentProduct = document.getElementsByClassName('selected')[0];
      console.log(currentProduct)
      console.log('hi3')
    }
};

const selectProduct = (index) => {
  const productIdToSelect = filteredProducts[index].id.toString();
  const productToSelect = document.getElementById(productIdToSelect);
  productToSelect.style.backgroundColor = "rgb(59, 59, 231)";
  productToSelect.lastChild.style.color = "white";
  return productToSelect;
}

const deslectProduct = () =>{
  const porductToDeselect = document.getElementsByClassName('selected')[0];
  porductToDeselect.style.backgroundColor = "white";
  porductToDeselect.lastChild.style.color = "black";
  porductToDeselect.classList.remove('selected');
}