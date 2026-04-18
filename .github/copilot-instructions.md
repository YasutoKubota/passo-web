## Design Context

### Project Overview

- **Product**: パッソアニメーションスタジオ LP / 株式会社Passo a Passo コーポレートサイト
- **Domain**: passo-ww.com (愛知県岡崎市・豊田市)
- **Service**: 就労継続支援B型 — 企業から映像・イラスト制作を受託するクリエイターチーム
- **Primary goal**: Instagram/Google Display広告からの流入で「ここに通いたい」と思わせ、LINE問い合わせに誘導
- **Tech**: Next.js 16, React 19, App Router, plain CSS (no Tailwind), Japanese

---

### Users

**Primary reader**: 20代女性、精神疾患（うつ・双極性障害・統合失調症等）または発達障害（ASD・ADHD等）、現在無職・引きこもり気味のクリエイター志望

**Profile**:
- 生活基盤は親が支えており、経済的切迫感がない
- 趣味・副業で動画編集を続けてきたが、クラウドソーシングで壁にぶつかっている
- 「ちゃんとした仕事がしたい」という自己認識とプライドがある
- でじるみ・にじげん等（同業他社）には「自分には合わない」と感じている
- スマートフォンがメイン。Instagram日常利用。自宅閲覧。

**Emotional goal after LP**: 「ここに通いたい」→LINEで問い合わせに進む状態になること

**Secondary reader**: 20〜30代男性、同様の背景・価値観

---

### Brand Personality

**3 words**: 誠実 · おしゃれ · 仲間（Sincere · Aspirationally Stylish · Welcoming as peers）

- 「ここに所属すること自体が自尊心を満たす」感覚
- スタバでMacBookを開くノマドスタイルへの憧れに近いおしゃれさ
- 「来るだけでワンランク上の自分になれる」感覚
- 上から目線・「支援してあげます」感ゼロ

**Anti-references**: でじるみ・にじげん（居場所型・スクール型）、ギラギラした福祉サイト、量産型コーポレート

---

### Established Brand Identity (変更は要相談)

**Palette**: Background `#F5F0E8` (cream) · Accent `#B87868` (terracotta) · Text `#3A3330` · CTA `#06C755` (LINE green)

**Fonts**: Noto Sans JP (body) + Outfit (English accent)

**Theme**: Light mode only

**Design system**: "Japandi Premium" — 間（Ma）· Bold typography · Kinetic scroll reveals · Editorial layouts

---

### Design Principles

1. **仕事感を前面に** — 居場所・スクール・支援施設に見えてはならない。企業案件・実務・ポートフォリオを軸に語る。
2. **自尊心を守る美しさ** — デザインが整っていること自体が読者の自己肯定につながる。圧迫ゼロ。
3. **情報量の制御** — 一画面に詰めすぎない。余白（間）を守る。認知負荷を最小化する。
4. **対等な語りかけ** — 禁止ワードリストを厳守。上から目線・プレッシャー・自己否定を生む言葉は排除。
5. **差別化の精度** — ターゲット外が「自分には合わない」と離脱するのは正解。

---

### UX Writing Rules

**禁止ワード（厳守）**:
- 自己否定系: プロ・本物の・本格的・本気で・武器・選ばれるクリエイター・実務レベル（広告内）
- プレッシャー系: 消耗・戦う・勝つ・挑戦・もしそうなら・対象です
- 福祉施設系: 居場所・自分らしく・自分のペースで・ゆっくり・無理なく・支援（単独）・お気軽に
- スクール系: スキルを磨く・学べます・身につきます・体験できます
- 好き系: 「好きを仕事に」系全般
- 難読語: 携わる → 「関わる」に変更

**推奨表現**: 企業案件に関わる / 映像制作チーム / ポートフォリオが積み上がる / 実績が残る / チームで制作する

---

### Accessibility Requirements

- WCAG AA以上のコントラスト
- 本文15px以上（モバイル）
- `prefers-reduced-motion` 必須対応
- 情報過多にしない
- 「頑張れ」系の圧迫感ゼロ（コピーだけでなくビジュアルトーンも含む）
- 複雑な漢字を避け、やさしい日本語を心がける

---

*Full design context: see `.impeccable.md` in project root*
