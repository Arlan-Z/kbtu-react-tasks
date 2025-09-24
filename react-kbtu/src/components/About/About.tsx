import { useState } from "react";
import "./About.css";
import type { CardProps } from './../../types/card';
import Card from "./../partials/Card/Card";

const cards: CardProps[] = [
  {
    title: "My Name",
    fields: [
      { title: "Fullname", value: "Arlan Zhumagulov" }
    ]
  },
  {
    title: "My Hobby",
    fields: [
      { title: "Hobby", value: "Coding" }
    ]
  },
  {
    title: "My City",
    fields: [
      { title: "City", value: "Almaty" }
    ]
  }
];

export default function About() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i - 1 + cards.length) % cards.length);
  };

  const next = () => {
    setIndex((i) => (i + 1) % cards.length);
  };

  return (
    <div className="about-wrapper">
      <button onClick={prev}>Prev</button>
      <div className="slider-card">
        <Card props = {cards[index]} />
      </div>
      <button onClick={next}>Next</button>
    </div>
  );
}
