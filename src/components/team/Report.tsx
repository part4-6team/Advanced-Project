import CircleGraph from './CircleGraph';

export default function Report() {
  return (
    <div>
      <CircleGraph
        backgroundColor="#334155"
        gradientColorStart="#10B981"
        gradientColorEnd="#A3E635"
        radius={54}
        percentage={40}
        strokeWidth={20}
      />
      <CircleGraph
        backgroundColor="#ffffff"
        gradientColorStart="#FDFF27"
        gradientColorEnd="#ff8c00"
        radius={30}
        percentage={40}
        strokeWidth={20}
      />
      <p>오늘의 진행상황</p>
      <p>25%</p>
      <div>
        <p>오늘의 할 일</p>
        <p>20개</p>
        <p>아이콘</p>
      </div>
      <div>
        <p>한 일</p>
        <p>5개</p>
        <p>아이콘</p>
      </div>
    </div>
  );
}
