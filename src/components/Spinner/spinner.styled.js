// External Dependencies
import styled from "styled-components";

export const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  z-index: 2;
  position: relative;
  width: 20px;
  height: 20px;

  & .path {
    stroke: #bdbdbd;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
