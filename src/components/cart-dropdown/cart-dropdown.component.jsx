import { useContext } from "react";
import Button from "../button/button.component";
import CartItems from "../cart-item/cart-item.component";
import "./cart-dropdown.scss";
import { CartContex } from "../../contex/cart.contex";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContex);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItems cartItemArr={item} key={item.id} />;
        })}
      </div>
      <Button>checkout</Button>
    </div>
  );
};

export default CartDropdown;
