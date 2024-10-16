import InputTask from '@components/mysetting/inputTask';
import SecessionIcon from 'public/icons/secession.svg';

export default function MySetting() {
  return (
    <div className="mt-6 flex min-h-screen flex-col items-center gap-6">
      <header className="w-full max-w-[792px] text-left text-2lg-bold text-text-primary">
        <span className="ml-6">계정설정</span>
      </header>
      <div className="w-full max-w-[792px]">
        <InputTask />
      </div>
      <footer className="flex w-full max-w-[792px] items-center gap-2 text-left">
        <SecessionIcon className="ml-6" />
        <span className="text-lg-medium text-status-danger">회원 탈퇴하기</span>
      </footer>
    </div>
  );
}
