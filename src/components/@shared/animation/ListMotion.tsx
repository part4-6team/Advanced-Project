import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ListMotionProps {
  children: ReactNode;
  className?: string;
}

function ListMotion({ children, className }: ListMotionProps) {
  return (
    <motion.li
      initial="hidden"
      whileHover={{ marginLeft: '12px' }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.li>
  );
}

export default ListMotion;
