"use client";
import { useEffect } from "react";

export default function BubbleCursor() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const bubble = document.createElement("div");

      // Random bubble size
      const size = Math.random() * 20 + 10;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;

      // Random pastel color
      bubble.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;

      // Position bubble at mouse
      bubble.style.left = `${e.pageX - size / 2}px`;
      bubble.style.top = `${e.pageY - size / 2}px`;

      bubble.classList.add("bubble");
      document.body.appendChild(bubble);

      // Remove after animation
      setTimeout(() => {
        bubble.remove();
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null; // No JSX, this just runs effects
}
