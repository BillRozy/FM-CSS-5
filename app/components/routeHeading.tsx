import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function RouteHeading({
  number,
  title,
  className,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & {
  number: string;
  title: string;
}) {
  return (
    <span {...rest} className={twMerge("text-center", className)}>
      <span aria-hidden className="font-bold opacity-25 mr-6">
        {number}
      </span>
      {title}
    </span>
  );
}
