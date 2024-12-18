"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, Rect, Textbox, TEvent } from "fabric"; // Textbox 추가
import * as S from "./CreateNewScrap.style";

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const fabricCanvasRef = useRef<Canvas | null>(null); // Canvas 인스턴스 영구 저장
    const [isCreating, setIsCreating] = useState(false);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Canvas 중복 초기화 방지
        if (fabricCanvasRef.current) return;

        // Fabric.js Canvas 초기화
        const canvas = new Canvas(canvasRef.current, {
            width: 500,
            height: 400,
            backgroundColor: "#fff",
        });

        // 로그 출력
        console.log("Canvas가 처음 생성되었습니다!", canvas);

        fabricCanvasRef.current = canvas; // Canvas 인스턴스 저장

        let movingRect: Rect | null = null;

        // 마우스 이동 이벤트: 도형 이동
        const handleMouseMove = (event: TEvent) => {
            if (!isCreating || !movingRect) return;

            const pointer = canvas.getPointer(event.e);
            movingRect.set({
                left: pointer.x - 50,
                top: pointer.y - 50,
            });
            canvas.renderAll();
        };

        // 마우스 클릭 이벤트: 도형 고정
        const handleMouseDown = () => {
            if (movingRect) {
                movingRect = null;
                setIsCreating(false);
            }
        };

        canvas.on("mouse:move", handleMouseMove);
        canvas.on("mouse:down", handleMouseDown);

        // Cleanup
        return () => {
            if (fabricCanvasRef.current) {
                console.log("Canvas가 제거되었습니다.");
                fabricCanvasRef.current.dispose();
                fabricCanvasRef.current = null; // 참조 제거
              }
        };
    }, [isCreating]);

    // 사각형 생성 함수
    const handleCreateRect = () => {
        const canvas = fabricCanvasRef.current;
        if (!canvas) return;

        const rect = new Rect({
            left: 0,
            top: 0,
            fill: "rgba(0, 0, 255, 0.7)",
            width: 100,
            height: 100,
            selectable: true,
        });

        canvas.add(rect);
        setIsCreating(true);
        fabricCanvasRef.current?.setActiveObject(rect);
    };

    // 텍스트 박스 추가 함수
    const handleCreateTextbox = () => {
        const canvas = fabricCanvasRef.current;
        if (!canvas) return;

        // Textbox 생성
        const textbox = new Textbox("텍스트를 입력하세요", {
            left: 100,
            top: 100,
            width: 200,
            fontSize: 20,
            borderColor: "#007bff",
            editingBorderColor: "#0056b3",
            fill: "black",
        });

        canvas.add(textbox);
        canvas.setActiveObject(textbox); // 텍스트 박스를 활성화 상태로 설정
    };

    return (
        <S.CanvasContainer>
            <S.Button onClick={handleCreateRect}>도형 생성</S.Button>
            <S.Button style={{ top: "70px" }} onClick={handleCreateTextbox}>
                텍스트 박스 생성
            </S.Button>
            <S.StyledCanvas ref={canvasRef} />
        </S.CanvasContainer>
    );
}
