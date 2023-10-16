import { AuthError } from '@/lib/error';
import { PostBoardType, PostCommentType } from '@/types/types';

export async function postBoard(postBoardData: PostBoardType) {
  const url = `endpoint/api/board/register`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postBoardData),
  });
  return response.json();
}

export async function getBoardList(pageParam: number) {
  let url = `/endpoint/api/board/list?pageSize=5`;
  if (pageParam !== 0) {
    url += `&pageNumber=${pageParam}`;
  }
  try {
    const response = await fetch(url);
    if (response.status === 401) {
      throw new AuthError('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error instanceof AuthError) {
      window.location.replace('/auth/login');
      alert(error.message);
    }
    throw error;
  }
}

export async function postComment(postCommentData: PostCommentType) {
  const url = `endpoint/api/reply/register`;

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postCommentData),
  });
  return response.json();
}
