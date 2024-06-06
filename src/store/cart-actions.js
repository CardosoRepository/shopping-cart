import { replaceCart } from "./cart-slice";
import { handleShowNotification } from "./ui-slice";

export function fetchCartData() {
    return async (dispatch) => {
        async function fetchData() {
            const response = await fetch(
                "https://redux-cart-918a9-default-rtdb.firebaseio.com/cart.json"
            );

            if (!response.ok) {
                throw new Error("Could not fetch card data!");
            }

            const resData = await response.json();
            return resData;
        }

        try {
            const cartData = await fetchData();
            dispatch(replaceCart({cartItems: cartData.cartItems || []}));
        } catch (error) {
            dispatch(
                handleShowNotification({
                    status: "error",
                    title: "Error!",
                    message: "Fetching cart data failed!",
                })
            );
        }
    };
}

export function sendCartData(cart) {
    return async (dispatch) => {
        dispatch(
            handleShowNotification({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data!",
            })
        );

        async function sendRequest() {
            const response = await fetch(
                "https://redux-cart-918a9-default-rtdb.firebaseio.com/cart.json",
                { method: "PUT", body: JSON.stringify({cartItems: cart.cartItems}) }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
        }

        try {
            await sendRequest();

            dispatch(
                handleShowNotification({
                    status: "success",
                    title: "Success!",
                    message: "Sent cart data successfully!",
                })
            );
        } catch (error) {
            dispatch(
                handleShowNotification({
                    status: "error",
                    title: "Error!",
                    message: "Sending cart data failed!",
                })
            );
        }
    };
}
