import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ListMotionProps {
  children: ReactNode;
  className?: string;
}

function ListMotion({ children, className }: ListMotionProps) {
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.28 }}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export default ListMotion;
