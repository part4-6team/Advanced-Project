import { useForm } from 'react-hook-form';
import { useState } from 'react';

import Button from '@components/@shared/Button';
import Dropdown, { Option } from '@components/@shared/Dropdown';
import { Input, ScrollTextArea } from '@components/@shared/Input';
import ToggleIcon from '@icons/toggle.svg';

interface AddTaskFormProps {
  onClose: () => void;
}

const frequencyOptions: Option[] = [
  { label: 'ONCE', component: <div>반복 없음</div> },
  { label: 'DAILY', component: <div>매일</div> },
  { label: 'WEEKLY', component: <div>주 반복</div> },
  { label: 'MONTHLY', component: <div>월 반복</div> },
];

interface TaskFormData {
  name: string;
  description: string | null;
  startDate: string;
  frequency: string;
}

export default function AddTaskForm({ onClose }: AddTaskFormProps) {
  const [selectedFrequency, setSelectedFrequency] = useState<Option>(
    frequencyOptions[0]
  );
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<TaskFormData>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      description: null,
      startDate: '',
      frequency: 'ONCE',
    },
  });
  // 폼 제출 처리
  const onSubmit = async (data: TaskFormData) => {
    console.log('제출된 데이터:', data);

    // post Api 추가
    onClose();
  };

  const handleFrequencySelect = (option: Option) => {
    setSelectedFrequency(option);
    setValue('frequency', option.label || '', {
      shouldValidate: true,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <Input
        label="할 일 제목"
        placeholder="할 일 제목을 입력해주세요."
        inputProps={{
          ...register('name', { required: '제목은 필수 입력 사항입니다.' }),
        }}
        isError={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <Input
        label="시작 날짜 및 시간"
        inputProps={{
          ...register('startDate', {
            required: '시작 날짜는 필수 입력 사항입니다.',
          }),
        }}
        isError={!!errors.name}
        errorMessage={errors.name?.message}
      />
      <p>반복 설정</p>
      <Dropdown
        initialOption={selectedFrequency}
        options={frequencyOptions}
        onSelect={handleFrequencySelect}
        triggerIcon={<ToggleIcon />}
        triggerClass="bg-slate-900 text-md-medium text-text-default flex gap-2  py-2 px-[10px] rounded-xl items-center h-[44px]"
        optionsWrapClass="bg-slate-900 mt-2 rounded-xl border border-text-disabled"
        optionClass="px-4 rounded-xl md:w-[135px] md:h-[47px] w-[120px] h-[40px] justify-center text-md-regular md:text-lg-regular text-start hover:bg-background-tertiary"
      />
      <ScrollTextArea
        label="할 일 메모"
        placeholder="메모를 입력해주세요."
        inputProps={{
          ...register('description'),
        }}
      />
      <Button size="full" type="submit" disabled={!isValid}>
        만들기
      </Button>
    </form>
  );
}
