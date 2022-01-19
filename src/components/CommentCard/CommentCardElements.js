import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  background-color: #fff;
  margin-bottom: 1rem;
  padding: 1rem;
  padding-bottom: 0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.p`
  color: hsl(211, 10%, 45%);
  margin-bottom: 1rem;
`;

export const Badge = styled.span`
  padding: 0.5rem 0.75rem;
  background-color: hsl(228, 33%, 97%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6rem;
`;

export const Icon = styled.img``;

export const Score = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 500;
`;

export const Reply = styled.span`
  position: relative;
  align-self: flex-end;
  bottom: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 4rem;
  color: hsl(238, 40%, 52%);
  font-weight: 700;
`;
