import Bookmark from '@/public/svgs/Pawzone/bookmark.svg';
import Accesible from '@/public/svgs/Pawzone/accessible.svg';
import Comfortable from '@/public/svgs/Pawzone/comfortable.svg';
import Quiet from '@/public/svgs/Pawzone/quiet.svg';
import Safe from '@/public/svgs/Pawzone/safe.svg';
import Scenic from '@/public/svgs/Pawzone/scenic.svg';
import Leaf from '@/public/svgs/Pawzone/leaf.svg';
import { cn } from '@/utils/common';

export type ChipType = keyof typeof chipMap;

interface Props {
  type: ChipType;
}

const chipMap = {
  MOST_SAVED: {
    text: '저장 많은',
    background: 'bg-yellow-30',
    iconColor: 'fill-yellow-100',
    icon: Bookmark,
  },
  CLEAN: {
    text: '쾌적한',
    background: 'bg-primary-30',
    iconColor: 'fill-primary-200',
    icon: Leaf,
  },
  SCENIC: {
    text: '풍경 좋은',
    background: 'bg-grey-200',
    iconColor: 'fill-grey-400',
    icon: Scenic,
  },
  COMFORTABLE: {
    text: '편안한',
    background: 'bg-blue-30',
    iconColor: 'fill-blue-100',
    icon: Comfortable,
  },
  ACCESSIBLE: {
    text: '접근성이 좋은',
    background: 'bg-purple-30',
    iconColor: 'fill-purple-100',
    icon: Accesible,
  },
  SAFE: {
    text: '안전한',
    background: 'bg-red-30',
    iconColor: 'fill-red-100',
    icon: Safe,
  },
  QUIET: {
    text: '조용한',
    background: 'bg-grey-30',
    iconColor: 'fill-grey-100',
    icon: Quiet,
  },
};

export default function Chip({ type }: Props) {
  const ButtonIcon = chipMap[type].icon;
  return (
    <div
      className={cn(
        'rounded-[10px] flex gap-[1px] py-1 px-2',
        chipMap[type].background,
      )}
    >
      <ButtonIcon
        className={cn('w-[22px] h-[22px]', chipMap[type].iconColor)}
      />
      <p className="body3 text-grey-800">{chipMap[type].text}</p>
    </div>
  );
}
