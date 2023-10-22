import Board from '@/components/pages/board';

export default async function BoardPage({
  params: { boardId },
}: {
  params: { boardId: number };
}) {
  return (
    <main className="flex flex-1 w-screen">
      <Board boardId={boardId} />
    </main>
  );
}
