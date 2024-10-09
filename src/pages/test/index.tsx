import { useState } from 'react';
import Button from '@pages/components/@shared/Button';
import {
  Input,
  IconInput,
  SearchInput,
  ScrollTextArea,
  AutoTextArea,
} from '../components/@shared/Input';

export default function Test() {
  const NonVisibleIcon = (
    <img src="/icons/visibility_off.svg" alt="Action Icon" />
  );

  const ChangePwButton = (
    <Button fontSize="14" width={70} height={20}>
      변경하기
    </Button>
  );

  const [text, setText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('댓글 등록!:', text);
    setText('');
  };

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
      <Input placeholder="이메일을 입력하세요" />
      <Input label="이름" placeholder="이름을 입력해주세요" />
      <Input
        label="이름"
        placeholder="이름을 입력해주세요"
        isError
        errorMessage="2자 이상 입력해주세요"
      />
      <IconInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        actionIcon={NonVisibleIcon}
      />
      <IconInput
        label="비밀번호"
        placeholder="비밀번호를 입력해주세요"
        actionIcon={ChangePwButton}
      />
      <SearchInput placeholder="검색어를 입력해주세요" />
      <ScrollTextArea label="댓글" placeholder="댓글을 입력해주세요" />
      <AutoTextArea
        value={text}
        onChange={handleChange}
        placeholder="댓글을 달아주세요"
        onSubmit={handleSubmit}
      />
    </div>
  );
}
