import React from "react";
import { BsCartFill } from "react-icons/bs";
import CartItem from "./CartItem";

function NavBar({ count, cart, total }) {
  return (
    <>
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
                <BsCartFill size={20} />
                {"   "}
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
    </>
  );
}

export default NavBar;
