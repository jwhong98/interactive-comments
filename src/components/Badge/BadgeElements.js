import styled from "styled-components";

export const BadgeContainer = styled.span`
  padding: 0.5rem 0.75rem;
  background-color: hsl(228, 33%, 97%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
`;

export const Icon = styled.img`
  :hover {
    filter: invert(32%) sepia(67%) saturate(734%) hue-rotate(203deg)
      brightness(93%) contrast(88%);
  }
`;

export const Score = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 500;
`;
