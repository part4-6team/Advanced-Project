import useViewportSize from './useViewportSize';

interface ImageDetail {
  src: string;
  width?: number;
  height?: number;
}

interface ImageDetails {
  mobile: ImageDetail;
  tablet: ImageDetail;
  pc: ImageDetail;
}

const useResponsiveImageDetails = (defaultSrc: ImageDetails) => {
  const { isMobile, isTablet, isPC } = useViewportSize();

  let imageDetails: ImageDetail = {
    src: '',
    width: 0,
    height: 0,
  };

  // 화면 크기에 따라 이미지 소스와 크기 설정
  if (isMobile) {
    imageDetails = {
      ...defaultSrc.mobile,
    };
    if (defaultSrc.mobile.width !== undefined) {
      imageDetails.width = defaultSrc.mobile.width;
    }
    if (defaultSrc.mobile.height !== undefined) {
      imageDetails.height = defaultSrc.mobile.height;
    }
  } else if (isTablet) {
    imageDetails = {
      ...defaultSrc.tablet,
    };
    if (defaultSrc.tablet.width !== undefined) {
      imageDetails.width = defaultSrc.tablet.width;
    }
    if (defaultSrc.tablet.height !== undefined) {
      imageDetails.height = defaultSrc.tablet.height;
    }
  } else if (isPC) {
    imageDetails = {
      ...defaultSrc.pc,
    };
    if (defaultSrc.pc.width !== undefined) {
      imageDetails.width = defaultSrc.pc.width;
    }
    if (defaultSrc.pc.height !== undefined) {
      imageDetails.height = defaultSrc.pc.height;
    }
  }

  return imageDetails;
};

export default useResponsiveImageDetails;
