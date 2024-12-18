export type NewsCard = {
  id: number;
  source: string;
  title: string;
  summary: string;
  keywords: string[];
};

export type Ranking = {
  rankinData: {
    id: number;
    title: string;
    views: number;
  }[];
};
