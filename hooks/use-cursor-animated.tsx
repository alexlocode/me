import { useState, useEffect, useRef } from "react";

const DIVS = 5;
const DELAY = 20;

const useCursorAnimated = () => {
  const [positions, setPositions] = useState(Array(DIVS).fill({ x: 0, y: 0 }));
  const requestRef = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent) => {
    mousePosition.current = {
      x: event.clientX,
      y: event.clientY,
    };
  };

  const animate = () => {
    setPositions((prevPositions) => {
      const newPositions = [...prevPositions];
      newPositions[0] = {
        x: mousePosition.current.x,
        y: mousePosition.current.y,
      };

      for (let i = 1; i < DIVS; i++) {
        newPositions[i] = {
          x: prevPositions[i - 1].x,
          y: prevPositions[i - 1].y,
        };
      }

      return newPositions;
    });

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // 添加滑鼠移動監聽
    window.addEventListener("mousemove", handleMouseMove);

    // 啟動動畫更新
    requestRef.current = requestAnimationFrame(animate);

    // 清除副作用
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return {
    positions,
    DELAY,
  };
};

export default useCursorAnimated;
