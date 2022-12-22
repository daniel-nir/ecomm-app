import { Fragment, useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as EcommLogo } from "../../assets/ecomm-log2.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  UserName,
  LogoContainer,
} from "./navigation.styles";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <EcommLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          {/* currentUser && (
            <UserName>{currentUser.displayName.toUpperCase()}</UserName>
          ) */}

          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon onClick={null} className="nav-link" />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
