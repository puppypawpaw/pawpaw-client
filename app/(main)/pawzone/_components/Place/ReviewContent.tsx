import { useState } from 'react';
import { REVIEW_KEYWORDS } from '@/constant/place';
import WarningCircle from '@/public/svgs/Pawzone/warning_circle.svg';
import Star from '@/public/svgs/Pawzone/star.svg';
import LoadingIcon from '@/public/svgs/loading.svg';
import useGetPlaceReviewList from '@/hooks/queries/useGetPlaceReviewList';
import useGetMyPlaceReview from '@/hooks/queries/useGetMyPlaceReview';
import useDeleteMyPlaceReview from '@/hooks/mutations/useDeleteMyPlaceReview';
import { Place } from '@/types/types';
import ReviewModal from '@/components/ui/Modal/ReviewModal';
import RatioBar from './RatioBar';
import ReviewCard from './ReviewCard';
import ImageSlider from './ImageSlider';
import ReviewButton from './ReviewButton';

interface Props {
  place: Place;
}

export default function ReviewContent({
  place: {
    id,
    score,
    scenicRatio,
    quietRatio,
    cleanRatio,
    comfortableRatio,
    safeRatio,
    accessibleRatio,
    imageUrlList,
  },
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ratioArr = [
    scenicRatio,
    quietRatio,
    comfortableRatio,
    accessibleRatio,
    cleanRatio,
    safeRatio,
  ];
  const { data, isLoading, Observer } = useGetPlaceReviewList({
    placeId: id,
    size: 5,
  });
  const myReview = useGetMyPlaceReview(id);
  const deleteMyPlaceReviewMutate = useDeleteMyPlaceReview(id);
  const handleReviewButton = () => setIsOpen(!isOpen);

  const otherReviews = data?.pages.flatMap((item) => item.content);
  const reviews = [...(myReview ? [myReview] : []), ...(otherReviews ?? [])];

  const reviewBody = () => {
    if (reviews.length < 1) {
      return (
        <div className="flex flex-col items-center justify-center gap-2">
          <WarningCircle className="w-12 h-12 fill-grey-300" />
          <p className="body-4 text-grey-300">아직 등록된 리뷰가 없습니다.</p>
          <ReviewButton
            mode={myReview ? 'edit' : 'write'}
            handleToggle={handleReviewButton}
          />
        </div>
      );
    }
    return (
      <>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Star className="w-7 h-7 fill-yellow-100" />
              <p className="header2 text-grey-800">
                {Math.round((score ?? 0) * 10) / 10}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <ReviewButton
                mode="delete"
                handleToggle={deleteMyPlaceReviewMutate}
              />
              <ReviewButton
                mode={myReview ? 'edit' : 'write'}
                handleToggle={handleReviewButton}
              />
            </div>
          </div>
          <div className="flex flex-col rounded-[10px] shadow-chatCard p-5 gap-2">
            {Array.from({ length: REVIEW_KEYWORDS.length }, (_, index) => (
              <RatioBar
                title={REVIEW_KEYWORDS[index].text}
                ratio={Math.round((ratioArr[index] ?? 0) * 100)}
                key={index}
              />
            ))}
          </div>
        </div>
        <ImageSlider urls={imageUrlList} />
        {reviews?.map((review) => (
          <ReviewCard
            name={review.reviewerNickname}
            // subName="2살 초코"
            description={review.content}
            rating={review.score}
            ImageSrc={review.reviewerImageUrl}
            placeReviewImageList={review.placeReviewImageList.map(
              (obj) => obj.imageUrl,
            )}
            key={review.placeReviewId}
          />
        ))}
      </>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-7 overflow-x-hidden">
        <p className="header3 text-grey-800">이 장소에 대한 리뷰 😀</p>
        {isLoading ? (
          <div className="w-full flex justify-center">
            <LoadingIcon className="w-10 h-10 animate-spin fill-primary-200" />
          </div>
        ) : (
          reviewBody()
        )}
        <ReviewModal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          myInfo={myReview}
        />
      </div>
      <Observer>
        <div className="w-full flex justify-center">
          <LoadingIcon className="w-10 h-10 animate-spin fill-primary-200" />
        </div>
      </Observer>
    </>
  );
}
