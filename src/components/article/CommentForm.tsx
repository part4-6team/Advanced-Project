import { ScrollTextArea } from '@components/@shared/Input';
import { useCommentAdd } from '@hooks/article/useArticleDetail';
import { useState } from 'react';

interface CommentFromProps {
  articleId: number;
}

export default function CommentForm({ articleId }: CommentFromProps) {
  const [content, setContent] = useState('');

  const { mutate } = useCommentAdd();

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setContent(value);
  };

  const handleSubmit = () => {
    if (content.trim()) {
      mutate({ articleId, content });
      setContent('');
    } else {
      alert('댓글을 입력해주세요');
    }
  };

  return (
    <div className="mt-20">
      <ScrollTextArea
        label="댓글달기"
        placeholder="댓글을 입력해주세요"
        textareaProps={{
          value: content,
          onChange: handleContentChange,
        }}
      />
      <div className="mt-4 h-12 text-right">
        <button
          type="button"
          className="h-8 w-[74px] rounded-xl bg-brand-primary text-md-semibold md:h-12 md:w-[184px] md:text-lg-semibold"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </div>
  );
}
