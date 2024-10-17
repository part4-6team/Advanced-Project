/**
 * 주어진 반지름과 비율(%)에 따라 strokeDasharray와 strokeDashoffset 값을 계산하는 함수
 * @param radius 원의 반지름
 * @param percentage 채우고자 하는 비율 (0-100)
 * @returns strokeDasharray와 strokeDashoffset 값
 */
export function calculateCircleProgress(radius: number, percentage: number) {
  const circumference = 2 * Math.PI * radius; // 원의 둘레 계산
  const filledLength = (circumference * percentage) / 100; // 채울 길이 계산
  const emptyLength = circumference - filledLength; // 남는 부분 길이 계산

  return {
    strokeDasharray: circumference,
    strokeDashoffset: emptyLength,
  };
}

type CircleParams = {
  radius: number; // 원의 반지름
  strokeWidth: number; // 선의 두께
};

export function calculateCircleViewBox({ radius, strokeWidth }: CircleParams) {
  // 최소한 viewBox의 크기를 계산
  const viewBoxSize = radius + strokeWidth;

  return {
    viewBox: `0 0 ${viewBoxSize * 2} ${viewBoxSize * 2}`, // viewBox 문자열 생성
    centerX: viewBoxSize, // x좌표 반환
    centerY: viewBoxSize, // y좌표 반환
    radius, // 반지름 반환
  };
}
