import styled from "styled-components";

export const ScarpContainer = styled.div`
  display: flex; /* Flexbox 사용 */
  height: 80vh; /* 화면 높이 맞춤 */
  width: 90%; /* 전체 너비 */
  margin: 0 auto; /* 좌우 여백을 자동으로 설정하여 가운데 정렬 */
  align-items: center; /* 수직 중앙 정렬 (Flexbox 기준) */
  justify-content: center; /* 수평 중앙 정렬 */
`;

// Styled Components
export const CanvasContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #E3E3E3;
  height: 100%;
  width: 80%; /* 전체 너비 중 80% 사용 */
  position: relative;
`;

export const StyledCanvas = styled.canvas`
  // border: 2px solid #333;
  position: relative;
  height: 100%;
  width: 100%; /* 전체 너비 중 80% 사용 */
`;

// 내비게이션 박스 스타일

export const ButtonNaviBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* 아이템 중앙 정렬 */
  justify-content: flex-start; /* 위에서 아래로 배치 */
  width: 20%; /* 전체 너비 중 20% 사용 */
  height: 100%;
  background-color: #F5F5F5;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  border-left: 2px solid #ADA7A7;
`;


// 버튼 스타일
export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  margin-bottom: 10px; /* 버튼 사이 간격 */
  border-radius: 5px;
  cursor: pointer;
  font-size: 10px;
  &:hover {
    background-color: #0056b3;
  }
`;

// 상단 버튼 영역 (ButtonBox1)
export const ButtonBox1 = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  gap: 15px; /* 버튼 사이 간격 */
  margin-top: 20px; /* 상단 여백 */
`;

// 중간 버튼 영역 (ButtonBox2)
export const ButtonBox2 = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  gap: 10px; /* 버튼 사이 간격 */
  margin-top: 30px; /* 상단 여백 */
`;

// 뉴스 컨텐츠 박스
export const NewsContentBox = styled.div`
  display: flex;
  justify-content: center; /* 수평 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
  background-color: #d9d9d9;
  height: 100%; /* 고정 높이 */
  width: 100%;
  margin-top : 14px;
`;


// 내비게이션 박스 스타일
export const IconButtonBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center; /* 중앙 정렬: 수평 */
`;

// 아이콘 버튼 스타일
export const IconButton = styled.button`
  width: 36px; /* 버튼의 크기 */
  height: 36px;
  border: none;
  border-radius: 50%; /* 원형 버튼 */
  background-color: #f0f0f0; /* 버튼 배경색 */
  display: flex;
  justify-content: center; /* 중앙 정렬: 수평 */
  align-items: center; /* 중앙 정렬: 수직 */
  cursor: pointer;
  padding: 0;
  overflow: hidden; /* 아이콘이 넘치지 않도록 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15); /* 부드러운 그림자 효과 */
  transition: all 0.2s ease-in-out; /* 부드러운 애니메이션 */
  margin-right: 10px;

  &:hover {
    background-color: #e0e0e0; /* 호버 시 배경색 */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px); /* 약간 위로 떠오르는 효과 */
  }

  &:active {
    background-color: #d0d0d0; /* 클릭 시 배경색 */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(0); /* 클릭 시 원래 위치 */
  }
`;

// 아이콘 이미지 스타일 (부모의 크기에 맞춤)
export const IconImage = styled.img`
  width: 40%; /* 부모 크기의 60%로 설정 */
  height: 40%;
  object-fit: contain; /* 이미지 비율 유지하며 맞춤 */
`;



export const ImageListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
`;

export const ImageThumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    border: 2px solid #007bff;
  }
`;

// 도구 팝업 박스
export const ToolPopup = styled.div`
  position: absolute;
  top: 50px; /* 버튼 아래로 배치 */
  width : 160px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 100; /* 다른 요소 위에 표시 */
`;

export const Slider = styled.input`
  width: 100%;
`;

export const ColorPicker = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: none;
`;

export const ToolWrapper = styled.div`
  position: relative; /* 버튼 기준으로 도구 팝업 위치 */
`;

export const Label = styled.label`
  font-size: 10px;
  margin-bottom: 5px;
  color: #333;
`;