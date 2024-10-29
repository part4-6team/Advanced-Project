import Button from '@components/@shared/Button';
import { Input, ScrollTextArea } from '@components/@shared/Input';
import Image from 'next/image';

export default function newarticle() {
  return (
    <div className="mx-4 mt-10 max-w-[1200px] xl:mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2lg-medium md:text-xl-bold">게시글 쓰기</h1>
        <div className="w-[184px] max-md:hidden">
          <Button size="full">등록</Button>
        </div>
      </header>
      <hr className="my-6 border-border-primary border-opacity-10" />
      <main className="flex flex-col gap-8">
        <div>
          <span className="text-md-medium md:text-lg-medium">
            <span className="text-brand-tertiary">*</span> 제목
          </span>
          <Input placeholder="이름을 입력해주세요" />
        </div>
        <div>
          <span className="text-md-medium md:text-lg-medium">
            <span className="text-brand-tertiary">*</span> 내용
          </span>
          <ScrollTextArea placeholder="내용을 입력해주세요." />
        </div>
        <div>
          <h2 className="mb-4 text-md-medium md:text-lg-medium">이미지</h2>
          <div className="flex h-[160px] w-[160px] flex-col items-center justify-center gap-4 rounded-xl border border-border-primary border-opacity-10 bg-background-secondary md:h-[240px] md:w-[240px]">
            <Image
              src="/icons/plus.svg"
              width={24}
              height={24}
              alt="이미지 등록"
            />

            <span>이미지 등록</span>
          </div>
        </div>
        <div className="md:hidden">
          <Button size="full">등록</Button>
        </div>
      </main>
    </div>
  );
}
