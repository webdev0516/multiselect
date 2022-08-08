// External Dependencies
import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
  padding: 8px 12px;

  border-radius: 5px;
  height: 36px;

  background: ${(props) => props.color};
  box-shadow: 0 0 0 ${(props) => props.focus ? `3px ${props.color}60`: '0'};
  &:hover {
    box-shadow: 0 0 0 3px${(props) => props.focus ? `${props.color}60`: `${props.color}20`};
    cursor: pointer;
  }
`;

export const Label = styled.span`
  color: white;
  font-family: "Inter";
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.009em;
`;

export const HighLight = styled(Label)`
  color: white;
  strong {
    background-color: rgb(255, 255, 0);
    color: black;
  }
`;
