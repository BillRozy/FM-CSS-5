import type { HTMLAttributes } from "react";
import { TextPreset4 } from "./typography";
import { twMerge } from "tailwind-merge";

export const RoundButton = ({
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={twMerge(
        "size-36 tablet:size-[272px] rounded-full text-blue-900 bg-white cursor-pointer hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] hover:*:opacity-50",
        className
      )}
      {...rest}
    >
      <TextPreset4>{children}</TextPreset4>
    </button>
  );
};
