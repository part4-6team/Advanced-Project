import Sidebar from '@components/@shared/SideBar';

//button 부분에 원하는 트리거 넣으시면 됩니다!

export default function Test() {
  return (
    <>
      <Sidebar
        position="left"
        trigger={(togglesSidebar) => (
          <button className=" text-red-50" onClick={togglesSidebar}>
            왼쪽 사이드바 열기
          </button>
        )}
      >
        <nav>
          <ul>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">홈</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">내용</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">고기먹기</a>
            </li>
          </ul>
        </nav>
      </Sidebar>
      <div></div>
      <Sidebar
        position="right"
        trigger={(togglesSidebar) => (
          <button className=" text-red-50" onClick={togglesSidebar}>
            오른쪽 사이드바 열기
          </button>
        )}
      >
        <nav>
          <ul>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">홈</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">내용</a>
            </li>
            <li className="px-4 py-2 hover:text-brand-primary">
              <a href="#">고기먹기</a>
            </li>
          </ul>
        </nav>
      </Sidebar>
    </>
  );
}
