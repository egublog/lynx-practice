import { useEffect } from "@lynx-js/react";
import "./App.css";
import { Card } from "./components/Card/Card.js";
import { GALLERY_CARDS } from "./constants/cards.js";

export function App() {
  useEffect(() => {
    console.info("ギャラリーを初期化しました");
  }, []);

  return (
    <view className="container">
      <view className="Background" />
      <view className="header">
        <text className="page-title">Lynx.js ギャラリー</text>
        <text className="page-subtitle">インタラクティブなカード表示</text>
      </view>

      <scroll-view scroll-orientation="horizontal" className="gallery">
        <view className="cards-grid">
          {GALLERY_CARDS.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </view>
      </scroll-view>

      <scroll-view scroll-orientation="vertical" className="gallery">
        <view className="cards-grid">
          {GALLERY_CARDS.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </view>
      </scroll-view>
    </view>
  );
}
