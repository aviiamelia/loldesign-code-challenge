import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 350px;
  width: 200px;
  font-size: 1.5rem;
  @media (max-width: 700px) {
    font-size: 1.8rem;
    height: 450px;
    width: 350px;
  }
  background-color: var(--red);
  border-radius: 8px;
  @media (min-width: 800px) {
    margin-right: 10px;
  }
`;

export const Text = styled.p`
  color: white;
`;
export const Title = styled.h2`
  color: white;
`;
export const Button = styled.button`
  cursor: pointer;
  background-color: white;
  color: var(--red);
  border-radius: 20px;
  width: 65%;
  height: 50px;

  font-family: "Roboto Mono", monospace;
  font-weight: 800;
  font-size: 1.5rem;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const PriceText = styled.div`
  color: white;
  font-size: 2rem;
`;
