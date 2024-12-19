import React from "react";
import * as S from "../Main.styles";

import ScrapIcon from "../../../../../public/scrap-icon.png";
import ShareIcon from "../../../../../public/share-icon.png";
import Image from "next/image";
import { NewsCard as NewsCardType } from "@/types/mainTyeps";

type NewsCardProps = {
  newsCard: NewsCardType[];
};

export default function NewsCard({ newsCard }: NewsCardProps) {
  return (
    <>
      {newsCard.map((newsCard) => (
        <S.NewsCard key={newsCard.id}>
          <S.NewsCardTop>
            <S.TopLeft>
              <S.NewsSource>{newsCard.source}</S.NewsSource>
              <S.NewsTitle>{newsCard.title}</S.NewsTitle>
            </S.TopLeft>
            <S.TopRight>
              <S.TopBtn>
                <Image src={ScrapIcon} alt="scrap icon" />
              </S.TopBtn>
              <S.TopBtn>
                <Image src={ShareIcon} alt="share icon" />
              </S.TopBtn>
            </S.TopRight>
          </S.NewsCardTop>
          <S.NewsCardSummary>{newsCard.summary}</S.NewsCardSummary>
          <S.NewsCardBottom>
            {newsCard.keywords.map((keyword) => (
              <S.NewsCardKeyword key={keyword}>{keyword}</S.NewsCardKeyword>
            ))}
          </S.NewsCardBottom>
        </S.NewsCard>
      ))}
    </>
  );
}
