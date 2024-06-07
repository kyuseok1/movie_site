import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const GoToTop = () => {
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="gototop">
      <button onClick={MoveToTop}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default GoToTop;
