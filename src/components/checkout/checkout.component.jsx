import "./checkout.styles.scss";
import CheckOutItems from "../checkout-items/checkout-items.component";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart-selector";

const CheckOut = () => {

  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Products</span>
        </div>
        <div className="header-block">
          <span>description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((productsItems) => {
        return (
          <CheckOutItems key={productsItems.id} productsItems={productsItems} />
        );
      })}
      <span className="total">Total: {cartTotal}</span>
    </div>
  );
};

export default CheckOut;
