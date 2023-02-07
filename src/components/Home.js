import "./Home.css";

function Home() {
    return (
    <div className="container">
        <div className="row main">
            <div className="col-md-8 main-text">
            <h1>Welcome to Vic's pizza and pasta!</h1>
                <img 
                className="main-banner"
                src={require("./pizzabanner.png")}
              />
                <h2>"Where tradition meets taste - a family affair at Vics!"</h2>
                    <p>
                    <h4 className="main-description">Pizza ipsum dolor amet anchovies chicken hawaiian, marinara white pizza Chicago style parmesan red onions black olives sausage broccoli thin crust chicken wing. Sausage personal pepperoni bbq rib green bell peppers broccoli, chicken wing extra cheese white garlic. Pepperoni stuffed crust chicken wing, philly steak pepperoni mozzarella deep crust chicken peppers ranch. Mayo banana peppers deep crust stuffed crust personal marinara ham green bell peppers pepperoni pie bbq rib mozzarella pizza bianca string cheese. Pizza pizza roll sausage pork pie.</h4>
                    </p>
            </div>

            <div className="col-md-4 side-text">
                <h2>Featured Items</h2>
                    <p>
                    <ul className="featured-items">
                        <li>Mushrooms garlic sauce chicken wing meatball </li>
                        <li> Sausage garlic spinach mayo buffalo sauce fresh tomatoes. </li>
                        <li>Green bell peppers philly chicken bianca. </li>
                    </ul>
                    </p>
            
                <h2>Weekly specials</h2>
                    <p className="weekly-specials">
                    Red onions stuffed crust onions pesto, banana peppers pineapple philly steak platter garlic sauce. Meat lovers bbq steak bbq rib. Pork Chicago style white garlic, pesto pizza sauteed onions philly steak black olives buffalo sauce. Onions mayo bbq spinach garlic sauce mushrooms buffalo sauce meatball lasagna extra cheese. Platter pie marinara, chicken wing chicken wing pepperoni ranch bbq garlic banana peppers chicken large meat lovers sausage buffalo sauce. Meatball burnt mouth peppers, pan bacon pie mushrooms chicken wing chicken and bacon party pineapple hand tossed string cheese green bell peppers. Chicken pesto NY style parmesan sauteed onions pizza platter pepperoni white garlic philly chicken chicken wing ranch meat lovers beef.
                    </p>
   
            </div>
        </div> 
    </div>
  
    );
  }
  
  export default Home;