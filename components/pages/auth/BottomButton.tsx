import Button from '@/components/ui/Button';
import React from 'react';

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  isFullWidth?: boolean;
  to?: string;
  text: React.ReactNode;
  children?: React.ReactNode;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

export default function BottomButton({
  variant = 'primary',
  isFullWidth = false,
  text,
  to,
  type = 'button',
  children,
  handleClick,
  isDisabled = false,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <Button
        className="header3 flex-1 px-[20px] py-[16px]"
        variant={variant}
        fullWidth={isFullWidth}
        to={to}
        onClickAction={handleClick}
        disabled={isDisabled}
        type={type}
      >
        {text}
      </Button>
      {children}
    </div>
  );
}
