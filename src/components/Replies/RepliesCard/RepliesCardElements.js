import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background-color: #fff;
  /* margin-bottom: 1rem; */
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

export const Icon = styled.img``;

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
