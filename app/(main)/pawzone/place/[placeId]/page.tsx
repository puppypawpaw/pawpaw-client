import { Metadata } from 'next';
import { getDetailedPlace } from '@/service/server/pawzone';
import PlaceResult from '../../_components/Place/PlaceResult';

interface Props {
  params: { placeId: string };
}

export async function generateMetadata({
  params: { placeId },
}: Props): Promise<Metadata> {
  const {
    name,
    position: { address },
    imageUrlList,
  } = await getDetailedPlace(placeId);
  return {
    title: `${name} | Pawzone`,
    description: address,
    openGraph: {
      images: { url: imageUrlList[0], alt: name },
      title: name,
      description: `${address}에 위치한 ${name} 입니다.`,
      url: `/pawzone/place/${placeId}`,
    },
  };
}

// id로 이에 대한 데이터를 활용하기
export default async function page({ params: { placeId } }: Props) {
  const place = await getDetailedPlace(placeId);
  return <PlaceResult item={place} />;
}
