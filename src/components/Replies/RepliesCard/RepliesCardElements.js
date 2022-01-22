import styled from "styled-components";
import { device } from "../../../deviceSize";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  /* margin-bottom: 1rem; */
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  @media ${device.desktop} {
    display: grid;
    grid-template-columns: 3rem auto 6.5rem;
    gap: 1rem;
    /* grid-template-rows: repeat(1fr, auto); */
  }
`;

export const Content = styled.p`
  color: hsl(211, 10%, 45%);
  margin-bottom: 1rem;
  line-height: 1.5;

  @media ${device.desktop} {
    grid-column: 2/4;
    grid-row: 2/4;
    /* margin-bottom: 0;
    max-width: 700px; */
  }
`;

export const Span = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 700;
`;

export const UserSpecific = styled.div`
  position: relative;
  align-self: flex-end;
  bottom: 1.75rem;
  display: flex;
  align-items: center;

  @media ${device.desktop} {
    position: unset;
    align-self: unset;
    bottom: 0;
    grid-column: 3/4;
    grid-row: 1;
  }
`;

export const Delete = styled.span`
  color: hsl(358, 79%, 66%);
  font-weight: 700;
  margin-right: 1rem;
  cursor: pointer;

  :hover {
    color: hsl(357, 100%, 86%);
  }
`;

export const Edit = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 700;
  cursor: pointer;

  :hover {
    color: hsl(239, 57%, 85%);
  }
`;

export const Icon = styled.img`
  margin-right: 0.5rem;
`;

export const Reply = styled.span`
  position: relative;
  align-self: flex-end;
  bottom: 1.75rem;
  display: flex;
  align-items: center;
  color: hsl(238, 40%, 52%);
  font-weight: 700;
  cursor: pointer;

  :hover {
    color: hsl(239, 57%, 85%);
  }

  @media ${device.desktop} {
    align-self: unset;
    margin-left: auto;
    bottom: 0;
    grid-column: 3;
    grid-row: 1;
  }
`;
