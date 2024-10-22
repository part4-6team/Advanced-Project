export interface Writer {
  nickname: string;
  id: number;
}

export interface List {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  wirter: Writer;
  image: string;
  title: string;
  id: number;
}

export interface Card {
  totalCount: number;
  List: List;
}
