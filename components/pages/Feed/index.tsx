import PostsList from "@/components/ui/Feed/PostsList";
import FlexBox from "@/components/ui/FlexBox";
import FeedHeader from "@/components/ui/Feed/FeedHeader";

export default function Feed() {
  return (
    <>
      <FlexBox direction="column" className="w-[1028px] gap-[40px] pl-36">
        <FeedHeader />
        <PostsList />
      </FlexBox>
    </>
  );
}
