import Divider from '@components/auth/Divider';
import GoogleOauthButton from '@components/auth/GoogleOauthButton';
import KaKaoOauthButton from '@components/auth/KaKaoOauthButton';
import SignUpForm from '@components/auth/SignUpForm';

export default function SignUp() {
  return (
    <div className="flex w-full flex-col items-center">
      <SignUpForm />
      <div className="mb-[80px] mt-[24px] flex w-[343px] flex-col gap-[16px] md:mt-[50px] md:w-[460px]">
        <Divider />
        <div className="flex items-center justify-between">
          <span className="text-lg-medium text-white">간편 회원가입하기</span>
          <div className="flex gap-[16px]">
            <GoogleOauthButton />
            <KaKaoOauthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
