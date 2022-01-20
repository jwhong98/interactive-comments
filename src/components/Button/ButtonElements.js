import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: uppercase;
  border: none;
  background-color: hsl(238, 40%, 52%);
  color: #fff;
  font-family: inherit;
  font-weight: 500;
  font-size: 1.25rem;
  padding: 0.75rem 2rem;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: hsl(239, 57%, 85%);
  }
`;
