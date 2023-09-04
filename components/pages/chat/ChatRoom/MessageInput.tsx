'use client';

import { useRef, useEffect, ChangeEvent } from 'react';
import PlusCircleIcon from '@/public/PlusCircle.svg';
import PaperPlaneIcon from '@/public/PaperPlaneTilt.svg';

interface MessageInputType {
  onChangeValue: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  sendMessage: () => void;
  handleOnKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  message: string;
}

export default function MessageInput({
  onChangeValue,
  sendMessage,
  handleOnKeyPress,
  message,
}: MessageInputType) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [message]);
  const messageEmpty = message.trim().length === 0;
  return (
    <form
      className="relative flex items-center px-10 py-6 "
      onSubmit={sendMessage}
    >
      <button type="button" className="absolute left-14">
        <PlusCircleIcon className="w-8 h-8" />
      </button>
      <textarea
        ref={textareaRef}
        className="w-full p-2 pl-20 pr-14 shadow-chatCard rounded-[10px] outline-none scrollbar-hide resize-none max-h-40"
        onKeyDown={handleOnKeyPress}
        onChange={onChangeValue}
        value={message}
      />
      <button
        type="submit"
        className="absolute right-14"
        disabled={messageEmpty}
      >
        <PaperPlaneIcon className="w-8 h-8" />
      </button>
    </form>
  );
}