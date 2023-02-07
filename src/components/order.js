import { useState } from "react";

function Order({ items, cart, setCart }) {

  //define subTotal as items array.reduce ... parseFloat converts string to floating #
  const subTotal = items.reduce((acc, item) => acc + parseFloat(item.price), 0);

  //update the state of cart by removing item at given index
  const deleteCartItemByIndex = (index) => {
    setCart([
      //spread new array index 0 -> UP TO but not including value of index
      ...cart.slice(0, index),
      //spread to new array value of index + 1 ...
      ...cart.slice(index + 1)
    ]);
  };

  //create html for Order Check Out/Cart section 
  const cartHTML = items.map((item, index) => (
    <div className="cart-item" id={item.id} key={index}>
      <p>{`${item.name}: $ ${item.price}`}</p>
  {/* this button removes items from the cart taking the argument of index...update to unique ID ? */}
      <button type="button" onClick={() => deleteCartItemByIndex(index)}>
        Remove Item
      </button>
    </div>
  ));

  return (
    <div>
      <h2>Order Check Out:</h2>
      {/* HTML for cart */}
      {cartHTML}
      {/* display subtotal + .toFixed adds .00 to price */}
      <div>Order Total: $ {subTotal.toFixed(2)}</div>
    </div>
  );
}

export default Order;
