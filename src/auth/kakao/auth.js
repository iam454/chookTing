const CLIENT_ID = "1234"; // 환경 변수로 관리해야할 것 같습니다
const REDIRECT_URI = "http://localhost:3000/kakao/callback";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
