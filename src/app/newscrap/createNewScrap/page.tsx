"use client";

import React, { useEffect, useRef, useState } from "react";
import { Canvas, Textbox,  FabricImage,  PencilBrush } from "fabric"; // Textbox 추가
import * as S from "./CreateNewScrap.style";

export default function Page() {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const fabricCanvasRef = useRef<Canvas | null>(null); // Canvas 인스턴스 영구 저장
    //const [isCreating, setIsCreating] = useState(false);
    const [images] = useState([
        "/img/newsimg1.jpg",
        "/img/newsimg2.jpg",
        "/img/newsimg3.jpg",
        "/img/newsimg4.jpg",
        "/img/newsimg5.jpg",
    ]);


    // 도구 팝업 상태값
    const [showTool, setShowTool] = useState(false); // 도구창 표시 여부
   // const [showArrowTool,setShowArrowTool] = useState(false); // 라인도구창 표시 여부

    const [color, setColor] = useState("#F1FC90"); // 기본 색상
    const [lineWidth, setLineWidth] = useState(4); // 기본 굵기
    const [isHighlighterOn, setIsHighlighterOn] = useState(false); // 하이라이터 활성화 여부

   // const [ArrowNum,setArrowNum] = useState(1); // 화살표 번호 
   // const [ArrowWidth,setArrowWidth] = useState(2); // 화살표 굵기

    // 캔버스 useEffect 24.12.19 재현
    useEffect(() => {

        if (!canvasRef.current) return;
        if (fabricCanvasRef.current) return;

        const canvas = new Canvas(canvasRef.current, {
            backgroundColor: "#E3E3E3",
            width: canvasRef.current.parentElement?.offsetWidth || 500, // 부모 요소의 너비
            height: canvasRef.current.parentElement?.offsetHeight || 400, // 부모 요소의 높이
        })

        console.log("Canvas가 처음 생성되었습니다!", canvas);

        fabricCanvasRef.current = canvas;


        // 키보드 이벤트 리스너: Delete 키 감지
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Delete" || e.key === "Backspace") {
                const activeObject = canvas.getActiveObject();
                if (activeObject) {
                    canvas.remove(activeObject); // 객체 삭제
                    canvas.discardActiveObject(); // 선택 해제
                    canvas.requestRenderAll(); // 다시 렌더링
                }
            }
        };

        // ESC 키 이벤트 감지
        const handleEscKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setShowTool(false); // 도구창 닫기
                setIsHighlighterOn(false); // 하이라이터 기능 비활성화
                if (fabricCanvasRef.current) {
                    fabricCanvasRef.current.isDrawingMode = false; // 드로잉 모드 해제
                }
            }
        };

        // 키 이벤트 리스너 등록
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keydown", handleEscKey);

        return () => {
            if (fabricCanvasRef.current) {
                console.log("Canvas가 제거되었습니다.");
                window.removeEventListener("keydown", handleKeyDown);
                fabricCanvasRef.current.dispose();
            }
        };
    }, []);

    // 하이라이터 설정 업데이트
    useEffect(() => {
        const canvas = fabricCanvasRef.current;
        if (!canvas || !isHighlighterOn) return;

        const rgbaColor = hexToRGBA(color, 0.5); // 투명도 적용
        const highlighter = new PencilBrush(canvas);
        highlighter.color = rgbaColor;
        highlighter.width = lineWidth;

        canvas.freeDrawingBrush = highlighter;
        canvas.isDrawingMode = true;
    }, [color, lineWidth, isHighlighterOn]); // 상태 변화 감지

    // HEX -> RGBA 변환 함수
    const hexToRGBA = (hex: string, opacity: number) => {
        const r = parseInt(hex.substring(1, 3), 16);
        const g = parseInt(hex.substring(3, 5), 16);
        const b = parseInt(hex.substring(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    // 하이라이터 생성 함수
    const handleCreateHighlighter = () => {
        setIsHighlighterOn(true);
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

    const ShowNewsImg2Box = () => {

    }

    // 이미지 Canvas에 추가하는 함수
    const addImageToCanvas = async (url: string) => {
        const canvas = fabricCanvasRef.current;
        if (!canvas) return;

        try {
            const image = await FabricImage.fromURL(url, {}, { left: 100, top: 100 });
            image.scale(0.5); // 이미지 크기 조절
            canvas.add(image); // Canvas에 이미지 추가
            canvas.renderAll(); // 다시 렌더링
        } catch (error) {
            console.error("이미지 로드 실패:", error);
        }
    };



    return (
        <div>
            <S.ScarpContainer>
                <S.CanvasContainer>
                    {/* 메인 컨텐츠 */}
                    <S.StyledCanvas ref={canvasRef} />
                </S.CanvasContainer>

                {/* 내비게이션 박스 */}
                <S.ButtonNaviBox>
                    {/*<S.Button onClick={handleCreateRect}>도형 생성</S.Button>
                    <S.Button onClick={handleCreateTextbox}>텍스트 박스 생성</S.Button>
                    <S.Button onClick={CheckCanvasIs}>Canvas 확인</S.Button>*/}
                    <S.ButtonBox1>
                        {/* 버튼과 도구창 */}
                        <S.ToolWrapper>
                            <S.IconButton
                                onClick={() => {
                                    setShowTool((prev) => !prev);
                                    if (!showTool) handleCreateHighlighter();
                                }}
                                style={{
                                    backgroundColor: isHighlighterOn ? color : "#f0f0f0", // 버튼 색상 변경
                                    border: "none"
                                }}
                            >
                                <S.IconImage src="/icon/highlighterIcon.png" alt="Icon" />
                            </S.IconButton>

                            {/* 하이라이터 도구 */}
                            {showTool && (
                                <S.ToolPopup>
                                    <S.Label>색상 선택</S.Label>
                                    <S.ColorPicker
                                        type="color"
                                        value={color}
                                        onChange={(e) => setColor(e.target.value)}
                                    />

                                    <S.Label>굵기 조절</S.Label>
                                    <S.Slider
                                        type="range"
                                        min="1"
                                        max="20"
                                        value={lineWidth}
                                        onChange={(e) => setLineWidth(Number(e.target.value))}
                                    />
                                </S.ToolPopup>
                            )}
                        </S.ToolWrapper>

                        <S.ToolWrapper>
                            <S.IconButton onClick={handleCreateTextbox}>
                                <S.IconImage src={"/icon/ArrowIcon.png"} alt="Icon" />
                            </S.IconButton>
                        </S.ToolWrapper>

                        <S.IconButton onClick={handleCreateTextbox}>
                            <S.IconImage src={"/icon/TextIcon.png"} alt="Icon" />
                        </S.IconButton>

                    </S.ButtonBox1>

                    <S.ButtonBox2>
                        <S.IconButton onClick={ShowNewsImg2Box}>
                            <S.IconImage src={"/icon/newsimgIcon.png"} alt="Icon" />
                        </S.IconButton>
                        <S.IconButton onClick={handleCreateTextbox}>
                            <S.IconImage src={"/icon/contextIcon.png"} alt="Icon" />
                        </S.IconButton>
                    </S.ButtonBox2>

                    <S.NewsContentBox>
                        <S.ImageListBox>
                            {images.map((src, index) => (
                                <S.ImageThumbnail
                                    key={index}
                                    src={src}
                                    alt={`newsimg-${index + 1}`}
                                    onClick={() => addImageToCanvas(src)}
                                />
                            ))}
                        </S.ImageListBox>
                    </S.NewsContentBox>

                </S.ButtonNaviBox>
            </S.ScarpContainer>
        </div>
    )
}


{/* <S.ToolContainer>
<S.Label>색상 선택</S.Label>
<S.ColorPicker
    type="color"
    value={color}
    onChange={(e) => setColor(e.target.value)}
/>

<S.Label>굵기 조절</S.Label>
<S.Slider
    type="range"
    min="1"
    max="20"
    value={lineWidth}
    onChange={(e) => setLineWidth(Number(e.target.value))}
/>

<button onClick={handleCreateHighlighter}>하이라이터 활성화</button>
</S.ToolContainer> */}