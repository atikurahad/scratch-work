

const URL = "https://dummyjson.com/products";
const mobile=()=>{

fetch(URL)
  .then((response) => response.json())
  .then((data) => displayMobile(data.products));
}

const  displayMobile =(products)=>{
  products.forEach((product) => {
    // console.log(product)
   console.log(product.description);
   console.log(product.title)
  });
}
