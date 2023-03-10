import MenuItem from "./MenuItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./MenuList.css";
import { useState } from "react";
import Order from "./Order.js";
import { nanoid } from 'nanoid'

//array of menu items
const INITIAL_ITEMS = [
  {
    name: "Calamari",
    description:
      "Freshly caught and fried to order!",
    price: "9.00",
    category: "appetizer",
  },
  {
    name: "Mozzarella sticks",
    description:
      "House-made! Fan favorite!",
    price: "5.00",
    category: "appetizer",
  },
  {
    name: "Soft drinks",
    description:
      "Coke products and bottled water available",
    price: "3.00",
    category: "drink",
  },
  {
    name: "pizza by the slice",
    description:
      "Fresh-baked, homemade crust, topped with house-made marinara and mozerella cheese",
    price: "8.00",
    category: "entree",
  },
  {
    name: "pasta",
    description: "House-made fettuccine or marinara. Served w/ choice of side.",
    price: "15.00",
    category: "entree",
  },
  {
    name: "large pizza",
    description: "14inch pizza divided in 8 slices.",
    price: "20.00",
    category: "entree",
  },
  {
    name: "salad",
    description: "House or caesar. Add chicken or steak for additional $2.00.",
    price: "8.00",
    category: "side",
  },
  {
    name: "breadsticks",
    description: "Made fresh to order!",
    price: "5.00",
    category: "side",
  },
  {
    name: "lava cake",
    description: "Chocolate cake with warm, goey center!",
    price: "8.00",
    category: "dessert",
  },
  {
    name: "cheesecake",
    description:
      "New york style. Top with chocolate drizzle or cherry topping!",
    price: "8.00",
    category: "dessert",
  },
];

function MenuList() {
  const [cart, setCart] = useState([]);
  const [menuItem, setMenuItem] = useState(INITIAL_ITEMS);
  const [selectedCategory, setSelectedCategory] = useState("");

  //handleClick is a callback function that updates selectedCategory's state
  //this updates category to the string associated with the click events below
  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  //callback function that is called when the user selects an item from the menu
  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  //returns a menuItem component for every item whose category matches selected category associated with string on buttons in html
  const filteredItems = (selectedCategory) => {
    return (
      menuItem
        //.filter returns an array containing the items from menuItem for which item.category === selectedCategory
        .filter((item) => item.category === selectedCategory)
        //only include item.category ie.entree,side,dessert in array that match the selectedCategory "string"
        .map((item, index) => (
          //use .map to create new array containing the MenuItem components based on the items from the filtered array
          <MenuItem
            key={nanoid()}
            name={item.name}
            description={item.description}
            price={item.price}
            onAddToCart={handleAddToCart}
            id={nanoid()}
          />
        ))
    );
  };


  return (
    <div>
      <Container>
        <Row className="main-menu">
          <Col md={2} className="side-options">
            <button 
            className="menu-button"
              onClick={() => handleClick("appetizer")}
            >
              Appetizers
              </button>
            <button
              className="menu-button"
              onClick={() => handleClick("entree")}
            >
              Entrees
            </button>
            <button 
            className="menu-button" 
            onClick={() => handleClick("side")}
            >
              Sides
            </button>
            <button
              className="menu-button"
              onClick={() => handleClick("dessert")}
            >
              Desserts
            </button>
            <button 
            className="menu-button"
              onClick={() => handleClick("drink")}
            >
              Drinks
              </button>
          </Col>
          <Col md={10}>
            <section className="selected-menu-container">
              {filteredItems(selectedCategory)}
            </section>
          </Col>
        </Row>
        <Row>
          <Col className="cart-options" md={12}>
           {/*} <Order items={cart} />*/}
           <Order items={cart} cart={cart} setCart={setCart} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MenuList;
