import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "パッソ｜あなたの「好き」が、仕事になる制作スタジオ（就労継続支援B型）",
  description:
    "パッソは、働くことに障がいのあるクリエイターのための制作スタジオ（就労継続支援B型）。10年の実績と多彩な動画の企業案件であなたの「好き」を仕事にします。",
  metadataBase: new URL("https://passo-ww.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#F3EDE4" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/images/favicon-192.png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
