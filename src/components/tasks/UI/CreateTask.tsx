import Button from '@components/@shared/Button';

export default function CreateTask() {
  return (
    <Button
      bgColor="green"
      shape="round"
      className="fixed bottom-8 right-8 xl:bottom-12"
    >
      + 할 일 추가
    </Button>
  );
}
