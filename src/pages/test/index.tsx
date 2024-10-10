import { Modal } from '@components/@shared/Modal';
import { useModal } from '@hooks/useModal';

export default function Test() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <button className="bg-red-100 text-red-500" type="button">
        버튼1
      </button>
      <button className="bg-blue-100 text-blue-500" type="button">
        버튼2
      </button>
      <button type="button">버튼3</button>
      <button type="button">버튼4</button>
      <button type="button">버튼5</button>
      <button type="button">버튼6</button>
      <button type="button">버튼7</button>

      {/* 공통 컴포넌트 적용 전 */}
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
          {/* 공통 컴포넌트 적용 전 */}
          <button
            type="button"
            onClick={closeModal}
            className="w-full rounded bg-gray-300 px-4 py-2 hover:bg-gray-400"
          >
            닫기
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
