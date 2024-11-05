import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface TitleMotionProps {
  children: ReactNode;
  className?: string;
}

export default function TitleMotion({ children, className }: TitleMotionProps) {
  const letters = children ? Array.from(children.toString()) : [];

  return (
    <motion.div className={`inline-flex ${className}`}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.2,
            transition: {
              duration: 0.2,
              ease: 'easeInOut',
              delay: index * 0.1,
            },
          }}
          style={{ display: 'inline-block', margin: '0 2px' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
