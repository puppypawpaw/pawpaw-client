import { Dispatch, SetStateAction, useState } from 'react';
import Image from 'next/image';
import CameraIcon from '@/public/Camera.svg';

const FirstImageList = [
  '/images/AddChatModal/default2.webp',
  '/images/AddChatModal/default3.webp',
  '/images/AddChatModal/default4.webp',
  '/images/AddChatModal/default5.webp',
  '/images/AddChatModal/default6.webp',
  '/images/AddChatModal/default7.webp',
  '/images/AddChatModal/default8.webp',
];
const SecondImageList = [
  '/images/AddChatModal/default9.webp',
  '/images/AddChatModal/default10.webp',
  '/images/AddChatModal/default11.webp',
  '/images/AddChatModal/default12.webp',
];

interface ImageListProps {
  setImage: Dispatch<SetStateAction<string>>;
}

export default function ImageList({ setImage }: ImageListProps) {
  const [imaegList, setImageList] = useState<string[]>(FirstImageList);
  const onNetxImageList = () => {
    setImageList(SecondImageList);
  };
  const onPrevImageList = () => {
    setImageList(FirstImageList);
  };
  return (
    <div className="flex-col flex-1 hidden gap-5 tablet:flex">
      <div className="flex justify-between">
        <span className="text-grey-600 body3">커버선택</span>
        <div className="flex gap-2">
          <span className="caption2 text-grey-500">1 / 2</span>
          <div>
            <button type="button" onClick={onPrevImageList}>
              이전
            </button>
            <button type="button" onClick={onNetxImageList}>
              다음
            </button>
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-4 gap-2 ">
        <li>
          <label
            className="flex flex-col items-center justify-center w-full h-full cursor-pointer bg-grey-200"
            htmlFor="imageUpload"
          >
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              accept="image/jpg,impge/png,image/jpeg,image/gif,image/webp"
            />
            <CameraIcon />
            <span className="capion1 text-grey-400">사진추가</span>
          </label>
        </li>
        {imaegList.map((img) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
          <li
            key={img}
            onClick={() => setImage(img)}
            className="cursor-pointer "
          >
            <Image
              src={img}
              alt=""
              width={120}
              height={90}
              className="h-24 duration-150 w-30 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
