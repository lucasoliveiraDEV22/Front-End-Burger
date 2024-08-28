import styled from "styled-components";
import breakpoints from '../../styles/breakpoints'

export const ContainerButton = styled.button`
  width: 182.81px;
  height: 36.129px;
  background-color: #9758a6;
  border-radius: 20px;
  cursor: pointer;
  color: #eee;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media ${breakpoints.bg}{
    margin-top: -1px;
    margin-bottom: 8px;
  }

  @media ${breakpoints.md}{
    width: 165.81px;
  }
`;

