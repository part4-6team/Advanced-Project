import { getMemberships } from '@/src/api/team/memberAPI';
import Button from '@components/@shared/Button';
import EmptyTeamPage from '@components/team/EmptyTeamPage';
import { UserData } from '@components/team/member/ExileUserModal';
import TeamBox from '@components/team/TeamBox';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useEffect } from 'react';

export default function MyTeamPage() {
  const { data: memberships } = useQuery({
    queryKey: ['memberships'],
    queryFn: () => getMemberships(),
  });

  if (memberships) {
    if (memberships.length !== 0) {
      return (
        <main className="mx-auto mb-[30px] mt-[20px] w-full min-w-[340px] px-[10px] xl:w-[1200px] xl:px-0">
          <TeamBox />
          <Link href="/addteam">
            <Button width={136} height={48} fontSize="14" className="mt-[48px]">
              팀 생성하기
            </Button>
          </Link>
          <Link href="/addteam/participate">
            <Button
              width={136}
              height={48}
              bgColor="transparent"
              border="green"
              fontColor="green"
              fontSize="14"
              className="mt-[8px]"
            >
              팀 참여하기
            </Button>
          </Link>
        </main>
      );
    }
  }

  return <EmptyTeamPage />;
}
