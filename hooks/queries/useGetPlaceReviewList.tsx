import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { queryKeys } from '@/constant/query-keys';
import { getPlaceReviewList } from '@/service/pawzone';
import { ReviewList } from '@/types/types';
import { useEffect } from 'react';

// 자신을 제외한 place review list를 가져온다.
export default function useGetPlaceReviewList({
  placeId,
  size,
}: {
  placeId: number;
  size: number;
}) {
  const { data, hasNextPage, isLoading, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: [queryKeys.PLACE_REVIEW_LIST, placeId],
      queryFn: ({ pageParam = undefined }): Promise<ReviewList> =>
        getPlaceReviewList({ placeId, beforeReviewId: pageParam, size }),
      staleTime: 1000 * 60,
      getNextPageParam: (reviewList) => {
        const lastIndex = reviewList.content.length - 1;
        if (lastIndex < 0) return undefined;
        return reviewList.content[lastIndex].placeReviewId;
      },
    });

  function Observer({ children }: { children: React.ReactNode }) {
    const [ref, inView] = useInView({ threshold: 0.5 });
    useEffect(() => {
      if (!data) return;
      if (hasNextPage && inView) fetchNextPage();
    }, [inView]);
    if (!hasNextPage) return null;
    return (
      <div ref={ref}>{isFetchingNextPage || isLoading ? children : null}</div>
    );
  }

  return { data, Observer, isLoading };
}
