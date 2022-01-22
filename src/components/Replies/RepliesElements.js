import styled from "styled-components";
import { device } from "../../deviceSize";

export const RepliesContainer = styled.div`
  width: 100%;
  background-color: hsl(228, 33%, 97%);
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  border-left: 2px solid hsl(223, 19%, 93%);
  gap: 1rem;
  /* align-items: right; */

  @media ${device.desktop} {
    max-width: 650px;
    padding-left: 3rem;
    align-self: flex-end;
  }
`;
