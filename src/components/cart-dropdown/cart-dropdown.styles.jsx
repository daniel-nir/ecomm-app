import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

export const CartDropDownContainer = styled.div`
  position: fixed;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px 20px 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
    font-size: 13px;
  }
`;

export const CloseButton = styled.div`
  text-align: right;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 100px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartMessage = styled.span`
  margin: 5px 0px;
`;
