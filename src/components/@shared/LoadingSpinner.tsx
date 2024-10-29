import styles from '../../styles/carAnimation.module.css';

export default function LoadingSpinner() {
  return (
    <div className="relative mt-[50px]">
      <p className="text-center text-[30px] text-brand-tertiary">Loading...</p>
      <div
        className={`${styles.carAnimation} relative mx-auto mt-[100px] h-[240px] w-[289px]`}
      >
        <img
          src="/images/loading1.png"
          alt="기차 타는 아저씨"
          className={styles.carImage}
        />
      </div>
    </div>
  );
}
