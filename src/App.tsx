import Header from "./components/Header";
import GlobalStyle from "./styles/global";
import Container from "./components/Container";
import Products from "./components/Products";
import Simulating from "./components/Simulating";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Products />
      <Simulating />
    </Container>
  );
}

export default App;
