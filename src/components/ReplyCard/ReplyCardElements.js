import styled from "styled-components";

export const ReplyContainer = styled.div`
  width: 90%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
`;

export const Textbox = styled.textarea`
  width: 100%;
  border: 1px solid hsl(223, 19%, 93%);
  font-family: inherit;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  resize: none;
  color: hsl(212, 24%, 26%);
  font-size: 1rem;

  ::placeholder {
    color: hsl(211, 10%, 45%);
    font-size: 1rem;
  }

  :active,
  :focus {
    outline: 1px solid hsl(238, 40%, 52%);
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserImg = styled.img`
  width: 2rem;
`;
