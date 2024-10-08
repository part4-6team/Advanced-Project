import Button from '@pages/components/@shared/Button';

export default function Test() {
  return (
    <div className="m-auto grid grid-cols-3 place-items-center gap-4 p-4">
      <Button>버튼1</Button>
      <Button bgColor="red" fontSize="14" width={150} height={40}>
        버튼2
      </Button>
      <Button bgColor="gradient" fontSize="14" size="full" height={50}>
        버튼3
      </Button>
      <Button
        bgColor="transparent"
        fontColor="green"
        fontSize="16"
        width={100}
        height={50}
        border="green"
      >
        버튼4
      </Button>
      <Button
        bgColor="transparent"
        fontColor="white"
        fontSize="16"
        width={100}
        height={50}
        border="white"
      >
        버튼5
      </Button>
      <Button
        bgColor="white"
        fontColor="gray"
        fontSize="16"
        width={100}
        height={50}
        border="gray"
      >
        버튼6
      </Button>
      <Button fontSize="14" shape="round" width={100} height={30}>
        버튼7
      </Button>
    </div>
  );
}
