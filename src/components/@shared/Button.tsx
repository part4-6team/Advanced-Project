import clsx from 'clsx';

type ButtonProps = {
  bgColor?: 'green' | 'red' | 'white' | 'transparent' | 'gradient';
  fontColor?: 'white' | 'gray' | 'green';
  size?: 'full';
  shape?: 'square' | 'round';
  fontSize?: '16' | '14';
  width?: number;
  height?: number;
  border?: 'none' | 'green' | 'white' | 'gray';
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Button({
  bgColor = 'green',
  size,
  fontColor = 'white',
  fontSize = '16',
  shape = 'square',
  border = 'none',
  children,
  width = 136,
  height = 48,
  ...props
}: ButtonProps) {
  const buttonClass = clsx('base-class', {
    'bg-brand-primary': bgColor === 'green',
    'bg-status-danger': bgColor === 'red',
    'bg-background-inverse': bgColor === 'white',
    'bg-transparent': bgColor === 'transparent',
    'bg-brand-gradient': bgColor === 'gradient',
    'border border-brand-primary': border === 'green',
    'border border-text-secondary': border === 'gray',
    'border border-text-inverse': border === 'white',
    'rounded-[12px]': shape === 'square',
    'rounded-[40px]': shape === 'round',
    'text-text-primary': fontColor === 'white',
    'text-text-default': fontColor === 'gray',
    'text-brand-primary': fontColor === 'green',
    'text-lg-semibold': fontSize === '16',
    'text-md-semibold': fontSize === '14',
    'w-full': size === 'full',
  });

  // style에서 width와 height는 size가 'full'이 아닌 경우에만 적용
  const buttonStyle =
    size === 'full'
      ? { height: `${height}px` }
      : { width: `${width}px`, height: `${height}px` };

  return (
    <button
      type="button"
      className={buttonClass}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
}
