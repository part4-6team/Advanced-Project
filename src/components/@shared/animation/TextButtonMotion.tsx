import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TextButtonMotionProps {
  children: ReactNode;
  className?: string;
}
export default function TextButtonMotion({
  children,
  className,
}: TextButtonMotionProps) {
  return (
    <motion.div
      whileHover={{
        WebkitBackgroundClip: 'text',
        scale: 1.05,
      }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
