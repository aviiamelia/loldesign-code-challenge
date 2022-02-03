import styled from "styled-components";
import image from "../../assets/curvedwallpaper.png";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: url(${image}) fixed no-repeat;
  background-size: contain;
`;
export const Title = styled.h1`
  padding-left: 15px;
  text-align: center;
  color: black;
  font-size: 2.5rem;
  width: 120px;
  height: 120px;
  font-weight: 500;
`;
export const SecondaryContainer = styled.div`
  background: var(--pinkGradient);
  min-height: 100vh;
`;

export const Text = styled.p`
  font-size: 1.8rem;
  color: black;
  @media (min-width: 1000px) {
    font-size: 2rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 50%;
  width: 100%;
  @media (min-width: 1000px) {
    padding-left: 200px;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 50%;
`;
export const Line = styled.hr`
  margin-top: 1px;
  background-color: var(--red);
  width: 100px;
  border: none;
  border-radius: 5px;
  height: 5px;
  @media (min-width: 1000px) {
    width: 150px;
  }
`;
