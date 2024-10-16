import Image from 'next/image';

import ICON_PATHS from '@constants/iconPaths';

export default function Pagination() {
  return (
    <div className="my-auto flex items-center gap-1">
      <button
        type="button"
        className="h-4 w-4 rounded-full bg-background-secondary"
      >
        <Image
          alt="왼쪽 화살표 아이콘"
          src={ICON_PATHS.ARROW_LEFT}
          width={12}
          height={12}
          className="mx-auto"
        />
      </button>
      <button
        type="button"
        className="h-4 w-4 rounded-full bg-background-secondary"
      >
        <Image
          alt="오른쪽 화살표 아이콘"
          src={ICON_PATHS.ARROW_RIGHT}
          width={12}
          height={12}
          className="mx-auto"
        />
      </button>
    </div>
  );
}
