export interface Writer {
  nickname: string;
  id: number;
}

export interface list {
  updatedAt: string;
  createdAt: string;
  likeCount: number;
  writer: Writer;
  image: string;
  title: string;
  id: number;
}

export interface Card {
  totalCount: number;
  list: list[];
}
