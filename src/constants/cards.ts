import lynxLogo from "../assets/lynx-logo.png";
import reactLogo from "../assets/react-logo.png";
import type { Card } from "../types/index.js";

export const GALLERY_CARDS: Card[] = [
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
];
