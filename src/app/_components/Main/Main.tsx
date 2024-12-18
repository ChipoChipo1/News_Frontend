"use client";
import React, { useState, useEffect } from "react";
import { MainContainer } from "../Common/Common.style";
import * as S from "./Main.styles";
import { newsData, rankingData } from "./newsDataTest";

import Keyword from "./_components/Keyword";
import NewsCard from "./_components/NewsCard";
import Search from "./_components/Search";
import Ranking from "./_components/Ranking";

import { useKeywords } from "@/hooks/useKeywords";
import { useScroll } from "@/hooks/useScroll";

export default function Main() {
  const [newsCard, setNewsCard] = useState<any[]>([]);
  const [loadedItems, setLoadedItems] = useState<number>(15); // 처음 로드할 아이템 수

  const { keywords, search, handleSubmit, handleSearch, handleDelete } =
    useKeywords(["Technology", "Politics", "Sports"]);

  const { loadMoreRef } = useScroll(() => {
    setLoadedItems((prev) => prev + 6); // 6개씩 더 로드
  });

  useEffect(() => {
    // 더미 데이터에서 처음 12개만 로드
    setNewsCard(
      newsData.slice(0, loadedItems).filter((item) => item !== undefined)
    );
  }, [loadedItems]);

  const topRateNews = rankingData
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  return (
    <MainContainer>
      <S.LeftContainer>
        {/* Keyword */}
        <Keyword keywords={keywords} handleDelete={handleDelete} />

        <S.NewsContainer>
          {/* News Card */}
          <NewsCard newsCard={newsCard} />
        </S.NewsContainer>
      </S.LeftContainer>

      <div style={{ width: "24%" }}>
        <S.RightContainer>
          {/* Search */}
          <Search
            handleSubmit={handleSubmit}
            search={search}
            handleSearch={handleSearch}
          />

          {/* Ranking */}
          <Ranking newsRanking={topRateNews} />
        </S.RightContainer>
      </div>

      {/* 이 div는 스크롤 감지용 ref를 연결 */}
      <div ref={loadMoreRef}></div>
    </MainContainer>
  );
}
