import useInput from '@/hooks/common/useInput';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/svgs/X.svg';
import SearchInput from '@/components/ui/Input/SearchInput';
import ArrowLeftIcon from '@/public/svgs/arrow-left.svg';
import useGetSearchedUserList from '@/hooks/queries/useGetSearchedUserList';
import { usePathname } from 'next/navigation';
import useInviteUserToChatroom from '@/hooks/mutations/useInviteUserToChatroom';
import { useState } from 'react';
import SearchedUserList from './SearchedUserList';

export default function UserAddModal({ onClose }: { onClose: () => void }) {
  const [nickname, onChangeNickname, resetValue] = useInput('');
  const [selectedUser, setSelectedUser] = useState('');
  const roomId = usePathname().split('/')[2];
  const { data: searchedList, refetch } = useGetSearchedUserList(
    roomId,
    nickname,
  );
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const { mutate } = useInviteUserToChatroom(inviteUserSuccessCb);
  const fetchSearchedUserList = () => {
    if (nickname.length === 0) return;
    refetch();
  };
  function inviteUserSuccessCb() {
    onClose();
    resetValue();
    setSelectedUser('');
  }
  const handleSelectUser = (userId: string) => {
    setSelectedUser(userId);
  };

  return (
    <FlexBox
      direction="column"
      className="w-screen tablet:w-[672px] gap-4  h-screen"
    >
      <div className="self-end hidden tablet:block">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close User Add Modal"
        >
          <XIcon className="w-8 h-8 fill-white" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="bg-white rounded-[10px] p-4 tablet:p-9 gap-7 w-full h-screen tablet:h-auto"
      >
        <header className="flex items-center w-full header2">
          <button
            type="button"
            className="block tablet:hidden"
            onClick={onClose}
            aria-label="Close User Add Modal"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </button>
          <span className="self-center">인원 추가</span>
        </header>
        <SearchInput
          placeholder="추가할 인원의 아이디나 닉네임을 검색해보세요"
          value={nickname}
          onChangeValue={onChangeNickname}
          resetValue={resetValue}
          onClickSearchIcon={fetchSearchedUserList}
          onPressEnter={fetchSearchedUserList}
        />
        <SearchedUserList
          userList={searchedList}
          handleSelectUser={handleSelectUser}
          selectedUser={selectedUser}
        />
        <Button
          className="w-full header3"
          size="lg"
          disabled={selectedUser === ''}
          onClickAction={() =>
            mutate({ roomId, userId: { userId: selectedUser } })
          }
        >
          추가하기
        </Button>
      </FlexBox>
    </FlexBox>
  );
}
