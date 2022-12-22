import {
  DirectoryItemContainer,
  BackgroundImg,
  Body,
  Title,
  Paragraph,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImg imageUrl={imageUrl} />
      <Body>
        <Title>{title}</Title>
        <Paragraph>Shop Now</Paragraph>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
