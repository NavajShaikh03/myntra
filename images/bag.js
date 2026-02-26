let bagItems = JSON.parse(localStorage.getItem('bagItems')) || [];
let bagItemsObjects;
onLoad();

function onLoad(){  // load the js file
    loadBagItemsObject();
    displayBagItems();   // display the bag items  
}

function loadBagItemsObject(){
    // console.log(bagItems);
    bagItemsObjects = bagItems.map(itemId => {
        for (let i = 0; i < items.length; i++){
            if (itemId == items[i].id){
                return items[i];
            }
 
        }
    });
    console.log(bagItemsObjects);
}

function displayBagItems() {
    let containerElement = document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemsObjects.forEach(bagItems => {
        innerHTML += generateItemHTML(bagItems);
    });

    containerElement.innerHTML =innerHTML  ;
}

function generateItemHTML(items){
    return `
                <div class="bag-item-container">
    
                    <!-- LEFT IMAGE -->
                    <img class="bag-left-part"
                        src="/myntra/images/${items.image}"
                        alt="product">
    
                    <!-- RIGHT DETAILS -->
                    <div class="item-right-part">
    
                        <div class="company">${items.company}</div>
    
                        <div class="item-name">${items.item_name}</div>
    
                        <div class="price-container">
                            <span class="current-price">Rs ${items.current_price}</span>
                            <span class="original-price">Rs ${items.original_price}</span>
                            <span class="discount-percentage">(${items.discount_percentage}% OFF)</span>
                        </div>
    
                        <div class="return-period">
                            <span class="return-period-days">${items.return_period} days</span>
                            return available
                        </div>
    
                        <div class="delivery-details">
                            delivery by
                            <span class="delivery-details-days">${items.delivery_date}</span>
                        </div>
    
                    </div>
    
                    <!-- REMOVE -->
                    <div class="remove-from-cart">X</div>
    
                </div>`;

}
