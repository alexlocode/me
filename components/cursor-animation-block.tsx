"use client";
import useCursorAnimated from "../hooks/use-cursor-animated";

const CursorAnimationBlock = () => {
  const { positions, DELAY } = useCursorAnimated();

  return (
    <div className="fixed top-0 left-0 mix-blend-difference z-[999] pointer-events-none">
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute"
          style={{
            transition: `transform ${DELAY * (index + 1)}ms linear`,
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${
              1 - index * 0.1
            })`,
          }}
        >
          <div
            className="w-6 aspect-square bg-special"
            style={{
              transform: "translate(-12px, -12px)",
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default CursorAnimationBlock;
