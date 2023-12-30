import { PlaceType } from '@/types/types';
import ParkIcon from '@/public/svgs/Pawzone/park.svg';
import CafeIcon from '@/public/svgs/Pawzone/cafe.svg';
import RestaurantIcon from '@/public/svgs/Pawzone/restaurant.svg';

export const REVIEW_KEYWORDS = [
  { text: '경치가 좋아요', emoji: '🏞️' },
  { text: '조용해요', emoji: '🤫' },
  { text: '편안해요', emoji: '😌' },
  { text: '접근성이 좋아요', emoji: '🚗' },
  { text: '깨끗해요', emoji: '✨' },
  { text: '안전해요', emoji: '👮' },
];

export const CATEGORY_MAP: { [key: string]: PlaceType } = {
  맛집: 'RESTAURANT',
  카페: 'CAFE',
  공원: 'PARK',
};

export const PLACE_TAG_LIST = [
  'SCENIC',
  'COMFORTABLE',
  'ACCESSIBLE',
  'CLEAN',
  'SAFE',
  'QUIET',
  'MOST_SAVED',
] as const;

export const CATEGORY_TYPE = {
  RESTAURANT: '맛집',
  CAFE: '카페',
  PARK: '공원',
};

export const CATEGORY_ICON = {
  RESTAURANT: RestaurantIcon,
  CAFE: CafeIcon,
  PARK: ParkIcon,
} as const;

export const MAX_STAR_NUM = 5;
