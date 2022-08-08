// Internal Dependencies
import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${(props) => props.color};
  border-radius: 5px;
  height: 36px;
  width: initial;
  color: white;
  border: none;
  margin: 10px 0px 10px 10px;
  box-sizing: border-box;
  text-align: left;
  display: flex;
  align-items: center;

  &:hover {
    box-shadow: 0 0 0 3px ${(props) => props.color}20;
  }
  outline: none;
  box-shadow: 0 0 0 3px${(props) => props.focus ? `${props.color}60`: '${props.color}20'};
`;

export const Label = styled.span`
  margin: 8px 0px 8px 12px;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
`;

export const CloseButton = styled.a`
  margin-left: 8px;
  margin-right: 9px;
  display: flex;
  align-items: center;
`;

export const CloseIcon = styled.img`
  width: 18px;
  height: 18px;
  &:hover {
    cursor: pointer;
  }
`;