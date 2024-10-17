import { useQuery } from '@tanstack/react-query';
import { fetchUserData } from '@/src/api/mysetting/inputAPI';
import { User } from '@/src/types/mysetting/settingData';

export const useUserData = () => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUserData,
  });
};
