import { useState } from "react";
import "./About.css";
import type { CardProps } from './../../types/card';
import Card from "./../partials/Card/Card";
import ArrowIcon from "../ArrowIcon";

const cards: CardProps[] = [
  {
    title: "John Doe",
    fields: [
      { title: "Position", value: "Junior Java Developer" },
      { title: "Work Experience", value: "~1 year" },
      { title: "Age", value: "19 years old" }
    ]
  },
  {
    title: "Alice Smith",
    fields: [
      { title: "Position", value: "Frontend Developer (React)" },
      { title: "Work Experience", value: "2 years" },
      { title: "Age", value: "24 years old" }
    ]
  },
  {
    title: "Michael Brown",
    fields: [
      { title: "Position", value: "Backend Developer (Node.js)" },
      { title: "Work Experience", value: "3 years" },
      { title: "Age", value: "27 years old" }
    ]
  },
  {
    title: "Sophia Johnson",
    fields: [
      { title: "Position", value: "UI/UX Designer" },
      { title: "Work Experience", value: "4 years" },
      { title: "Age", value: "26 years old" }
    ]
  },
  {
    title: "Daniel Lee",
    fields: [
      { title: "Position", value: "DevOps Engineer" },
      { title: "Work Experience", value: "5 years" },
      { title: "Age", value: "30 years old" }
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
      <button onClick={prev}> <ArrowIcon className="prev-icon"/> </button>
      <div className="slider-card">
        <Card props = {cards[index]} />
      </div>
      <button onClick={next}> <ArrowIcon className="next-icon"/></button>
    </div>
  );
}
