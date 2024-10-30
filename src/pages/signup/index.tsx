import Divider from '@components/auth/Divider';
import GoogleOauthButton from '@components/auth/GoogleOauthButton';
import KakaoOauthButton from '@components/auth/KakaoOauthButton';
import SignUpForm from '@components/auth/SignUpForm';

export default function SignUp() {
  return (
    <div className="flex w-full flex-col items-center">
      <SignUpForm />
      <div className="mb-20 mt-6 flex w-[343px] flex-col gap-4 md:mt-[50px] md:w-[460px]">
        <Divider />
        <div className="flex items-center justify-between">
          <span className="text-lg-medium text-white">간편 회원가입하기</span>
          <div className="flex gap-4">
            <GoogleOauthButton />
            <KakaoOauthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
