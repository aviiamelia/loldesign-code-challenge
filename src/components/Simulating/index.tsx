import {
  Container,
  ButtonContainer,
  ContainerSelect,
  TotalContainer,
  Label,
  FlexContainer,
  Title,
  Button,
  Message,
  Line,
} from "./styles";
import { useState } from "react";
import InputSelection from "../InputSelect";
import ButtonSelect from "../ButtonSelect";
import Input from "../Input";
import React from "react";
const ProductsList = [
  { textPlan: "30min", Price: 39.99, minutes: 30 },
  { textPlan: "60min", Price: 69.99, minutes: 60 },
  { textPlan: "120min", Price: 99.99, minutes: 120 },
];
const regions = [
  { origin: 11, destiny: 16, priceByMin: 1.9 },
  { origin: 11, destiny: 17, priceByMin: 1.7 },
  { origin: 11, destiny: 18, priceByMin: 0.9 },
  { origin: 16, destiny: 11, priceByMin: 2.9 },
  { origin: 16, destiny: 17, priceByMin: 2.9 },
  { origin: 16, destiny: 18, priceByMin: 2.9 },
  { origin: 17, destiny: 11, priceByMin: 2.7 },
  { origin: 17, destiny: 16, priceByMin: 2.7 },
  { origin: 17, destiny: 18, priceByMin: 2.7 },
  { origin: 18, destiny: 11, priceByMin: 1.9 },
  { origin: 18, destiny: 16, priceByMin: 1.9 },
  { origin: 18, destiny: 17, priceByMin: 1.9 },
];
const uniqueRegions = [...new Set(regions.map((item) => item.origin))];
const uniqueDestiny = [...new Set(regions.map((item) => item.destiny))];
const Simulating = () => {
  const [total, setTotal] = useState<number>();
  const [message, setMessage] = useState<string>("");
  const [totalDiscount, setTotalDiscount] = useState<number>();
  const [origindd, setOrigindd] = useState<string>("");
  const [destinydd, setDestinydd] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [plan, setPlan] = useState<number>(30);

  let calculatePrice = async (origin: number, destiny: number) => {
    if (origin === destiny) {
      setMessage("Origin and destiny must be different");
      return;
    }

    let regionCase = regions.find(
      (region) => region.origin === origin && region.destiny === destiny
    );
    if (parseInt(minutes) < plan) {
      setTotalDiscount(0);
    } else {
      let timeDif = parseInt(minutes) - plan;

      if (regionCase) {
        let a = timeDif * regionCase.priceByMin;
        let percent = (a * 10) / 100;
        setTotalDiscount(a + percent);
      }
    }
    if (regionCase) {
      let total = regionCase?.priceByMin * parseInt(minutes);

      setTotal(total);
      setMessage("");
    }
  };

  return (
    <Container>
      <ButtonContainer>
        <FlexContainer align={true}>
          <Title>Select your plan of choice</Title>
        </FlexContainer>
        <FlexContainer align={false}>
          {React.Children.toArray(
            ProductsList.map((product) => (
              <ButtonSelect setPlan={setPlan} plan={product.minutes} text={product.textPlan} />
            ))
          )}
          <Line posi={plan} />
        </FlexContainer>
        <Message>{message}</Message>
      </ButtonContainer>
      <ContainerSelect>
        <Label>Origin - (DDD)</Label>
        <InputSelection setState={setOrigindd} ORIGIN={true} regions={uniqueRegions} />
        <Label>Destiny - (DDD)</Label>
        <InputSelection setState={setDestinydd} ORIGIN={false} regions={uniqueDestiny} />
        <Label>Minutes spended</Label>
        <Input value={minutes} setMinutes={setMinutes} />
      </ContainerSelect>
      <Button
        disabled={!minutes}
        onClick={() => calculatePrice(parseInt(origindd), parseInt(destinydd))}
      >
        Calculate
      </Button>
      <TotalContainer>
        <Title>total with talk more plan: {totalDiscount && totalDiscount?.toFixed(2)}</Title>
        <Title>total without talk more: {total && total?.toFixed(2)}</Title>
      </TotalContainer>
    </Container>
  );
};
export default Simulating;
