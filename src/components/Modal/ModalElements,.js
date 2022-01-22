import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

export const Overlay = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

export const Confirmation = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  color: hsl(212, 24%, 26%);
`;

export const Message = styled.p`
  color: hsl(211, 10%, 45%);
`;

export const ButtonWrap = styled.div`
  align-self: center;
  margin-top: 1rem;
`;

export const Cancel = styled.button`
  margin-right: 1rem;
  padding: 1rem;
  border-radius: 5px;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  color: #fff;
  background-color: hsl(211, 10%, 45%);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

export const Delete = styled.button`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  font-family: inherit;
  text-transform: uppercase;
  color: #fff;
  background-color: hsl(358, 79%, 66%);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;
