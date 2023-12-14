import { Metadata } from 'next';
import SearchBar from '../../_components/Search/SearchBar';
import SearchResult from '../../_components/Search/SearchResult';

interface Props {
  params: { result: string };
}

export function generateMetadata({ params: { result } }: Props): Metadata {
  const keyword = decodeURI(result);
  return {
    title: `${keyword} | Pawzone`,
    description: `${keyword}에 대한 검색 결과입니다.`,
  };
}

export default function PlacePage({ params: { result } }: Props) {
  const keyword = decodeURI(result);
  return (
    <>
      <SearchBar initPlace={keyword} />
      <SearchResult place={keyword} />
    </>
  );
}
