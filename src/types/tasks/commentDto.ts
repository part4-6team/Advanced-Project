// Request
export interface CommentRequestBody {
  post: {
    content: string;
  };
  patch: {
    content: string;
  };
}

// Response
export interface CommentDto {
  id: number;
  taskId: number;
  teamId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
