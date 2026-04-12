import type { Metadata } from "next";
import MovieLP from "./MovieLP";

export const metadata: Metadata = {
  title: "あなたの「好き」が、仕事になる制作スタジオ（就労継続支援B型）",
  description:
    "パッソは、働くことに障がいのあるクリエイターのための制作スタジオ（就労継続支援B型）。10年の実績と多彩な動画の企業案件であなたの「好き」を仕事にします。",
};

export default function MoviePage() {
  return <MovieLP />;
}
