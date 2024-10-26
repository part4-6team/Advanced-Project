import { useState } from 'react';

interface ValidationError {
  [field: string]: { isError: boolean; message: string };
}

export const useValidation = () => {
  const [errors, setErrors] = useState<ValidationError>({});

  // 여러 field의 에러 상태를 관리
  const setError = (field: string, isError: boolean, message: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: { isError, message },
    }));
  };

  // 모달이 닫히는 등의 동작 시 에러 상태 초기화에 이용
  const clearError = (field: string) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: { isError: false, message: '' },
    }));
  };

  // onBlur 시 폼이 비어 있는지 검사
  const validateOnBlur = (field: string, value: any) => {
    if (!value) {
      setError(field, true, '최소 1글자 이상 입력하세요!');
    } else {
      setError(field, false, '');
    }
  };

  // 폼을 제출했을 때 유효성 검사
  const validateValueOnSubmit = (
    field: string,
    list: string[],
    item: string
  ) => {
    if (list.includes(item)) {
      setError(field, true, '이미 존재하는 이름입니다.');
      return false;
    }
    return true;
  };

  return {
    errors,
    setError,
    clearError,
    validateOnBlur,
    validateValueOnSubmit,
  };
};
