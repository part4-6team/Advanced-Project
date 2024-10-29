import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '@/src/api/mysetting/inputAPI';
import { User } from '@/src/types/mysetting/settingData';

const logoOnlyPages = ['/signin', 'signup', 'addteam', '/'];
// 팀참여하기 페이지, 비밀번호 재설정페이지 추가 필요

export const useUserData = () => {
  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : '';

  return useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUserData,
    enabled: !logoOnlyPages.includes(currentPath),
  });
};
