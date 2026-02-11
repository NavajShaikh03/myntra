let bagItems =[];
onLoad();

function onLoad(){
let bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr):[];
displayItemsOnHomePage();
displayBagIcon();
}
function addToBag(itemsId){
    bagItems.push(itemsId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems))  // convert data in string and store in the localstorage
    displayBagIcon();

}
function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length>0){
        bagItemCountElement.style.visibility = 'visible'  // show the content 
        bagItemCountElement.innerText = bagItems.length
    }else{
        bagItemCountElement.style.visibility = 'hidden'
    }
}  

function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');

let innerHTML= '';

items.forEach(items => {
    innerHTML +=`
            <div class="item-container">
                <img class="item-image" src="${items.image}" alt="item image">
                <div class="rating">
                    ${items.rating.stars}⭐ | ${items.rating.count}
                </div>
                <div class="company-name">${items.company}</div>
                <div class="item-name">${items.item_name}</div>
                <div class="price">
                    <span class="current-price">Rs ${items.current_price}</span>
                    <span class="original-price">Rs  ${items.current_price}</span>
                    <span class="discount">( ${items.discount_percentage}%  OFF)
                </div>
                <button class="btn-add-bag" onclick="addToBag(${items.id})">Add to Bag</button>
            </div> `
});
itemsContainerElement.innerHTML = innerHTML
}