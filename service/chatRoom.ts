import { ChatRoomUserList, Schedule, ScheduleList } from '@/types/types';
import Toast from '@/utils/notification';
import { AuthError, ImageSizeError } from '@/lib/error';

interface ChatRoomType {
  image: File;
  body: {
    name: string;
    description: string;
    hashTagList: string[];
    searchable: boolean;
    locationLimit: boolean;
  };
}
// 채팅방 생성 API
export async function postChatRoom(chatRoomData: ChatRoomType) {
  try {
    const url = `/endpoint/api/chatroom`;
    const formData = new FormData();
    const { body, image } = chatRoomData;
    formData.append(
      'body',
      new Blob([JSON.stringify({ ...body })], { type: 'application/json' }),
    );
    formData.append('image', image);
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });
    if (response.status === 413) {
      throw new ImageSizeError('이미지 크기가 업로드 제한을 초과했어요.😢');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    if (error instanceof ImageSizeError) {
      Toast.error(error.message);
    }
    throw error;
  }
}
// 채팅룸 입장 API
export async function joinChatRoom(id: number) {
  const url = `/endpoint/api/chatroom/${id}/participants`;
  try {
    const response = await fetch(url, {
      method: 'POST',
    });
    if (response.status === 401) {
      throw new Error('로그인이 필요한 서비스입니다.');
    }
    if (!response.ok) {
      throw new Error(`서버 오류:${response.status}`);
    }
  } catch (error) {
    console.error(error);
  }
}
// 채팅룸 나가기 API
export async function leaveChatRoom(roomId: string) {
  try {
    const url = `/endpoint/api/chatroom/${roomId}/participants`;
    const response = await fetch(url, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    window.location.replace('/community');
  } catch (error) {
    console.error(error);
  }
}

// 현재 채팅룸에 참여중인 유저리스트 조회 API
export async function getChatroomUserList(
  chatRoomId: string,
): Promise<ChatRoomUserList[]> {
  try {
    const url = `/endpoint/api/chatroom/${chatRoomId}/participants`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('채팅룸 참가 유저리스트를 불러오지 못하였습니다.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// 채팅룸에 등록되어있는 종료되지않은 스케줄 리스트 조회 API
export async function getScheduleList(roomId: string): Promise<ScheduleList[]> {
  try {
    const url = `/endpoint/api/chatroom/${roomId}/schedule`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('스케줄 리스트를 불러오지 못하였습니다.');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 채팅룸 스케줄 등록 API
export async function postSchedule(
  roomId: string,
  scheduleInfo: Omit<Schedule, 'id'>,
) {
  try {
    const url = `/endpoint/api/chatroom/${roomId}/schedule`;
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(scheduleInfo),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`서버오류:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
// 현재 채팅에 참여중인 유저를 제외한 전체유저 검색 API
export async function getSearchedUserList(roomId: string, nickname: string) {
  const url = `/endpoint/api/chatroom/${roomId}/non-participants?nickname=${nickname}`;
  const response = await fetch(url);
  return response.json();
}
// 현재 채팅에 참여중인 유저를 제외한 유저 초대 API
export async function inviteUserToChatRoom(
  roomId: string,
  userId: { userId: string },
) {
  try {
    const url = `/endpoint/api/chatroom/${roomId}/invite`;
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(userId),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error('유저초대 에러');
  }
}

// 스케줄 참여 API
export async function joinSchedule(roomId: string, scheduleId: number) {
  try {
    const url = `/endpoint/api/chatroom/${roomId}/schedule/${scheduleId}/participant`;
    const response = await fetch(url, { method: 'POST' });
    console.log(response);
    if (response.status === 401) {
      throw new AuthError('로그인이 필요합니다.');
    }
  } catch (error) {
    console.error(error);
  }
}
