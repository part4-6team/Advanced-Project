export default function getTimeAgo(dateString: string) {
  const now = new Date();
  const pastDate = new Date(dateString);
  // 밀리초 타임스탬프로 변환
  const diffInMs = now.getTime() - pastDate.getTime();

  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (minutes < 1) {
    return '방금 전';
  }
  if (hours < 1) {
    return `${minutes}분 전`;
  }
  if (days < 1) {
    return `${hours}시간 전`;
  }
  if (weeks < 1) {
    return `${days}일 전`;
  }
  if (months < 1) {
    return `${weeks}주 전`;
  }
  if (years < 1) {
    return `${months}달 전`;
  }
  return `${years}년 전`;
}
