import { authAxiosInstance } from '@libs/axios/axiosInstance';

function encoding(data: File['name']) {
  const index = data.lastIndexOf('.');
  const filename = data.substring(0, index);
  const extension = data.substring(index);
  const encode = btoa(encodeURI(filename));
  const result = encode + extension;

  return result;
}

export const postImage = async (file: File) => {
  const formData = new FormData();
  const filename = encoding(file.name);
  formData.append('image', file, filename);
  const response = await authAxiosInstance.post('images/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.url;
};
