import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// 한국어 로케일
dayjs.locale('ko');

export const formatTaskListDate = (date: dayjs.Dayjs | string): string => {
  const dayjsDate = typeof date === 'string' ? dayjs(date) : date;
  return dayjsDate.format('M월 D일 (ddd)');
};

export const formatTaskCardDate = (date: dayjs.Dayjs | string): string => {
  const dayjsDate = typeof date === 'string' ? dayjs(date) : date;
  return dayjsDate.format('YYYY년 MM월 DD일');
};

export const formatTaskWriterDate = (date: dayjs.Dayjs | string): string => {
  const dayjsDate = typeof date === 'string' ? dayjs(date) : date;
  return dayjsDate.format('YYYY.MM.DD');
};
