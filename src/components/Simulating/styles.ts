import styled from "styled-components";
interface LabelProps {
  align: boolean;
}
interface LineProps {
  posi?: any;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  justify-content: space-between;
  height: 650px;
  width: 500px;
  position: relative;
  margin: 0 auto;
  padding: 15px 15px;
  background-color: var(--whitePink);
`;
export const FlexContainer = styled.div<LabelProps>`
  display: flex;
  justify-content: ${(props) => (props.align ? "center" : "space-evenly")};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const Title = styled.h2`
  color: var(--red);
  margin-bottom: 3px;
`;

export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--lighterPink);
  border-radius: 8px;
  padding-left: 5px;
`;

export const Label = styled.label`
  color: var(--red);
  font-size: 1.5rem;
  width: 190px;
`;

export const Button = styled.button`
  background-color: var(--red);
  color: white;
  height: 50px;
  width: 120px;
  font-size: 1.5rem;
  border-radius: 18px;
  margin-bottom: 5px;
  margin: 0 auto;
  :hover {
    background-color: var(--lighterPink);
    color: var(--red);
  }
`;
export const Message = styled.p`
  color: var(--red);
  font-size: 1.4rem;
  position: absolute;
  top: 17%;
  width: 100%;
  text-align: center;
`;

export const Line = styled.hr<LineProps>`
  background-color: var(--red);
  height: 4px;
  margin-top: 2px;
  position: absolute;
  top: 16.5%;
  left: ${(props) => (props.posi === 30 ? "10%" : props.posi === 60 ? "39%" : "69%")};
  //10 39 69
  width: 110px;
`;
