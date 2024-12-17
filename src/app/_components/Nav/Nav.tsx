"use client";
import React from "react";
import * as S from "./Nav.style";

export default function Nav() {
  return (
    <div>
      테스트를 해봅니다
      <div>
        <S.MyLink href="/">Home</S.MyLink>
        <S.MyLink href="/user">User</S.MyLink>
        <S.MyLink href="/user/friends">Friends</S.MyLink>
        <S.MyLink href="/user/scrapDelivery">ScrapDelivery</S.MyLink>
        <S.MyLink href="/createScrap">CreateScrap</S.MyLink>
      </div>
    </div>
  );
}
