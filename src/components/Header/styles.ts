import styled from "styled-components";
import image from "../../assets/curvedwallpaper.jpg";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 90vh;
  background: url(${image}) fixed no-repeat;
  background-size: contain;
  @media (max-width: 700px) {
    background-size: 800px;
  }
`;
export const Title = styled.h1`
  padding-left: 25px;
  text-align: center;
  color: black;
  font-size: 2.5rem;
  width: 120px;
  height: 120px;
  font-weight: 500;
`;
