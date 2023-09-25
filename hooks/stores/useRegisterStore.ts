import { create } from 'zustand';
import { termList } from '@/constant/term';
import { devtools } from 'zustand/middleware'; // 미들웨어를 통해 Redux-devtools를 사용
import { Species } from '@/types/types';

interface RegisterStore {
  step: number;
  allCheked: boolean;
  checkList: boolean[];
  position: { lat: number; lng: number; name: string };
  searchHistory: string;
  nickname: string;
  petInfo: {
    name: string;
    species: Species | null;
  };
  setStep: (curStep: number) => void;
  setAllCheked: (checked: boolean) => void;
  setCheckList: (index: number, checked: boolean) => void;
  setPosition: (position: { lat: number; lng: number; name: string }) => void;
  setSearchHistory: (searchHistory: string) => void;
  setNickname: (nickname: string) => void;
  setPetInfo: (info: { name: string; species: Species | null }) => void;
}

export const useRegisterStore = create<
  RegisterStore,
  [['zustand/devtools', RegisterStore]]
>(
  devtools((set) => ({
    step: 1,
    allCheked: false,
    checkList: Array(termList.length).fill(false),
    position: { lat: 0, lng: 0, name: '' },
    searchHistory: '',
    nickname: '',
    petInfo: {
      name: '',
      species: null,
    },
    setStep: (curStep: number) => set((store) => ({ ...store, step: curStep })),
    setAllCheked: (checked: boolean) =>
      set((store) => ({
        ...store,
        allCheked: checked,
        checkList: checked
          ? Array(termList.length).fill(true)
          : Array(termList.length).fill(false),
      })),
    setCheckList: (index: number, checked: boolean) =>
      set((store) => {
        const newCheckList = [...store.checkList];
        newCheckList[index] = checked;
        return { ...store, checkList: newCheckList };
      }),
    setPosition: (position: { lat: number; lng: number; name: string }) =>
      set((store) => ({ ...store, position })),
    setSearchHistory: (searchHistory: string) =>
      set((store) => ({ ...store, searchHistory })),
    setNickname: (nickname: string) => set((store) => ({ ...store, nickname })),
    setPetInfo: (petInfo: { name: string; species: Species | null }) =>
      set((store) => ({ ...store, petInfo })),
  })),
);