import Button from "../button/button.component";
import CartItems from "../cart-item/cart-item.component";
import "./cart-dropdown.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";


const CartDropdown = () => {
  const cartItems  = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container" >
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItems cartItemArr={item} key={item.id} />;
        })}
      </div>
      <Button onClick={goToCheckOutHandler}>checkout</Button>
    </div>
  );
};

export default CartDropdown;
