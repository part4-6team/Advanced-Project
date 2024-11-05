import { useState } from 'react';
import CalenderIcon from '@icons/calendar.svg';
import IconButtonMotion from '@components/@shared/animation/IconButtonMotion';
import Calender from '../Calender';

export default function CalenderButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <IconButtonMotion>
        <button
          type="button"
          className="h-6 rounded-full bg-background-secondary p-[6px]"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <CalenderIcon />
        </button>
      </IconButtonMotion>
      {isOpen && (
        <div className="absolute z-10 mt-1">
          <Calender isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </div>
  );
}
