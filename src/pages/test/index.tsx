import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';
import { useState } from 'react';
import Button from '@components/@shared/Button';
import Dropdown from '@components/@shared/Dropdown';
import Image from 'next/image';
import {
  Input,
  IconInput,
  SearchInput,
  ScrollTextArea,
  AutoTextArea,
} from '@components/@shared/Input';

export default function Test() {
  const { isOpen, openModal, closeModal } = useModal();

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

  return (
    <>
      <div className="m-auto grid grid-cols-3 place-items-center gap-4 p-4">
        {/* 모달 테스트, 공통 버튼 적용 전 */}
        <button
          type="button"
          onClick={openModal}
          className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          모달 열기
        </button>
        <Modal
          isOpen={isOpen}
          isXButton
          onClose={closeModal}
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
              onClick={closeModal}
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
      <div className="flex w-full items-center gap-[150px]">
        <Dropdown // 필터
          buttonChildren={
            <div className="flex items-center justify-between px-[14px] py-[10px] text-md-medium text-text-primary">
              <span>menu</span>
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/toggle.png" alt="팀 드롭다운" />
              </div>
            </div>
          }
          width="w-[120px]"
        >
          <div className="flex h-[40px] w-[120px] items-center px-[14px] py-[11px] text-md-regular">
            최신순
          </div>
          <div className="flex h-[40px] w-[120px] items-center px-[14px] py-[11px] text-md-regular">
            좋아요 많은순
          </div>
        </Dropdown>
        <Dropdown
          buttonChildren={
            <div className="flex items-center gap-[8px] px-[10px] py-[8px] text-md-medium text-text-default">
              <span>menu</span>
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/toggle.png" alt="팀 드롭다운" />
              </div>
            </div>
          }
          width="w-[109px]"
        >
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            한 번
          </div>
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            매일
          </div>
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            주 반복
          </div>
          <div className="flex h-[40px] w-[109px] items-center px-[16px] py-[11px] text-md-regular">
            월 반복
          </div>
        </Dropdown>

        <Dropdown // 팀 드롭다운
          buttonChildren={
            <div className="flex items-center gap-[12px]">
              <span>team</span>
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/toggle.png" alt="팀 드롭다운" />
              </div>
            </div>
          }
          width="w-[218px]"
          childType="team"
        >
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>경영관리 팀</span>
            </div>
            <Dropdown
              buttonChildren={
                <div className="relative h-[16px] w-[16px]">
                  <Image
                    fill
                    src="/icons/kebab_small.png"
                    alt="드롭다운 메뉴"
                  />
                </div>
              }
              width="w-[120px]"
              childType="menu"
            >
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                수정하기
              </div>
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                삭제하기
              </div>
            </Dropdown>
          </div>
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>프로덕트 팀</span>
            </div>
            <div className="relative h-[16px] w-[16px]">
              <Image fill src="/icons/kebab_small.png" alt="드롭다운 메뉴" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>마케팅 팀</span>
            </div>
            <div className="relative h-[16px] w-[16px]">
              <Image fill src="/icons/kebab_small.png" alt="드롭다운 메뉴" />
            </div>
          </div>
          <div className="flex w-full items-center justify-between px-[8px] py-[7px] text-lg-medium">
            <div className="flex items-center gap-[12px]">
              <div className="relative h-[32px] w-[32px]">
                <Image fill src="/images/todo.png" alt="이미지" />
              </div>
              <span>테스트</span>
            </div>
            <Dropdown
              buttonChildren={
                <div className="relative h-[16px] w-[16px]">
                  <Image
                    fill
                    src="/icons/kebab_small.png"
                    alt="드롭다운 메뉴"
                  />
                </div>
              }
              width="w-[120px]"
              childType="menu"
            >
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                수정하기
              </div>
              <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
                삭제하기
              </div>
            </Dropdown>
          </div>
        </Dropdown>
        <Dropdown // 메뉴 드롭다운
          buttonChildren={
            <div className="flex items-center">
              <div className="relative flex h-[24px] w-[24px] items-center justify-center">
                <Image fill src="/icons/kebab_large.png" alt="메뉴 드롭다운" />
              </div>
              <span>(menu)</span>
            </div>
          }
          width="w-[120px]"
          childType="menu"
        >
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
            수정하기
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-md-regular">
            삭제하기
          </div>
        </Dropdown>
        <Dropdown
          buttonChildren={
            <div className="flex items-center gap-[8px]">
              <div className="relative flex h-[16px] w-[16px] items-center justify-center">
                <Image
                  fill
                  src="/icons/profile_large.png"
                  alt="유저 드롭다운"
                />
              </div>
              <span className="text-md-medium">userMenu</span>
            </div>
          }
          width=" w-[120px] "
        >
          <div className="flex w-full items-center justify-center px-[14px] py-[14px] text-center text-lg-regular">
            마이 히스토리
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-lg-regular">
            계정 설정
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-lg-regular">
            팀 참여
          </div>
          <div className="flex w-full items-center justify-center px-[24px] py-[14px] text-center text-lg-regular">
            로그아웃
          </div>
        </Dropdown>
      </div>
    </>
  );
}
