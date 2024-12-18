"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, Rect } from "fabric"; // 수정된 import
import styled from "styled-components";

// Styled Components
const CanvasContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

const StyledCanvas = styled.canvas`
  border: 2px solid #333;
  background-color: #fff;
`;

export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Fabric.js Canvas 초기화
    const canvas = new Canvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#fff",
    });

    // 파란색 사각형 추가
    const rect = new Rect({
      left: 100,
      top: 100,
      fill: "blue",
      width: 150,
      height: 150,
    });
    canvas.add(rect);

    // Cleanup
    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div>
      <CanvasContainer>
        <StyledCanvas ref={canvasRef} />
      </CanvasContainer>
    </div>

  );
}
