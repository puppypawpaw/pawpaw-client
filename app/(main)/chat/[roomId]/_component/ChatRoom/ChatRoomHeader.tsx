import Link from 'next/link';
import ArrowLeftIcon from '@/public/svgs/arrow-left.svg';
import FlexBox from '@/components/ui/FlexBox';
import React from 'react';
import ChatDropdownButton from './ChatDropdownButton';

const ChatRoomHeader = function ChatRoomHeader({ title }: { title: string }) {
  return (
    <FlexBox
      as="header"
      justify="between"
      align="center"
      className=" p-8 h-14 tablet:h-24 w-full gap-4 bg-white border-b-[1px]"
    >
      <FlexBox className="gap-1">
        <Link href="/community">
          <ArrowLeftIcon className="w-7 h-7" />
        </Link>
        <p className="header2">{title}</p>
      </FlexBox>
      <ChatDropdownButton />
    </FlexBox>
  );
};
export default React.memo(ChatRoomHeader);
