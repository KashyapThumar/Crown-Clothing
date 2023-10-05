import "./checkout-item.styles.scss";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart-action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart-selector";

const CheckOutItems = ({ productsItems }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const clearItemHendler = () =>
    dispatch(clearItemFromCart(cartItems, productsItems));
  const addItemHandler = () =>
    dispatch(addItemToCart(cartItems, productsItems));
  const removeItemHandler = () =>
    dispatch(removeItemFromCart(cartItems, productsItems));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={productsItems.imageUrl} alt={`${productsItems.name}`} />
      </div>
      <span className="name">{productsItems.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{productsItems.quntity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{productsItems.price}</span>
      <div className="remove-button" onClick={clearItemHendler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutItems;
