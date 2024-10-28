import Button from '@components/@shared/Button';
import { Input, ScrollTextArea } from '@components/@shared/Input';

export default function newarticle() {
  return (
    <div className="mx-4 mt-10 max-w-[1200px] xl:mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2lg-medium">게시글 쓰기</h1>
        <div className="max-md:hidden">
          <Button>등록</Button>
        </div>
      </header>
      <hr className="my-6" />
      <main className="flex flex-col gap-8">
        <div>
          <span>* 제목</span>
          <Input placeholder="이름을 입력해주세요" />
        </div>
        <div>
          <span>* 내용</span>
          <ScrollTextArea placeholder="내용을 입력해주세요." />
        </div>
        <h2>* 이미지</h2>

        <div>
          <span>이미지 등록</span>
        </div>
      </main>
      <footer className="md:hidden">
        <Button>등록</Button>
      </footer>
    </div>
  );
}
