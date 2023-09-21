import Button from "../button/button.component";
import "./cart-dropdown.scss";

const CartDropdown = () => {
    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                <Button>checkout</Button>
            </div>
        </div>
    )
};

export default CartDropdown;
