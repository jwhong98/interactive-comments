import styled from "styled-components";
import { device } from "../../deviceSize";

export const BadgeContainer = styled.span`
  padding: 0.5rem 0.75rem;
  background-color: hsl(228, 33%, 97%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;

  @media ${device.desktop} {
    flex-direction: column;
    width: 2.5rem;
    height: 6rem;
    padding: 0.75rem 0.5rem;
    grid-column: 1;
    grid-row: 1/3;
  }
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
