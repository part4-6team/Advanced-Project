import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface IconButtonMotionProps {
  children: ReactNode;
  className?: string;
}

export default function IconButtonMotion({
  children,
  className,
}: IconButtonMotionProps) {
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
      className={className}
    >
      {children}
    </motion.div>
  );
}
