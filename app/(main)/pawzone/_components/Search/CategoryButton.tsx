import { CATEGORY_ICON, CATEGORY_TYPE } from '@/constant/place';
import { PlaceType } from '@/types/types';
import { useRouter } from 'next/navigation';

interface Props {
  type: PlaceType;
}

export default function CategoryButton({ type }: Props) {
  const router = useRouter();
  const ButtonIcon = CATEGORY_ICON[type];
  return (
    <button
      type="button"
      className="flex gap-1 items-center mt-4 py-2 px-[22px] bg-white rounded-[500px] shadow-searchBar"
      onClick={() => {
        router.push(`/pawzone/search/${CATEGORY_TYPE[type]}`);
      }}
    >
      <ButtonIcon className="w-[22px] h-[22px] fill-primary-200" />
      <span className="body4 text-grey-800">{CATEGORY_TYPE[type]}</span>
    </button>
  );
}
