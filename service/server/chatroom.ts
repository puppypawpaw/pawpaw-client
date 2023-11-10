import { BoardList, ChatList, ChatRoomInfo } from '@/types/types';
import { cookies } from 'next/headers';

const options = {
  credentials: 'include',
  headers: {
    Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
  },
} as const;
export async function fetchFilteredChatRooms(
  query: string,
): Promise<ChatList[]> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/search?query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ChatRoomList Error Code: ${response.status}`,
    );
  }
  return response.json();
}
export async function fetchFilteredBoards(
  query: string,
  page: number = 1,
): Promise<BoardList> {
  const url = `${process.env.SERVER_API_URL}/api/board/search?pageNumber=${page}&pageSize=6&query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch BoardList Error Code: ${response.status}`);
  }
  return response.json();
}
const ITEM_PER_PAGE = 6;
export async function fetchBoardsPages(query: string) {
  const url = `${process.env.SERVER_API_URL}/api/board/search?query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch BoardList Error Code: ${response.status}`);
  }
  const data = await response.json();
  const totalPage = Math.ceil(data.content.length / ITEM_PER_PAGE);
  return totalPage;
}
export async function fetchChatRoomsPage(query: string) {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/search?query=${query}`;
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ChatroomList Error Code: ${response.status}`,
    );
  }
  const data = await response.json();
  const totalPage = Math.ceil(data.length / ITEM_PER_PAGE);
  return totalPage;
}

export async function getChatRoomInfo(roomId: string): Promise<ChatRoomInfo> {
  const url = `${process.env.SERVER_API_URL}/api/chatroom/${roomId}`;
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      Cookie: `ACCESS=${cookies().get('ACCESS')?.value}`,
    },
  });
  return response.json();
}
