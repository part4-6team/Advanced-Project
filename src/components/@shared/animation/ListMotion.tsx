import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ListMotionProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
}

function ListMotion({ children, className, isOpen = false }: ListMotionProps) {
  return (
    <motion.li
      initial="hidden"
      whileHover={isOpen ? { marginLeft: '12px' } : { translateX: '12px' }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.li>
  );
}

export default ListMotion;
