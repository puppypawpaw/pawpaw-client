import { cn } from '@/utils/common';
import Check from '@/public/svgs/Auth/check.svg';
import Alert from '@/public/svgs/Auth/alert.svg';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  success?: boolean;
}

const ValidateInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, success, ...props }, ref) => {
    const inputClassName = cn(
      'w-full h-[58px] text-xs 2xs:body1 rounded-[10px] placeholder-grey-400 py-4 px-5 border-none ring-1 focus:ring-1 focus:ring-grey-200 ring-grey-200',
      className,
      {
        'ring-grey-200 focus:ring-grey-200': !error && !success,
        'ring-red-200 focus:ring-red-200': error,
        'ring-primary-300 focus:ring-primary-300': success,
      },
    );

    return (
      <div className="relative">
        <input
          className={inputClassName}
          autoComplete="on"
          ref={ref}
          {...props}
        />
        {error && (
          <Alert className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-5 fill-red-200" />
        )}
        {success && (
          <Check className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 right-5 fill-primary-300" />
        )}
      </div>
    );
  },
);

ValidateInput.displayName = 'ValidateInput';

export { ValidateInput };
