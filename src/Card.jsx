//This is the component to display product cards
//The attribute passed to the component Card in the parent component App is received here
//and the products are displayed in the product card
import { FaStar } from "react-icons/fa";
function Card({ product, addToCart, removeFromCart, cart }) {
    //Condition to check whether the object has Sales badge it is present the 
    //card will be displayed in the following model
  return product.badge ? (  
    <div className="col mb-5">   
      <div className="card h-100">
        {/* Sales Badge */}
        <div
          className="badge bg-dark text-white position-absolute"
          style={{ top: "0.5rem", right: "0.5rem" }}
        >
          Sale
        </div>
        {/* Product image */}
        <img className="card-img-top" src={product.image} alt="..." />
        {/* Product details */}
        <div className="card-body p-4">
          <div className="text-center">
            {/*  Product name */}
            <h5 className="fw-bolder">{product.name}</h5>
            {/*Product Rating*/}
            <FaStar style={{ color: "gold" }} />
            <FaStar style={{ color: "gold" }} />
            <FaStar style={{ color: "gold" }} />
            <FaStar style={{ color: "gold" }} />
            <FaStar style={{ color: "gold" }} />
            {/* Product price */}
            <p>
              <del>Rs.{product.initialPrice}</del> Rs.{product.discountedPrice}
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              //Condition add and remove item from cart
              onClick={() => {
                cart.some((item) => item.id === product.id)
                  ? removeFromCart(product)
                  : addToCart(product);
              }}
            >
              {/* Condition to display "Add to Cart" and "Remove from Cart Button" */}
              {cart.some((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
              {/* {product.button} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (//Condition to check whether the object has Sales badge it is not present the 
  //card will be displayed in the following model
    <div className="col mb-5">
      <div className="card h-100">
        {/* Product image */}
        <img className="card-img-top" src={product.image} alt="..." />
        {/* Product details */}
        <div className="card-body p-4">
          <div className="text-center">
            {/* Product name */}
            <h5 className="fw-bolder">{product.name}</h5>
            {/* Product price */}
            <p>
              <del>Rs.{product.initialPrice}</del> Rs.{product.discountedPrice}
            </p>
          </div>
        </div>
        {/* Button */}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button
              className="btn btn-outline-dark mt-auto"
              //Condition add and remove item from cart
              onClick={() => {
                cart.some((item) => item.id === product.id)
                  ? removeFromCart(product)
                  : addToCart(product);
              }}
            >
              {/* Condition to display "Add to Cart" and "Remove from Cart Button" */}
              {cart.some((item) => item.id === product.id)
                ? "Remove from Cart"
                : "Add to Cart"}
              {/* {product.button} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
