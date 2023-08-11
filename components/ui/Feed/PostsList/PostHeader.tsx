import Image from 'next/image';
import FlexBox from '../../FlexBox';
import Button from '../../Button';
import Avatar from '../../Avatar';

export default function PostHeader({ userId }: { userId: number }) {
  return (
    <FlexBox justify="between" className="w-full">
      <FlexBox className="gap-[10px]">
        <Avatar
          size="xl"
          user_img="/Feed/desktop/tempProfilePic.svg"
          user_name={String(userId)}
        />
        <FlexBox direction="column" align="start" className="gap-[4px]">
          <FlexBox className="gap-[8px]">
            <div>{userId}</div>
            <Button size="md" variant="secondary">
              팔로우
            </Button>
          </FlexBox>
          <div className="text-[14px]">
            고양이 아무튼 자격증 보유중 ・ 3시간 전
          </div>
        </FlexBox>
      </FlexBox>
      <Image
        src="/Feed/desktop/seeMore.svg"
        alt="더보기"
        width={24}
        height={24}
      />
    </FlexBox>
  );
}
