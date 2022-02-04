import Container from "../components/Container";
import Header from "../components/Header";
import Products from "../components/Products";
import Simulating from "../components/Simulating";
import GlobalStyle from "../styles/global";

export const MainPage = () => {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Products />
      <Simulating />
    </Container>
  );
};
