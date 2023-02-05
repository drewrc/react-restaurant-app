import { useState } from 'react';
import Button from "react-bootstrap/Button";
import './MenuItem.css';

function MenuItem({ name, price, description, image, category, addToOrder }) {

    const item = {
        name,
        price,
        description,
        image,
        category,
        addToOrder,
    };

    return (
        <div className="item-object-properties">
            <div className='item-name'>{name}</div>
            <div>Price: {price}</div>
            <div>{description}</div>
            <div><Button variant="primary" type="submit">Add to cart{addToOrder}</Button></div>
        </div>
    );
  }
  
  export default MenuItem;