/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState, ReactNode } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

interface DateContextProps {
  date: dayjs.Dayjs;
  setDate: (date: dayjs.Dayjs) => void;
  today: dayjs.Dayjs;
}

const DateContext = createContext<DateContextProps | undefined>(undefined);

export function DateProvider({ children }: { children: ReactNode }) {
  const today = dayjs(); // 오늘 날짜
  const [date, setDate] = useState<dayjs.Dayjs>(today); // 현재 날짜 상태

  dayjs.locale('ko');

  return (
    <DateContext.Provider value={{ date, setDate, today }}>
      {children}
    </DateContext.Provider>
  );
}

export const useDate = (): DateContextProps => {
  const context = useContext(DateContext);
  if (!context) {
    throw new Error('DateContext error');
  }
  return context;
};
