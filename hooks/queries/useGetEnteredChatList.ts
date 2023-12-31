import { useQuery } from '@tanstack/react-query';
import { getEnteredChatList } from '@/service/community';
import { queryKeys } from '@/constant/query-keys';

export default function useGetEnteredChatList() {
  const { data, isLoading } = useQuery({
    queryKey: [queryKeys.ENTERED_CHAT_LIST],
    queryFn: getEnteredChatList,
    staleTime: 1000 * 60 * 3,
  });
  return { data, isLoading };
}
