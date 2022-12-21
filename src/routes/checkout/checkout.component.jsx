import { Fragment, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { useNavigate } from "react-router-dom";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, cartTotal /* setIsCartOpen */ } = useContext(CartContext);

  const navigate = useNavigate();
  const goToShopHandler = () => navigate("/shop");

  /*  useEffect(() => {
    setIsCartOpen(false);
  }, []); */

  return (
    <div className="checkout-container">
      {cartItems.length ? (
        <Fragment>
          <div className="checkout-header">
            <div className="header-block">
              <span>Product</span>
            </div>
            <div className="header-block">
              <span>Description</span>
            </div>
            <div className="header-block">
              <span>quantity</span>
            </div>
            <div className="header-block">
              <span>Price</span>
            </div>
            <div className="header-block">
              <span>Remove</span>
            </div>
          </div>
          {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
          })}
          <span className="total">Total: {cartTotal} ILS</span>
        </Fragment>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <span>
            Press
            <span className="nav" onClick={goToShopHandler}>
              here
            </span>
            to continue shopping
          </span>
        </div>
      )}
    </div>
  );
};
export default Checkout;
