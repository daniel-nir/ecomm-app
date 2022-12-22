import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  filter: brightness(90%);
`;

export const Body = styled.div`
  height: 120px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
export const Title = styled.h2`
  margin: 0 6px 0;
  font-size: 42px;
  color: #ffffff;
  text-transform: uppercase;
`;
export const Paragraph = styled.p`
  font-weight: lighter;
  font-size: 20px;
  color: #ffffff;
`;
export const DirectoryItemContainer = styled(Link)`
  min-width: 30%;
  height: 340px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImg} {
      transform: scale(1.2);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }
`;
