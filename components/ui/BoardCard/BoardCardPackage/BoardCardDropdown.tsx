import DotsIcon from 'public/DotsIcon.svg';
import copyToClipBoard from '@/utils/copyToClipBoard';
import useAddBookmark from '@/hooks/mutations/useAddBookmark';
import useDeleteBookmark from '@/hooks/mutations/useDeleteBookmark';
import useDeleteBoard from '@/hooks/mutations/useDeleteBoard';
import { Dropdown } from '../../ui';

export default function PostCardDropdown({
  boardId, // TODO : 북마크 되어있는지 확인
  isMyBoard, // isBookmarked,
}: {
  boardId: number;
  isMyBoard: boolean;
  // isBookmarked: boolean;
}) {
  const { mutate: addBookmark } = useAddBookmark();
  const { mutate: deleteBookmark } = useDeleteBookmark();
  const { mutate: deleteBoard } = useDeleteBoard(boardId);

  const handleBookmark = () => {
    // if (isBookmarked) {
    deleteBookmark(boardId);
    // } else {
    // addBookmark(boardId);
    // }
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <DotsIcon className="w-6 h-6 tablet:w-7 tablet:h-7" />
      </Dropdown.Trigger>
      <Dropdown.Menu>
        <Dropdown.Item event={handleBookmark}>북마크 추가</Dropdown.Item>
        <Dropdown.Item event={() => copyToClipBoard(window.location.href)}>
          공유하기
        </Dropdown.Item>
        {isMyBoard ? (
          <Dropdown.Item event={() => deleteBoard()}>삭제하기</Dropdown.Item>
        ) : null}
      </Dropdown.Menu>
    </Dropdown>
  );
}
