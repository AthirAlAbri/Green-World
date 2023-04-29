let label = document.getElementById("label")
let shoppingCart = document.getElementById("shopping-cart")
let basket = JSON.parse(localStorage.getItem("data")) || [];


//display cart number on cart
let calculation =()=> {
    let cartIcon = document.getElementById("cartNum");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => parseInt(x)  + parseInt(y), 0)

}

calculation();

//display choosen items in cart page
let cartItems = () =>{
    if(basket.length !== 0){
        return (shoppingCart.innerHTML = basket
            .map((x) =>{
                let { id, item } = x;
                let search = shopItemData.find((y) => y.id === id) || [];
                let { img, price, name } = search;
                return `
            <div class="cart-item">
                <img width="100" src=${img} />
                <div class="details">
                    <div class="title-price-x">
                        <h4 class= "title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})"class="bi bi-x-lg"></i>
                    </div>

                    
                    
                        <div class="buttons">
                                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                                <div id= ${id} class="quantity">${item}</div>
                                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                        </div>
                    

                    <h3>OR ${item * parseInt(search.price) }</h3>
                </div>
            </div>
            `;
            })
            .join(""));
        
    } else {
        shoppingCart.innerHTML = "";
        label.innerHTML = `
        <h2> Cart is Empty! </h2>
        <a href = "calculation.html">
            <button class = "homeButton">Back to store</button>
        </a>
         `;
    }
};
cartItems();

//increment function for incrementing items
let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id)

    if (search === undefined){
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    }
    else{
        search.item += 1;
    } 
    

    cartItems();
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));

};
//decrement function for decrementing items
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x)=> x.id === selectedItem.id);

    if(search === undefined) return;
    else if (search.item === 0) return;
    else{
        search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    cartItems();
    localStorage.setItem("data", JSON.stringify(basket));
   
};
//update function to update number of items on cart
let update = (id) => {
    let search = basket.find((x)=> x.id === id)
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();

};
//remove function for removing  items from cart
let removeItem = (id) => {
    let selectedItem = id;
    basket = basket.filter((x) => x.id !== selectedItem.id);
    calculation();
    cartItems();
    TotalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
  };
//total function to calculate price of items in cart
  let TotalAmount = () => {
    if (basket.length !== 0) {
      let amount = basket
        .map((x) => {
          let { id, item } = x;
          let search = shopItemData.find((y) => y.id === id);
          return item * parseInt(search.price) ;
        })
        .reduce((x, y) => x + y, 0);
  
      return (label.innerHTML = `
      <h2>Total Price : OR ${parseInt(amount) }</h2>
      <button class="checkout">Buy now</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `);
    } else return;
  };
  
  TotalAmount();
//clear function to clear cart
  let clearCart = () => {
    basket = [];
    cartItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
  };
