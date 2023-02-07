import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./MenuItem.css";
import { nanoid } from 'nanoid'

function MenuItem({ name, price, description, image, category, onAddToCart, id}) {
  return (
    <div className="item-object-properties">
      <div className="item-name">{name}</div>
      <div>Price: $ {price}</div>
      <div>{description}</div>
      <div>
        <Button
          onClick={() => onAddToCart({ name, description, price, id })}
          variant="danger"
          type="submit"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default MenuItem;
