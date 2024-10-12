import {
  calculateCircleProgress,
  calculateCircleViewBox,
} from '@utils/calculateCircleProgress';

type GraphProps = {
  backgroundColor: string; // 배경 원의 색상
  gradientColorStart: string; // 그라디언트의 시작 색상
  gradientColorEnd: string; // 그라디언트의 끝 색상
  radius: number; // 원의 반지름
  percentage: number; // 채울 퍼센트 (0~100)
  strokeWidth: number; // 선의 두께
};

export default function CircleGraph({
  backgroundColor,
  gradientColorStart,
  gradientColorEnd,
  radius,
  percentage,
  strokeWidth,
}: GraphProps) {
  const { viewBox, centerX, centerY } = calculateCircleViewBox({
    radius,
    strokeWidth,
  });

  // 기존의 함수로 strokeDasharray와 strokeDashoffset 계산
  const { strokeDasharray, strokeDashoffset } = calculateCircleProgress(
    radius,
    percentage
  );

  const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div className="relative" style={{ width: '120px', height: '120px' }}>
      {/* 검정색 원을 배경으로 설정 */}
      <svg
        className="absolute left-0 top-0"
        width="120"
        height="120"
        viewBox={viewBox}
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* 그라디언트 원을 전경에 설정 */}
      <svg
        className="absolute left-0 top-0 z-10"
        width="120"
        height="120"
        viewBox={viewBox}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: gradientColorStart, stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: gradientColorEnd, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          stroke={`url(#${gradientId})`}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
