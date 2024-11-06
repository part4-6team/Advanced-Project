import { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import styles from '@styles/carAnimation.module.css';

interface IconSparkleMotionProps {
  children: ReactNode;
  className?: string;
}

export default function IconSparkleMotion({
  children,
  className,
}: IconSparkleMotionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.13 }}
      transition={{ duration: 0.2 }}
      whileTap={{
        scale: 1,
        transition: {
          duration: 0.15,
        },
      }}
      className={`${isHovered ? styles.sparkle : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)} // 마우스가 버튼 위에 있을 때
      onMouseLeave={() => setIsHovered(false)} // 마우스가 버튼에서 나갔을 때
    >
      {children}
    </motion.div>
  );
}
