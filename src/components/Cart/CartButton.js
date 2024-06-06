import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { handleShowCart } from "../../store/ui-slice";

const CartButton = (props) => {
    const cart = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <button className={classes.button} onClick={() => dispatch(handleShowCart())}>
            <span>Cart</span>
            <span className={classes.badge}>{cart.length}</span>
        </button>
    );
};

export default CartButton;
