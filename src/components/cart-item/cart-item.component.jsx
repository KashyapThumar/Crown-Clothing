import "./cart-item.styles.scss";

const CartItems = ({ cartItemArr }) => {
  const { name, quntity, imageUrl, price } = cartItemArr;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quntity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItems;
