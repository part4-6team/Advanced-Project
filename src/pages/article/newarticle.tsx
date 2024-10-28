import Button from '@components/@shared/Button';
import { Input, ScrollTextArea } from '@components/@shared/Input';
import ArticleImageInput from '@components/article/NewArticleImage';
import { useNewArticle } from '@hooks/article/useNewArticle';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function NewArticle() {
  const [content, setContent] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const router = useRouter();

  const mutation = useNewArticle();

  const handleSubmit = () => {
    if (content && title && image) {
      mutation.mutate({ title, content, image });
      router.push('/article');
    } else {
      console.log('제목 내용 이미지 넣어주세요');
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleImageChange = (response: string) => {
    setImage(response);
  };

  return (
    <div className="mx-4 mt-10 max-w-[1200px] xl:mx-auto">
      <header className="flex items-center justify-between">
        <h1 className="text-2lg-medium md:text-xl-bold">게시글 쓰기</h1>
        <div className="w-[184px] max-md:hidden">
          <Button size="full" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </header>
      <hr className="my-6 border-border-primary border-opacity-10" />
      <main className="flex flex-col gap-8">
        <div>
          <span className="text-md-medium md:text-lg-medium">
            <span className="text-brand-tertiary">*</span> 제목
          </span>
          <Input
            placeholder="이름을 입력해주세요"
            inputProps={{
              value: title,
              onChange: handleTitleChange,
            }}
          />
        </div>
        <div>
          <span className="text-md-medium md:text-lg-medium">
            <span className="text-brand-tertiary">*</span> 내용
          </span>
          <ScrollTextArea
            placeholder="내용을 입력해주세요."
            textareaProps={{
              value: content,
              onChange: handleContentChange,
            }}
          />
        </div>
        <div>
          <h2 className="mb-4 text-md-medium md:text-lg-medium">이미지</h2>
          <ArticleImageInput onUploadSuccess={handleImageChange} />
        </div>

        <div className="md:hidden">
          <Button size="full" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </main>
    </div>
  );
}
