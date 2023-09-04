import ArrowLeftIcon from '@/public/arrow-left.svg';
import DotsIcon from '@/public/tabler_dots.svg';
import ScheduleCard from './ScheduleCard';

interface PropsType {
  closeModal: () => void;
}

export default function ScheduleListMobile({ closeModal }: PropsType) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 w-full h-full bg-white tablet:hidden">
      <header className="flex w-full justify-between  h-16 items-center px-10 py-6 gap-4 tablet:h-20 border-b-[1px]">
        <div className="flex">
          <button type="button" onClick={closeModal}>
            <ArrowLeftIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
          <p className="body1 sm:header2">스케줄</p>
        </div>
        <button type="button" className="p-2 body2 text-primary-200">
          <DotsIcon className="w-7 h-7" />
        </button>
      </header>
      <ul className="flex flex-col overflow-auto h-[calc(100%-4rem)] gap-4 p-10">
        <ScheduleCard />
      </ul>
    </div>
  );
}