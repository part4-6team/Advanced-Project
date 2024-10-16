import dayjs from 'dayjs';
import 'dayjs/locale/ko';

// 한국어 로케일
dayjs.locale('ko');

const useFormattedDate = (date: dayjs.Dayjs) => {
  const formattedDate = date.format('M월 D일 (ddd)');

  return formattedDate;
};

export default useFormattedDate;
