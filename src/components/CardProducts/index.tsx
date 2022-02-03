import { Card, Text, Button, TextContainer, PriceText, Title } from "./styles";

interface ICardProducts {
  textPlan: string;
  price: string;
}

const CardProcuts = ({ textPlan, price }: ICardProducts) => {
  return (
    <Card>
      <Title>Telzir</Title>
      <TextContainer>
        <Text>{textPlan}</Text>
        <PriceText>{price}</PriceText>
      </TextContainer>
      <Button>Buy now</Button>
    </Card>
  );
};
export default CardProcuts;
