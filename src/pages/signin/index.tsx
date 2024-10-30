import Divider from '@components/auth/Divider';
import GoogleOauthButton from '@components/auth/GoogleOauthButton';
import KakaoOauthButton from '@components/auth/KakaoOauthButton';
import SignInForm from '@components/auth/SignInForm';

export default function SignIn() {
  return (
    <div className="flex w-full flex-col items-center">
      <SignInForm />
      <div className="mb-20 mt-6 flex w-[343px] flex-col gap-4 md:mt-[50px] md:w-[460px]">
        <Divider />
        <div className="flex items-center justify-between">
          <span className="text-lg-medium text-white">간편 로그인하기</span>
          <div className="flex gap-4">
            <GoogleOauthButton />
            <KakaoOauthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
