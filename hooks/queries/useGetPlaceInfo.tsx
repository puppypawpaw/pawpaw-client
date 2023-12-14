import { queryKeys } from '@/constant/query-keys';
import { getDetailedPlace } from '@/service/pawzone';
import { useQuery } from '@tanstack/react-query';

export default function useGetPlaceInfo(placeId: number) {
  const { data } = useQuery({
    queryKey: [queryKeys.DETAILED_PLACE_INFO, placeId],
    queryFn: () => getDetailedPlace(placeId.toString()),
    staleTime: Infinity,
  });

  return data;
}
