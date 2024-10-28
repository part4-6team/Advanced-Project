export interface Writer {
  image: string;
  nickname: string;
  id: number;
}

export interface CommentList {
  writer: Writer;
}

export interface Comment {
  nextCursor: number;
  list: CommentList[];
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}
