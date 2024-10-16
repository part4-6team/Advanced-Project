import { useState } from 'react';

import ActiveCheckBoxIcon from '@icons/checkbox_active.svg';
import InActiveCheckBoxIcon from '@icons/checkbox_inactive.svg';

interface CheckBoxProps {
  onClick?: () => void;
}

export default function CheckBox({ onClick }: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button type="button" onClick={handleClick}>
      {isChecked ? <ActiveCheckBoxIcon /> : <InActiveCheckBoxIcon />}
    </button>
  );
}
