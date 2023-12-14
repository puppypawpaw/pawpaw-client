import { queryKeys } from '@/constant/query-keys';
import { getMyPlaceReview } from '@/service/pawzone';
import { useQuery } from '@tanstack/react-query';

export default function useGetMyPlaceReview(placeId: number) {
  const { data } = useQuery({
    queryKey: [queryKeys.MY_PLACE_REVIEW, placeId],
    queryFn: () => getMyPlaceReview({ placeId }),
    staleTime: Infinity,
  });

  return data;
}
