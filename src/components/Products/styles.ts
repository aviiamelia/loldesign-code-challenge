import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 30px;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;
