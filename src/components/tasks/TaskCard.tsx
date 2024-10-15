import CalenderIcon from '@icons/calendar_large.svg';
import CommentIcon from '@icons/comment.svg';
import RepeatIcon from '@icons/repeat.svg';

import Kebab from './UI/Kebab';
import CheckBox from './UI/CheckBox';

export default function TaskCard() {
  const handleKebabClick = () => {
    console.log('케밥 클릭');
  };

  return (
    <div className="flex flex-col gap-[10px] rounded-lg bg-background-secondary px-[14px] py-3 text-text-default">
      <div className="flex">
        <div className="flex gap-2">
          <CheckBox />
          <h3 className="text-text-primary">할 일 이름</h3>
        </div>
        <div className="flex flex-grow  justify-end gap-2">
          <div className="flex items-center gap-[2px]">
            <CommentIcon />
            <p>댓글 수</p>
          </div>
          <Kebab onClick={handleKebabClick} />
        </div>
      </div>
      <div className="flex items-center gap-[10px] text-xs-regular">
        <CalenderIcon />
        <p>작성 날짜</p>
        <line className="h-3 border-[1px] border-slate-700" />
        <RepeatIcon />
        <p>반복 주기</p>
      </div>
    </div>
  );
}
