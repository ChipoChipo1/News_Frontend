import styled from "styled-components";
import { MainContainer } from "../Common/Common.style";

export const NavContainer = styled(MainContainer)`
  height: 60px;
  align-items: center;
  border-bottom: 1px solid rgb(201, 201, 201);
  padding: 0 5px;
`;

export const MyLink = styled.a`
  text-decoration: none;
  color: var(--blackColor);
  outline: none;
  font-size: 20px;
`;

export const LoginBtn = styled.button`
  text-decoration: none;
  color: var(--blackColor);
  outline: none;
  font-size: 20px;
  cursor: pointer;
`;
