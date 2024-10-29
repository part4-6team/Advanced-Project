import clsx from 'clsx';
import HeartIcon from 'public/icons/heart.svg';
import HertRedIcon from 'public/icons/heartRed.svg';
import { useState } from 'react';

export default function Heart() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <button
        onClick={toggleLike}
        type="button"
        className={clsx(liked ? 'hidden' : 'block')}
      >
        <HeartIcon />
      </button>
      <button
        onClick={toggleLike}
        type="button"
        className={clsx(!liked ? 'hidden' : 'block')}
      >
        <HertRedIcon />
      </button>
    </>
  );
}
