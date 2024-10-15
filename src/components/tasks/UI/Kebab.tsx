import KebabIcon from '@icons/kebab_small.svg';

interface KebabProps {
  onClick?: () => void;
}

export default function Kebab({ onClick }: KebabProps) {
  return (
    <button type="button" onClick={onClick}>
      <KebabIcon />
    </button>
  );
}
