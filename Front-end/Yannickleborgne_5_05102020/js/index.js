let url = 'http://localhost:3000/api/furniture';

async function apiCall(url){
    let response = await fetch(url);
    let responseData = await response.json()
    return responseData;








    
}


function addNewProductCard(title, description, urlImg, priceInCents, option){
    let listingContainer = document.getElementById("product-listing");

    let template = document.getElementById("product-description");
    
    let clone = document.importNode(template.content, true);
    
    let titleElt = clone.querySelector(".card-title");
    titleElt.textContent = title;
    
    let imgElt = clone.querySelector('.card-img-top');
    imgElt.src = urlImg;
    
    let descriptionElt = clone.querySelector(".card-text");
    descriptionElt.textContent = description;

    let priceElt = clone.querySelector(".product__price");
    priceElt.textContent = priceInCents/100  + " €";

   /* const varnish = select.varnish;

    for (i = 0; i < varnish.length; i++) {
    let selectElt = clone.querySelector(".product__select");
    selectElt = document.createElement("option");
    selectElt.textContent = option;
    selectElt.id = "choice";
    
*/
  




    //select.appendChild(selectOption); 
    //console.log (selectOption.elementParent);
  
    
    
}
/*
for (let j = 0; j < option[i].varnish.length; j++) {
  let varnish = option;
 let select = document.getElementById('select');  
let selectOption = document.createElement('option');
selectOption = clone.querySelector("product__select")
selectOption.textContent = varnish[i];
selectOption.setAttribute("value", varnish[i]);

} 
  */    






    /*for (i = 0; i < colors.length; i++) {
        const newOption = document.createElement('option');        
        option.textContent = choices[i];
        option.setAttribute("value", varnish[i]);*/

     



    // recuperer ton elt Select
    // Pour chq vernis dans le table choices, tu vas creer un elemnt option, modifier sa valeur et son textContent
    // Ajouter cette option ton select
    
    listingContainer.appendChild(clone)

    function selectOption (option){ 

    let select = document.getElementById('select'); 
    for (let j = 0; j <option.length; j++ ){
  
    let selectOption = document.createElement('option');   
    selectOption = clone.querySelector(".product__select");
    selectOption.textContent = option[j];
    selectOption.setAttribute("value", option[j]);



}}
   function (data.[i].varnish);

// let direBonjour  = function (prenom){console.log(prenom)};
//let direBonjour = prenom => console.log(prenom);
//direBonjour('Yannick');
//    let faireQch = function(param1,param2){
//        console.log(param1, param2);
 //   }

apiCall(url).then( data => {

    //data.forEach(furniture => {
    //    addNewProductCard(furniture.name, furniture.description, furniture.imageUrl)
    //})
    for(let i = 0; i < data.length ; i++){
        addNewProductCard(data[i].name, data[i].description, data[i].imageUrl, data[i].price, data[i].varnish);
    }
    console.log(data)



  
     
    

});





 








