import { useInfiniteQuery } from '@tanstack/react-query';
import { getChatHistory } from '@/service/chatRoom';

export default function useGetChatHistory(roomId: string) {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ['chatHistory', roomId],
      queryFn: ({ pageParam = 0 }) => getChatHistory(roomId, pageParam),
      refetchOnWindowFocus: false,
      getNextPageParam: (history) => {
        const lowestId = history.content.sort((a, b) => a.id - b.id).at(0)?.id;
        return lowestId;
      },
      select: (chatHistory) => ({
        pages: chatHistory.pages.slice().reverse(),
        pageParams: chatHistory.pageParams,
      }),
    });

  return { data, isFetchingNextPage, hasNextPage, fetchNextPage };
}