//The attribute passed to the component CardItem in the parent component App is received here
//and the name and price of the products are displayed in the Cart popup

function CartItem({ item }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{item.name}</div>
          {item.discountedPrice}
        </div>
      </li>
    );
  }
  
  export default CartItem;
  