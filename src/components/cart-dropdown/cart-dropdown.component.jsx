import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {
  CartDropDownContainer,
  CartItems,
  CartMessage,
  TotalContainer,
  EmptyMessage,
  CloseButton,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, cartTotal, isCartOpen, setIsCartOpen } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOutHandler = () => {
    navigate("/checkout");
  };

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartDropDownContainer>
      <CloseButton onClick={toggleIsCartOpen}>&#10005;</CloseButton>
      <CartItems>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </CartItems>
      {cartItems.length ? (
        <TotalContainer>
          <CartMessage>Total:</CartMessage>
          <span> ₪{cartTotal}</span>
        </TotalContainer>
      ) : (
        <EmptyMessage>Your cart is empty</EmptyMessage>
      )}
      <Button onClick={goToCheckOutHandler}>go to checkout</Button>
    </CartDropDownContainer>
  );
};
export default CartDropdown;
