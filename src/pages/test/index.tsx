import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';
import { useState } from 'react';
import Button from '@components/@shared/Button';
import {
  Input,
  IconInput,
  SearchInput,
  ScrollTextArea,
  AutoTextArea,
} from '@components/@shared/Input';
import ProfileImageInput from '@components/@shared/ProfileImageInput';

export default function Test() {
  const { isOpen, onOpen, onClose } = useModal();

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('댓글 등록!:', text);
    setText('');
  };

  const handleFileChange = (imgFile: File) => {
    console.log(imgFile);
  };

  return (
    <div className="m-auto grid grid-cols-3 place-items-center gap-4 p-4">
      {/* 모달 테스트, 공통 버튼 적용 전 */}
      <button
        type="button"
        onClick={onOpen}
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        모달 열기
      </button>
      <Modal
        isOpen={isOpen}
        isXButton
        onClose={onClose}
        array="column"
        padding="default"
        bgColor="primary"
        fontSize="16"
        fontArray="center"
        gap="40"
      >
        {/* 모달의 하위 요소에 독립적인 스타일을 적용할 수 있습니다 */}
        {/* Modal.Wrapper로 헤더와 콘텐츠의 간격을 설정할 수 있습니다 */}
        <Modal.Wrapper array="column">
          <Modal.Header fontColor="primary">모달 제목</Modal.Header>
          <Modal.Content fontColor="secondary" fontSize="14" fontArray="left">
            <p>모달 내용</p>
          </Modal.Content>
        </Modal.Wrapper>
        <Modal.Footer>
          {/* 공통 버튼 적용 전 */}
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
          >
            닫기
          </button>
        </Modal.Footer>
      </Modal>
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
        초록투명
      </Button>
      <Button
        bgColor="transparent"
        fontColor="white"
        fontSize="16"
        width={100}
        height={50}
        border="white"
      >
        하얀투명
      </Button>
      <Button
        bgColor="white"
        fontColor="gray"
        fontSize="16"
        width={100}
        height={50}
        border="gray"
      >
        하얀버튼
      </Button>
      <Button fontSize="14" shape="round" width={100} height={30}>
        초록동글
      </Button>
      <Button className="bg-amber-500 hover:bg-amber-400 active:bg-amber-600">
        커스텀버튼
      </Button>
      <Button>초록버튼</Button>
      <Button bgColor="red">빨간버튼</Button>
      <Button className="bg-amber-400" disabled>
        비활성화
      </Button>
      <Button className="bg-amber-400" disabledBgColor="#e6b4b4" disabled>
        비활 색지정
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
      <ProfileImageInput onFileChange={handleFileChange} />
    </div>
  );
}
