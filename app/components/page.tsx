import { useId, type HTMLAttributes, type ReactNode } from "react";
import { styled } from "styled-components";
import { twMerge } from "tailwind-merge";

type StyledPageProps = {
  $mobileBg: string;
  $tabletBg: string;
  $desktopBg: string;
};
export const StyledPage = styled.main.attrs<StyledPageProps>({
  className:
    "flex flex-col justify-center items-center-safe min-h-full min-w-[320px] overflow-hidden",
})`
  background: center / cover no-repeat url(${({ $mobileBg }) => $mobileBg});
  --padding-top: 88px;
  padding-top: var(--padding-top);
  color: var(--color-white);
  @media (min-width: 768px) {
    background-image: url(${({ $tabletBg }) => $tabletBg});
    --padding-top: 96px;
  }
  @media (min-width: 1440px) {
    background-image: url(${({ $desktopBg }) => $desktopBg});
    --padding-top: 136px;
  }
`;

export const StyledPageContent = ({
  heading,
  children,
  className,
  ...rest
}: HTMLAttributes<HTMLElement> & {
  heading: ReactNode;
}) => {
  const headingId = useId();
  return (
    <section
      aria-labelledby={headingId}
      className={twMerge(
        "p-6 tablet:px-10 desktop:px-[165px] max-w-[min(100%,1440px)] w-full grow",
        className
      )}
      {...rest}
    >
      <span id={headingId} className="text-center desktop:text-start">
        {heading}
      </span>
      {children}
    </section>
  );
};
