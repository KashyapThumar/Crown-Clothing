import { useContext } from "react";
import "./checkout-item.styles.scss";
import { CartContex } from "../../contex/cart.contex";

const CheckOutItems = ({ productsItems }) => {
  const { clearItemFormCart, addItemToCart, removeItemFormCart } =
    useContext(CartContex);

  const clearItemHendler = () => clearItemFormCart(productsItems);
  const addItemHandler = () => addItemToCart(productsItems);
  const removeItemHandler = () => removeItemFormCart(productsItems);

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
