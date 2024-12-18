import React from "react";
import * as S from "./LoginModal.style";
import Image from "next/image";
import KakaoIcon from "../../../../public/kakao-icon.png";
import GithubIcon from "../../../../public/github-icon.png";

interface ModalProps {
  handleLogin: () => void;
}
export default function LoginModal({ handleLogin }: ModalProps) {
  return (
    <S.LoginContainer>
      <S.LoginModal>
        <S.ClooseBtn onClick={handleLogin}>X</S.ClooseBtn>
        <S.LoginBtnBox>
          <S.KakaoBtn>
            <Image src={KakaoIcon} alt="kakao icon" />
            <S.BtnText>KaKao Login</S.BtnText>
          </S.KakaoBtn>
          <S.GithubBtn>
            <Image src={GithubIcon} alt="github icon" />
            <S.BtnText>Github Login</S.BtnText>
          </S.GithubBtn>
        </S.LoginBtnBox>
        <S.SignupBtnBox>
          <S.KakaoBtn>
            <Image src={KakaoIcon} alt="kakao icon" />
            <S.BtnText>KaKao Signup</S.BtnText>
          </S.KakaoBtn>
          <S.GithubBtn>
            <Image src={GithubIcon} alt="github icon" />
            <S.BtnText>Github Signup</S.BtnText>
          </S.GithubBtn>
        </S.SignupBtnBox>
      </S.LoginModal>
    </S.LoginContainer>
  );
}
