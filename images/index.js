let bagItems =[];

displayItemsOnHomePage();

function addToBag(items){
    bagItems.push(itemsId);

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
                <button class="btn-add-bag" onclick="addToBag(${items})">Add to Bag</button>
            </div> `
});
itemsContainerElement.innerHTML = innerHTML
}