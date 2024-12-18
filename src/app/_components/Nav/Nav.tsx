"use client";
import React, { useState } from "react";
import * as S from "./Nav.style";
import LoginModal from "../LopginModal/LoginModal";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogin = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <S.NavContainer>
      <S.MyLink href="/">페이퍼픽</S.MyLink>
      <S.LoginBtn onClick={handleLogin}>Login</S.LoginBtn>
      {isModalOpen && <LoginModal handleLogin={handleLogin} />}
    </S.NavContainer>
  );
}
