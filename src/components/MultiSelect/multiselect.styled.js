// External Dependencies
import styled from "styled-components";

const backColor = "#E3E5EA";

export const Wrapper = styled.div`
  width: fit-content;
`;

export const Container = styled.div`
  height: 56px;
  background-color: ${backColor};
  display: flex;
  border-radius: 8px;
  width: 600px;
  margin-bottom: 10px;
`;

export const SearchIconContainer = styled.div`
  margin-left: 16px;
  align-self: center;
  flex-basis: 24px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const InputContainer = styled.div`
  height: 80%;
  align-self: center;
  margin-left: 8px;
  margin-right: 5px;
  flex: 1;
`;

export const TextInput = styled.input`
  height: 100%;
  width: 100%;
  background-color: ${backColor};
  border: none;
  font-size: 16px;
  font-style: normal;
  letter-spacing: -0.009em;
  font-family: "Inter";
  font-weight: 500;
  padding: 0px;
  color: #595d66;
  outline: none;
`;

export const CloseIconContainer = styled.a`
  margin-right: 16px;
  align-self: center;
  flex-basis: 24px;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuGroup = styled.div`
  display: flex;
`;