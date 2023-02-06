import { useState } from 'react';
import Button from "react-bootstrap/Button";
import './MenuItem.css';

function MenuItem({ name, price, description, image, category, onAddToCart }) {

    const item = {
        name,
        price,
        description,
        image,
        category,
        onAddToCart,
    };

    return (
        <div className="item-object-properties">
            <div className='item-name'>{name}</div>
            <div>Price: {price}</div>
            <div>{description}</div>
            <div>
                <Button 
                onClick={() => onAddToCart({ name, description, price })} 
                variant="primary" 
                type="submit">
                Add to Cart
                </Button>
            </div>
        </div>
    );
  }
  
  export default MenuItem;