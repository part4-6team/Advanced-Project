import { deleteMemberById } from '@/src/api/team/memberAPI';
import { useTeamStore } from '@/src/stores/teamStore';
import Button from '@components/@shared/Button';
import { Modal } from '@components/@shared/Modal';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';

interface ExileUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  memberName: string;
  userId: number;
}

interface Group {
  id: number;
  name: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  teamId: string;
}

interface Membership {
  userId: number;
  groupId: number;
  userName: string;
  userEmail: string;
  userImage: string | null;
  role: string;
  group: Group;
}

interface UserData {
  id: number;
  nickname: string;
  createdAt: string;
  updatedAt: string;
  image: string | null;
  teamId: string;
  email: string;
  memberships: Membership[];
}

export default function ExileUserModal({
  isOpen,
  onClose,
  memberName,
  userId,
}: ExileUserModalProps) {
  const { teamId } = useTeamStore();
  const queryClient = useQueryClient();

  // 'user' 키로 캐싱된 유저 데이터 가져오기
  const userData = queryClient.getQueryData<UserData>(['user']);

  // 멤버 삭제 Mutation
  const { mutate: deleteMember } = useMutation({
    mutationFn: ({ id, userid }: { id: string; userid: number }) =>
      deleteMemberById(id, userid),
    onSuccess: () => {
      console.log('멤버 정보 삭제 완료!');
      onClose();
    },
    onSettled: () => {
      // 쿼리 무효화 및 리패치
      queryClient.invalidateQueries({ queryKey: ['group', teamId] });
    },
    onError: (error) => {
      console.error('멤버 삭제 실패:', error);
    },
  });

  const handleDeleteClick = () => {
    // 팀 관리자만 삭제 가능
    if (
      userData &&
      userData.memberships.find((m) => m.groupId === Number(teamId))?.role !==
        'ADMIN'
    ) {
      console.log('관리자가 아닙니다. 삭제 불가능.');
      return;
    }

    // 본인 삭제 불가 체크
    if (userData && userData.id === userId) {
      console.log('본인은 삭제할 수 없습니다.');
      return;
    }

    deleteMember({ id: teamId as string, userid: userId as number });
  };

  return (
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
      <Modal.Wrapper array="column">
        <Modal.Header
          fontColor="primary"
          className="flex flex-col items-center gap-[16px]"
        >
          <Image
            src="/icons/alert.svg"
            alt="경고 아이콘"
            width={24}
            height={24}
          />
          [{memberName}] 유저를 삭제하시겠어요?
        </Modal.Header>
        <Modal.Content fontColor="secondary" fontSize="14" fontArray="center">
          <p className="mt-[20px]">
            팀 내에서 멤버를 삭제합니다. 정말로 진행하시겠습니까?
          </p>
        </Modal.Content>
      </Modal.Wrapper>
      <Modal.Footer>
        <div className="flex gap-[8px]">
          <Button
            size="full"
            bgColor="white"
            fontColor="gray"
            onClick={onClose}
          >
            취소
          </Button>
          <Button size="full" bgColor="red" onClick={handleDeleteClick}>
            삭제
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
