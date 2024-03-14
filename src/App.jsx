import { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./Card";
import CartItem from "./CartItem";
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
      {/* To create a navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>

              {/* <select name="category" id="category" className="dropdown">
                <option value="shop">Shop</option>
                <option value="allProducts">All products</option>
                <option value="popularItems">Popular Items</option>
                <option value="newArrivals">New Arrivals</option>
              </select> */}
            </ul>
            <>
              <button
                type="button"
                className="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <BsCartFill size={20}/>{"   "}
                Cart{"   "}
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {count}
                </span>
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Items in Cart
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      {cart.length == 0 ? (
                        <div>No Items in Cart</div>
                      ) : (
                        <>
                          <ol className="list-group list-group-numbered">
                            {cart.map((item, index) => {
                              return <CartItem key={index} item={item} />;
                            })}
                          </ol>
                          <h3>Total : Rs.{total}</h3>
                        </>
                      )}
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </div>
        </div>
      </nav>
      {/* To create a header  */}
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              With this shop hompage template
            </p>
          </div>
        </div>
      </header>
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
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright © Your Website 2023
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
