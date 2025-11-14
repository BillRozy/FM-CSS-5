import type {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
} from "react";
import { twMerge } from "tailwind-merge";

type PolymorphicProps<E extends ElementType> = {
  as?: E;
} & ComponentPropsWithoutRef<E>;

const BellefairPreset = <E extends ElementType = "span">({
  className,
  as,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & PolymorphicProps<E>) => {
  const Component = as ?? "span";
  return (
    <Component
      className={twMerge(
        "font-['Bellefair',sans-serif] leading-[normal] tracking-normal",
        className
      )}
      {...rest}
    />
  );
};

const BarlowCondensedPreset = <E extends ElementType = "span">({
  className,
  as,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & PolymorphicProps<E>) => {
  const Component = as ?? "span";
  return (
    <Component
      className={twMerge("font-['Barlow_Condensed',sans-serif]", className)}
      {...rest}
    />
  );
};
export const TextPreset1 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BellefairPreset>) => {
  return (
    <BellefairPreset
      className={twMerge(
        "text-[5rem] tablet:text-[9rem] leading-[normal]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset2 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BellefairPreset>) => {
  return (
    <BellefairPreset
      className={twMerge(
        "text-[3.5rem] tablet:text-[5rem] desktop:text-[6rem]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset3 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BellefairPreset>) => {
  return (
    <BellefairPreset
      className={twMerge(
        "text-[1.5rem] tablet:text-[2.5rem] desktop:text-[3.5rem]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset4 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BellefairPreset>) => {
  return (
    <BellefairPreset
      className={twMerge(
        "text-[1.125rem] tablet:text-[1.5rem] desktop:text-[2rem]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset5 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BarlowCondensedPreset>) => {
  return (
    <BarlowCondensedPreset
      className={twMerge(
        "text-[1.25rem] tracking-[15%] desktop:text-[1.75rem] tablet:tracking-[0.25rem] leading-[normal]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset5DesktopOnly = ({
  className,
  ...rest
}: React.ComponentProps<typeof BarlowCondensedPreset>) => {
  return (
    <BarlowCondensedPreset
      className={twMerge(
        "text-[1.75rem] tracking-[0.25rem] leading-[normal]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset6 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BarlowCondensedPreset>) => {
  return (
    <BarlowCondensedPreset
      className={twMerge(
        "text-[1rem] desktop:text-[1.75rem] tracking-[0.15rem] leading-[normal] desktop:font-['Bellefair',sans-serif]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset6DesktopOnly = ({
  className,
  ...rest
}: React.ComponentProps<typeof BellefairPreset>) => {
  return (
    <BellefairPreset
      className={twMerge("text-[1.75rem]", className)}
      {...rest}
    />
  );
};

export const TextPreset7 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BarlowCondensedPreset>) => {
  return (
    <BarlowCondensedPreset
      className={twMerge("text-sm tracking-[0.125rem] leading-none", className)}
      {...rest}
    />
  );
};

export const TextPreset8 = ({
  className,
  ...rest
}: React.ComponentProps<typeof BarlowCondensedPreset>) => {
  return (
    <BarlowCondensedPreset
      className={twMerge(
        "text-sm tracking-[0.15rem] desktop:text-[1rem] desktop:tracking-[0.125rem]",
        className
      )}
      {...rest}
    />
  );
};

export const TextPreset9 = <E extends ElementType = "span">({
  className,
  as,
  ...rest
}: HTMLAttributes<HTMLSpanElement> & PolymorphicProps<E>) => {
  const Component = as ?? "span";
  return (
    <Component
      className={twMerge(
        "text-[0.9375rem] tablet:text-[1rem] desktop:text-[1.125rem] font-['Barlow',sans-serif] tracking-[0rem] leading-[180%]",
        className
      )}
      {...rest}
    />
  );
};
