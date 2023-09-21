import { useContext } from "react";
import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContex } from "../../contex/cart.contex";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContex);
  const cartOpenToogle = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={cartOpenToogle}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
