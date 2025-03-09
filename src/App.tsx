import { useEffect, useState } from "@lynx-js/react";
import "./App.css";
import lynxLogo from "./assets/lynx-logo.png";
import reactLogo from "./assets/react-logo.png";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function App() {
  const [cards] = useState<Card[]>([
    {
      id: 1,
      title: "Lynx.js の基本",
      description: "モダンなUIフレームワーク",
      image: lynxLogo,
    },
    {
      id: 2,
      title: "レイアウトの魅力",
      description: "柔軟なグリッドシステム",
      image: reactLogo,
    },
    {
      id: 3,
      title: "スタイリング",
      description: "直感的なデザイン構築",
      image: lynxLogo,
    },
    {
      id: 4,
      title: "スクロール体験",
      description: "スムーズなインタラクション",
      image: reactLogo,
    },
  ]);

  useEffect(() => {
    console.info("ギャラリーを初期化しました");
  }, []);

  return (
    <view className="container">
      <view className="Background" />
      <view className="header">
        <text className="Title">Lynx.js ギャラリー</text>
        <text className="Subtitle">インタラクティブなカード表示</text>
      </view>

      <scroll-view scroll-orientation="vertical" className="gallery">
        <view className="cards-grid">
          {cards.map((card) => (
            <view key={card.id} className="card">
              <view className="card-content">
                <image src={card.image} className="card-image" />
                <view className="card-text">
                  <text className="card-title">{card.title}</text>
                  <text className="card-description">{card.description}</text>
                </view>
              </view>
            </view>
          ))}
        </view>
      </scroll-view>
    </view>
  );
}
