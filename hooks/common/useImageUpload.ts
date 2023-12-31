import { ChangeEvent, useState } from 'react';

type Option = 'single' | 'multiple';

interface UseImageUploadOptions<T extends Option> {
  option: T;
}

const useImageUpload = <T extends Option>({
  option,
}: UseImageUploadOptions<T>) => {
  const isSingle = option === 'single';
  const [imagePreview, setImagePreview] =
    useState<T extends 'single' ? string : string[]>();
  const [imageFile, setImageFile] =
    useState<T extends 'single' ? File : File[]>();
  // eslint-disable-next-line consistent-return
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) {
      return new Error('이미지를 업로드 해야합니다.');
    }
    if (isSingle && fileList.length > 1) {
      return new Error('이미지는 하나만 업로드 가능합니다.');
    }
    // T extends는 제네릭 타입을 확장하는 것이므로 T가 'single'이면 File, 'multiple'이면 File[]가 된다.
    if (isSingle) {
      setImagePreview(
        URL.createObjectURL(fileList[0]) as T extends 'single'
          ? string
          : string[],
      );
      setImageFile(fileList[0] as T extends 'single' ? File : File[]);
    } else {
      setImagePreview((prev) => {
        const urls = Array.from(fileList).map((file) =>
          URL.createObjectURL(file),
        );
        const result = (
          prev ? [...prev, ...urls] : [...urls]
        ) as T extends 'single' ? string : string[];
        return result;
      });
      setImageFile((prev) => {
        const files = Array.from(fileList);
        const result = (
          prev ? [...(prev as File[]), ...files] : [...files]
        ) as T extends 'single' ? File : File[];
        return result;
      });
    }
  };

  /* 다수 이미지 중 특정 이미지 삭제를 위한 함수이며, 이미지 미리보기와 이미지 파일을 삭제한다.
   */
  const handleImageDelete = (index: number) => {
    setImagePreview((prev) => {
      const result = prev ? [...prev] : [];
      result.splice(index, 1);
      return result as T extends 'single' ? string : string[];
    });
    setImageFile((prev) => {
      const result = prev ? [...(prev as File[])] : [];
      result.splice(index, 1);
      return result as T extends 'single' ? File : File[];
    });
  };

  return {
    imagePreview,
    setImagePreview,
    imageFile,
    setImageFile,
    handleImageUpload,
    handleImageDelete,
  };
};
export default useImageUpload;
