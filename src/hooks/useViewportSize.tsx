import { useEffect, useState } from 'react';

const useViewportSize = () => {
  const [viewport, setViewport] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateViewportSize = () => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateViewportSize);
    return () => {
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);

  // 화면 크기에 따라 디바이스 유형 판별
  const isMobile = viewport.width < 768;
  const isTablet = viewport.width >= 768 && viewport.width < 1280;
  const isPC = viewport.width >= 1280;

  return { viewport, isMobile, isTablet, isPC };
};

export default useViewportSize;
