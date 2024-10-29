import Image from 'next/image';
import styles from '../../styles/carAnimation.module.css';

export default function LoadingSpinner() {
  return (
    <>
      <div
        className={`${styles.carAnimation} relative mx-auto mt-[100px] h-[226px] w-[289px]`}
      >
        <Image
          src="/images/loading1.png"
          alt="기차 타는 아저씨"
          fill
          className={styles.carImage}
        />
      </div>
      <p className="mt-[50%] text-center text-[30px] text-brand-tertiary">
        Loading...
      </p>
    </>
  );
}
