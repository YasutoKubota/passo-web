import Link from "next/link";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "40px 24px" }}>
      <img src="/images/logo-passo.png" alt="Passo a Passo" style={{ width: 200, marginBottom: 32 }} />
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>パッソ制作スタジオ</h1>
      <p style={{ color: "var(--text-secondary)", marginBottom: 48, maxWidth: 480 }}>
        働くことに障がいのあるクリエイターのための制作スタジオ（就労継続支援B型）
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, width: "100%", maxWidth: 600 }}>
        <Link href="/movie" className="glass" style={{ padding: "32px 20px", borderRadius: "var(--r-md)", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🎬</div>
          <div style={{ fontWeight: 700 }}>動画制作</div>
          <div style={{ fontSize: 12, color: "var(--text-light)", marginTop: 4 }}>Movie</div>
        </Link>
        <div className="glass" style={{ padding: "32px 20px", borderRadius: "var(--r-md)", textAlign: "center", opacity: 0.5 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🎨</div>
          <div style={{ fontWeight: 700 }}>イラスト制作</div>
          <div style={{ fontSize: 12, color: "var(--text-light)", marginTop: 4 }}>Coming Soon</div>
        </div>
        <div className="glass" style={{ padding: "32px 20px", borderRadius: "var(--r-md)", textAlign: "center", opacity: 0.5 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>✂️</div>
          <div style={{ fontWeight: 700 }}>創造空間</div>
          <div style={{ fontSize: 12, color: "var(--text-light)", marginTop: 4 }}>Coming Soon</div>
        </div>
        <div className="glass" style={{ padding: "32px 20px", borderRadius: "var(--r-md)", textAlign: "center", opacity: 0.5 }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🎓</div>
          <div style={{ fontWeight: 700 }}>就職ゼミナール</div>
          <div style={{ fontSize: 12, color: "var(--text-light)", marginTop: 4 }}>Coming Soon</div>
        </div>
      </div>
    </main>
  );
}
