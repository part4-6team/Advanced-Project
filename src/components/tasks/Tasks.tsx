import TaskCard from './TaskCard';

export default function Tasks() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex gap-3 text-lg-medium">
        <h2>목록 이름 map</h2>
      </div>
      <div className="flex flex-col gap-4">
        <TaskCard />
      </div>
    </section>
  );
}
