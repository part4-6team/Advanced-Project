import Image from 'next/image';

export default function GoogleOauthButton() {
  return (
    <button type="button">
      <Image
        src="/icons/google.svg"
        alt="구글 간편 회원가입"
        width={42}
        height={42}
      />
    </button>
  );
}
