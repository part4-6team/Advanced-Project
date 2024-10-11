import Image from 'next/image';

export default function GoogleOauthButton() {
  return (
    <button type="button">
      <Image
        src="/icons/kakaotalk.svg"
        alt="카카오 간편 회원가입"
        width={42}
        height={42}
      />
    </button>
  );
}
