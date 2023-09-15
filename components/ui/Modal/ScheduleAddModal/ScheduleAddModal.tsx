import { useState, useEffect } from 'react';
import { startOfDay } from 'date-fns';
import Button from '@/components/ui/Button';
import FlexBox from '@/components/ui/FlexBox';
import XIcon from '@/public/X.svg';
import useInput from '@/hooks/common/useInput';
import DatePicker from '@/components/ui/DatePicker';
import TimeSelect from './TimeSelect';

export default function ScheduleAddModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [value, onChangeValue] = useInput('');
  const [isChecked, setIsChecked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    if (isChecked) {
      setStartDate(startOfDay(startDate));
      setEndDate(startOfDay(endDate));
    }
  }, [isChecked]);
  const isScheduleValueSet = !!(startDate >= endDate || !value);

  return (
    <FlexBox direction="column" className="w-full md:w-[672px] gap-4 ">
      <div className="self-end">
        <button type="button" onClick={closeModal}>
          <XIcon className="w-8 h-8" />
        </button>
      </div>
      <FlexBox
        direction="column"
        className="w-full bg-white rounded-[10px] p-9 gap-7"
      >
        <FlexBox direction="column" className="w-full gap-4">
          <h2 className="w-full header2">스케줄 추가</h2>
          <input
            type="text"
            className="px-5 py-4 rounded-[10px] w-full focus-primary body1"
            placeholder="스케줄 제목을 입력해보세요"
            value={value}
            onChange={onChangeValue}
          />

          {/** 시작 날짜 */}
          <FlexBox direction="column" className="w-full gap-2">
            <span className="w-full body1">시작 날짜</span>
            <div className="flex flex-col w-full gap-2 tablet:flex-row">
              <DatePicker
                selectedDate={startDate}
                setSelectedDate={setStartDate}
              />
              {!isChecked && (
                <TimeSelect
                  selectedDate={startDate}
                  setSelectedDate={setStartDate}
                />
              )}
            </div>
          </FlexBox>

          {/** 종료 날짜 */}
          <FlexBox direction="column" className="w-full gap-2">
            <span className="w-full body1">종료 날짜</span>
            <div className="flex flex-col w-full gap-2 tablet:flex-row">
              <DatePicker selectedDate={endDate} setSelectedDate={setEndDate} />
              {!isChecked && (
                <TimeSelect
                  selectedDate={endDate}
                  setSelectedDate={setEndDate}
                />
              )}
            </div>
          </FlexBox>

          <label
            htmlFor="allday"
            className="flex items-center self-start gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              id="allday"
              className="w-6 h-6 rounded-full checked:bg-primary-200 checked:hover:bg-primary-200"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <p className="body1">하루종일</p>
          </label>
        </FlexBox>
        <div className="flex w-full gap-3">
          <Button variant="secondary" onClickAction={closeModal} fullWidth>
            취소
          </Button>
          <Button disabled={isScheduleValueSet} fullWidth>
            등록
          </Button>
        </div>
      </FlexBox>
    </FlexBox>
  );
}