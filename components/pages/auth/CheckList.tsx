import React from 'react';
import Check from '@/public/Auth/check.svg';
import Link from 'next/link';

interface Props {
  text: string;
  to?: string;
  isChecked: boolean;
  setCheck: () => void;
}

export default function CheckList({ text, to, isChecked, setCheck }: Props) {
  return (
    <label className="cursor-pointer">
      <div className="flex items-center gap-[18px]">
        <Check className={isChecked ? 'fill-primary-200' : 'fill-grey-300'} />
        <div className="flex items-center gap-[10px]">
          <span className="text-lg leading-[26px] text-grey-600">{text}</span>
          {to && (
            <Link
              href={to}
              className="text-lg leading-[26px] text-grey-600 border-b-[1px] border-grey-600"
            >
              보기
            </Link>
          )}
        </div>
      </div>
      <input
        type="checkbox"
        className="hidden appearance-none"
        checked={isChecked}
        onChange={setCheck}
      />
    </label>
  );
}
