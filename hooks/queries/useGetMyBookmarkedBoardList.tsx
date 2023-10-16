'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import getMyBoardList from '@/service/myPage';
import { BookmarkedBoardList } from '@/types/types';

export default function useGetBookmarkedBoardList() {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['bookmarkedBoards'],
      queryFn: ({ pageParam = 0 }): Promise<BookmarkedBoardList> =>
        getMyBoardList(pageParam),
      getNextPageParam: (boardlist) =>
        boardlist.last ? undefined : boardlist.number + 1,
    });

  // 무한 스크롤 화면 가장 아래 부분 탐지하는 observer
  function Observer({ children }: { children: React.ReactNode }) {
    const { ref, inView } = useInView({ threshold: 1 });
    useEffect(() => {
      if (inView && hasNextPage) {
        fetchNextPage();
      }
    }, [inView]);
    if (!hasNextPage || !data) return null;
    return (
      <div ref={ref}>{isLoading || isFetchingNextPage ? children : null}</div>
    );
  }

  return {
    Observer,
    data,
    isLoading,
  };
}
