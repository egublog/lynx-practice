import type { Card as CardType } from "../../types/index.js";
import "./Card.css";

interface CardProps {
  card: CardType;
}

export function Card({ card }: CardProps) {
  return (
    <view className="card">
      <view className="card-content">
        <image src={card.image} className="card-image" />
        <view className="card-text">
          <text className="card-title">{card.title}</text>
          <text className="card-description">{card.description}</text>
        </view>
      </view>
    </view>
  );
}
