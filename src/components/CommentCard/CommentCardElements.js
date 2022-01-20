import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
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

export const UserSpecific = styled.div`
  position: relative;
  align-self: flex-end;
  bottom: 1.75rem;
  display: flex;
  align-items: center;
`;

export const Delete = styled.span`
  color: hsl(358, 79%, 66%);
  font-weight: 700;
  margin-right: 1rem;
  cursor: pointer;
`;

export const Edit = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: 700;
  cursor: pointer;
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
`;
