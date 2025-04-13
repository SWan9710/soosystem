// 인증서
import ISO_9001 from "../assets/certificate/ISO 9001-1-1.png";
import ISO_14001 from "../assets/certificate/ISO 14001-1-1.png";
import ISO_45001 from "../assets/certificate/ISO 45001-1.png";
import MainBiz from "../assets/certificate/메인비즈2023-1.png";
import certificate1 from "../assets/certificate/소부장전문기업-1.png";
import certificate2 from "../assets/certificate/수시스템(주)_뿌리기업확인서2023-1.png";
import certificate3 from "../assets/certificate/여성기업202305-1.png";

// 등록증
import registration1 from "../assets/certificate/공장등록증명서-1.png";
import registration2 from "../assets/certificate/사업자등록증사본(수)-1.png";

// 표창장
import commendation1 from "../assets/certificate/산자부표창장-1.png";
import commendation2 from "../assets/certificate/표창장.png";
const certificates = [
  {
    image: ISO_9001,
    detail_title: "품질경영시스템",
  },
  {
    image: ISO_14001,
    detail_title: "환경경영시스템",
  },
  {
    image: ISO_45001,
    detail_title: "안전보건경영시스템",
  },
  {
    image: MainBiz,
    detail_title: "메인비즈확인서",
  },
  {
    image: certificate1,
    detail_title: "소재.부품.장비 전문기업확인서",
  },
  {
    image: certificate2,
    detail_title: "뿌리기업확인서",
  },
  {
    image: certificate3,
    detail_title: "여성기업확인서",
  },
];

const registrations = [
  {
    image: registration2, // 이미지 경로를 실제 이미지로 변경
    detail_title: "사업자등록증",
  },
  {
    image: registration1, // 이미지 경로를 실제 이미지로 변경
    detail_title: "공장등록증",
  },
];

const commendations = [
  {
    image: commendation1, // 이미지 경로를 실제 이미지로 변경
    detail_title: "중소기업청",
  },
  {
    image: commendation2, // 이미지 경로를 실제 이미지로 변경
    detail_title: "산업통상자원부",
  },
];

export { certificates, registrations, commendations };
