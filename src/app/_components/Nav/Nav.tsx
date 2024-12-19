"use client";
import React, { useEffect, useState } from "react";
import * as S from "./Nav.style";
import LoginModal from "../LopginModal/LoginModal";
import { MainContainer } from "../Common/Common.style";

export default function Nav() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // header 기본 height 값
  const [headerH, setHeaderH] = useState<number>(60);
  // 스크롤 위치
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 스크롤 내리면 headrH 0으로 변경
      if (currentScrollY > scrollY) {
        setHeaderH(0);
        setScrollY(currentScrollY);
      } else if (currentScrollY < scrollY) {
        // 스크롤 올리면 headerH 60으로변경

        setHeaderH(60);
        console.log(currentScrollY, "scrollY", scrollY);
      }
      // 이전 스크롤 위치 업데이트
      setScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const handleLogin = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Login Modal 오픈하면 스크롤 X
  useEffect(() => {
    if (isModalOpen) {
      // 스크롤바가 사라지지 않도록 padding-right을 추가하여 레이아웃이 움직이지 않도록 방지
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`; // 스크롤바 크기만큼 오른쪽 여백 추가
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0"; // 여백 초기화
    }

    // 컴포넌트 언마운트 시 body 상태 초기화
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0"; // 여백 초기화
    };
  }, [isModalOpen]);
  return (
    <>
      <S.FixedCntainer headerH={headerH}>
        <S.NavContainer headerH={headerH}>
          <S.MyLink href="/">페이퍼픽</S.MyLink>
          <S.LoginBtn onClick={handleLogin}>Login</S.LoginBtn>
        </S.NavContainer>
      </S.FixedCntainer>
      {isModalOpen && <LoginModal handleLogin={handleLogin} />}
    </>
  );
}
