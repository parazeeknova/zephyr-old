import { useQuery } from '@tanstack/react-query';

import kyInstance from '@/lib/ky';
import { FollowerInfo, UserData } from '@/lib/types';

export default function useFollowerInfo(userId: string, initialState: FollowerInfo) {
  const query = useQuery({
    queryKey: ['follower-info', userId],
    queryFn: () => kyInstance.get(`/api/users/${userId}/followers`).json<FollowerInfo>(),
    initialData: initialState,
    staleTime: Infinity,
  });

  return query;
}

export function useFollowedUsers() {
  return useQuery({
    queryKey: ['followed-users'],
    queryFn: () => kyInstance.get('/api/users/followed').json<UserData[]>(),
  });
}
