import ChatRoom from '@/components/pages/chat/ChatRoom/ChatRoom';
import ChatUserList from '@/components/pages/chat/ChatRoom/ChatUserList';
import ScheduleList from '@/components/pages/chat/Schedule/ScheduleList';

export default function ChatRoomPage({
  params,
}: {
  params: { roomId: string };
}) {
  console.log(params.roomId);

  return (
    <main className="flex w-screen">
      <ChatRoom roomId={params.roomId} />
      <aside className="flex-col hidden w-3/6 h-screen min-w-fit tablet:flex">
        <ChatUserList />
        <ScheduleList />
      </aside>
    </main>
  );
}
