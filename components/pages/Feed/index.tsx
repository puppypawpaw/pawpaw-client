import PostsList from "@/components/ui/Feed/PostsList";
import FlexBox from "@/components/ui/FlexBox";
import FeedHeader from "@/components/ui/Feed/FeedHeader";

export default function Feed() {
  return (
    <>
      <FlexBox direction="column" className="w-full  px-4 py-8 gap-[40px]">
        <FeedHeader />
        <PostsList />
      </FlexBox>
    </>
  );
}
