import Image from 'next/image';

type InputProps = {
  placeholder?: string;
  isError?: boolean;
  label?: string;
  errorMessage?: string;
  type?: 'default' | 'search';
  actionIcon?: React.ReactNode; // 입력 영역 뒤에 들어갈 아이콘
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
} & React.HTMLAttributes<HTMLDivElement>;

export function Input({
  placeholder = '',
  isError = false,
  label = '',
  errorMessage = '',
  inputProps,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col" {...props}>
      <label htmlFor="input" className="mb-3 text-lg-medium text-text-primary">
        {label}
      </label>
      <input
        className={`h-[48px] w-full rounded-[12px] bg-background-secondary p-[15px] text-lg-regular text-text-primary outline outline-[1px]
            focus:outline-none focus:outline-brand-primary ${isError ? 'outline-status-danger' : 'outline-[#343E4E]'}`}
        id="input"
        placeholder={placeholder}
        {...inputProps}
      />
      {isError && (
        <p className="mt-[10px] text-md-medium text-status-danger">
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export function SearchInput({
  placeholder = '',
  inputProps,
  ...props
}: InputProps) {
  return (
    <div
      className="flex h-[48px] w-full items-center gap-[5px] rounded-[12px] bg-background-secondary p-[15px] text-lg-regular text-text-primary outline outline-[1px] outline-[#343E4E]
            focus-within:outline-none focus-within:outline-brand-primary"
      {...props}
    >
      <span className="relative h-[20px] w-[20px]">
        <Image fill src="/icons/search.svg" alt="돋보기 아이콘" />
      </span>
      <input
        className="bg-transparent focus:outline-none"
        id="input"
        placeholder={placeholder}
        {...inputProps}
      />
    </div>
  );
}

export function IconInput({
  placeholder = '',
  isError = false,
  label = '',
  errorMessage = '',
  actionIcon,
  inputProps,
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col" {...props}>
      <label htmlFor="input" className="mb-3 text-lg-medium text-text-primary">
        {label}
      </label>
      <div className="relative">
        <input
          className={`h-[48px] w-full rounded-[12px] bg-background-secondary p-[15px] text-lg-regular text-text-primary outline outline-[1px]
            focus:outline-none focus:outline-brand-primary ${isError ? 'outline-status-danger' : 'outline-[#343E4E]'}`}
          id="input"
          placeholder={placeholder}
          {...inputProps}
        />
        {actionIcon && (
          <span className="absolute right-3 top-1/2 -translate-y-[50%] transform cursor-pointer">
            {actionIcon}
          </span>
        )}
      </div>
      {isError && (
        <p className="mt-[10px] text-md-medium text-status-danger">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
