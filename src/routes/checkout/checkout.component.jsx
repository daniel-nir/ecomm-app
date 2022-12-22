import { Fragment } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  CheckoutLink,
  CheckoutTotal,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, cartTotal /* setIsCartOpen */ } = useContext(CartContext);

  return (
    <CheckoutContainer>
      {cartItems.length ? (
        <Fragment>
          <CheckoutHeader>
            <HeaderBlock>
              <span>Product</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Description</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>quantity</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Price</span>
            </HeaderBlock>
            <HeaderBlock>
              <span>Remove</span>
            </HeaderBlock>
          </CheckoutHeader>
          {cartItems.map((cartItem) => {
            return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
          })}
          <CheckoutTotal>Total: ₪ {cartTotal}</CheckoutTotal>
        </Fragment>
      ) : (
        <div>
          <h1>Your cart is empty</h1>
          <span>
            Press <CheckoutLink to="/shop">here </CheckoutLink>
            to continue shopping
          </span>
        </div>
      )}
    </CheckoutContainer>
  );
};
export default Checkout;
