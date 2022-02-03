import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--red);
  color: white;
  height: 50px;
  width: 120px;
  font-size: 1.5rem;
  border-radius: 18px;
  :hover {
    border: 2px solid black;
  }
  :focus {
    border: 3px solid #43220f;
  }
`;
export const Line = styled.hr`
  background-color: var(--red);
  height: 4px;
  margin-top: 2px;
  width: 110px;
`;
export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
