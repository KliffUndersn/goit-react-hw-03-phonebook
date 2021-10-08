import React from "react";

const RenderButtons = ({ clickHandler }) => {
  return (
    <ul>
      <li>
        <button
          type="button"
          onClick={(e) => {
            clickHandler(e.target.textContent.toLowerCase());
          }}
        >
          Good
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={(e) => {
            clickHandler(e.target.textContent.toLowerCase());
          }}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          type="button"
          onClick={(e) => {
            clickHandler(e.target.textContent.toLowerCase());
          }}
        >
          Bad
        </button>
      </li>
    </ul>
  );
};

export default RenderButtons;
