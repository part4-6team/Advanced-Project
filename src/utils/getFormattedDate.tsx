import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// 한국어 로케일
dayjs.locale('ko');

const getFormattedDate = (date: dayjs.Dayjs | string): string => {
  const dayjsDate = typeof date === 'string' ? dayjs(date) : date;
  return dayjsDate.format('M월 D일 (ddd)');
};

export default getFormattedDate;
