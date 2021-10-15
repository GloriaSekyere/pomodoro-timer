import React from "react";
import { ContentBox } from "./ContentBox";

export const Keyboard = () => {
  return (
    <ContentBox>
      <p className="font-bold text-lg">Keyboard Shortcuts</p>
      <ul className="list-disc ml-6 mt-2">
        <li>
          <kbd className="font-bold">SPACE</kbd> Start or Stop the timer
        </li>
        <li><kbd className="font-bold">ALT + P</kbd> Pomodoro</li>
        <li><kbd className="font-bold">ALT + S</kbd> Short Break</li>
        <li><kbd className="font-bold">ALT + L</kbd> Long Break</li>
        <li><kbd className="font-bold">ALT + R</kbd> Reset Timer</li>
      </ul>
    </ContentBox>
  )
}
