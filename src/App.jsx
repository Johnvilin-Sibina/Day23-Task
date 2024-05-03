import { useState } from "react";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Components/Card";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  //Details about the products are listed in the following array products
  let products = [
    {
      id: 1,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Air Conditioner",
      initialPrice: 36990,
      discountedPrice: 30000,
      button: "Add to Cart",
    },
    {
      id: 2,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Refridgerator",
      initialPrice: 40000,
      discountedPrice: 35500,
      button: "Add to Cart",
    },
    {
      id: 3,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Microwave Oven",
      initialPrice: 15000,
      discountedPrice: 9000,
      button: "Add to Cart",
    },
    {
      id: 4,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Ladies Watch",
      initialPrice: 5000,
      discountedPrice: 3500,
      button: "Add to Cart",
    },
    {
      id: 5,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Men's Footwear",
      initialPrice: 3000,
      discountedPrice: 1500,
      button: "Add to Cart",
    },
    {
      id: 6,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Washing Machine",
      initialPrice: 40000,
      discountedPrice: 25000,
      button: "Add to Cart",
    },
    {
      id: 7,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Ladies Footwear",
      initialPrice: 3500,
      discountedPrice: 2000,
      button: "Add to Cart",
    },
    {
      id: 8,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Kurthi",
      initialPrice: 1500,
      discountedPrice: 500,
      button: "Add to Cart",
    },
    {
      id: 9,
      badge: false,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Premium Hand Bag",
      initialPrice: 1500,
      discountedPrice: 500,
      button: "Add to Cart",
    },
    {
      id: 10,
      badge: true,
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      name: "Jwellery Set",
      initialPrice: 2400,
      discountedPrice: 1200,
      button: "Add to Cart",
    },
  ];

  const [cart, setCart] = useState([]); //Hook to update items in cart
  const [total, setTotal] = useState(0); //Hook to update the total amount of price on the items in cart
  const [count, setCount] = useState(0); //Hook to update the count of items in cart

  //Function to add items to cart
  let addToCart = (product) => {
    setCart([...cart, product]);
    setTotal(total + product.discountedPrice);
    setCount(count + 1);
  };

  //Function to remove items from cart
  let removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setTotal(total - product.discountedPrice);
    setCount(count - 1);
  };

  return (
    <>

<NavBar count={count} cart={cart} total={total}/>
     <Header />
      
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          {/* The array products is looped using map and the products in it are passed as an attribute
          to the child component card */}
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <Card
                  key={index}
                  product={product}
                  addToCart={addToCart}
                  removeFromCart={removeFromCart}
                  cart={cart}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
