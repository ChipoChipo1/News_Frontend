import styled from "styled-components";
import { MainContainer } from "../Common/Common.style";

export const FixedCntainer = styled.div<{ headerH: number }>`
  position: fixed;
  background-color: var(--whiteColor);
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid rgb(201, 201, 201);
  transition: all 0.3s ease-in-out;
  height: ${(props) => `${props.headerH}px`};
  opacity: ${(props) => (props.headerH === 0 ? 0 : 1)};
  visibility: ${(props) => (props.headerH === 0 ? "hidden" : "visible")};
  display: flex;
`;
export const NavContainer = styled(MainContainer)<{ headerH: number }>`
  align-items: center;
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
