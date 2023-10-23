import { queryKeys } from '@/constant/query-keys';
import { addBookmarkBoard } from '@/service/board';
import Toast from '@/utils/notification';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function useAddBookmark() {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: addBookmarkBoard,
    onSuccess: () => {
      Toast.success('북마크가 성공적으로 저장 되었습니다.');
      queryClient.invalidateQueries([queryKeys.BOARD_LIST]);
    },
    onError: () => {
      Toast.error('북마크를 저장하지 못했습니다. 잠시후 다시 시도해주세요.🥲');
    },
  });
  return { mutate, isLoading };
}
