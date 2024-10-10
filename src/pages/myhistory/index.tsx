import CheckBoxInactiveIcon from 'public/icons/checkbox_inactive.svg';
import CheckBoxIconActiveIcon from 'public/icons/checkbox_active.svg';
import KebabIcon from 'public/icons/kebab_small.svg';
import { useState } from 'react';
import clsx from 'clsx';

export default function Myhistory() {
  const [checkitem, setCheckItem] = useState(false);

  const ToggleCheckBox = () => {
    setCheckItem(!checkitem);
  };

  return (
    <main className="max-[360px] mx-auto mt-8 w-auto text-text-primary">
      <h1 className="mb-[27px] ml-4 text-2lg-bold ">마이 히스토리</h1>
      <section className="mx-4 mb-10">
        <h2 className="mb-4 text-lg-medium">2024년 1월 11일</h2>
        <div className="flex flex-col gap-4  ">
          <div className=" relative flex items-center justify-between  rounded-md bg-background-secondary px-3.5 py-2.5 text-md-regular">
            <div className="flex items-center gap-1.5 ">
              <button onClick={ToggleCheckBox}>
                {checkitem ? (
                  <CheckBoxIconActiveIcon />
                ) : (
                  <CheckBoxInactiveIcon />
                )}
              </button>
              <span
                className={clsx({
                  'line-through': checkitem === true,
                })}
              >
                법인 설립 안내 드리기
              </span>
            </div>
            <KebabIcon />
          </div>
        </div>
      </section>
    </main>
  );
}
