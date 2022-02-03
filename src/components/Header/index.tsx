import {
  HeaderContainer,
  Title,
  Text,
  TextContainer,
  TitleContainer,
  Line,
  SecondaryContainer,
} from "./styles";

const Header = () => {
  return (
    <SecondaryContainer>
      <HeaderContainer>
        <TitleContainer>
          <Title>Telzir telecom</Title>
        </TitleContainer>
        <TextContainer>
          <Text>Our products</Text>
          <Line />
        </TextContainer>
      </HeaderContainer>
    </SecondaryContainer>
  );
};

export default Header;
