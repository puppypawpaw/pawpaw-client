import { queryKeys } from '@/constant/query-keys';
import { deleteMyPlaceReview } from '@/service/pawzone';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useDeleteMyPlaceReview(placeId: number) {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => deleteMyPlaceReview(placeId),
    onSuccess: () => {
      Toast.success('리뷰가 삭제되었습니다.');
      return queryClient.invalidateQueries([
        queryKeys.MY_PLACE_REVIEW,
        placeId,
      ]);
    },
  });

  return mutate;
}
