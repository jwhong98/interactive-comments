import styled from "styled-components";

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ProfileImg = styled.img`
  width: 2rem;
  margin-right: 1rem;
`;

export const Username = styled.span`
  font-weight: 700;

  color: hsl(212, 24%, 26%);
`;

export const Tag = styled.span`
  margin-left: 0.5rem;
  padding: 0.15rem 0.35rem;
  font-size: 0.8rem;
  display: flex;
  color: #fff;
  background-color: hsl(238, 40%, 52%);
  line-height: 1rem;
`;

export const PostDuration = styled.span`
  color: hsl(211, 10%, 45%);
  margin-left: 1rem;
`;
