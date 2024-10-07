export default function Test() {
  return (
    <div
      className="grid grid-cols-3 gap-4 p-4"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
        padding: '16px',
      }}
    >
      <button className="bg-red-100 text-red-500" type="button">
        버튼1
      </button>
      <button type="button">버튼2</button>
      <button type="button">버튼3</button>
      <button type="button">버튼4</button>
      <button type="button">버튼5</button>
      <button type="button">버튼6</button>
      <button type="button">버튼7</button>
    </div>
  );
}
