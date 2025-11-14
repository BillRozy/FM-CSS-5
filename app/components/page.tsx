import {
  useEffect,
  useId,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";
import { useMediaQuery } from "react-responsive";

type StyledPageProps = {
  mobileBg: string;
  tabletBg: string;
  desktopBg: string;
};
export const StyledPage = ({
  mobileBg,
  tabletBg,
  desktopBg,
  className,
  style,
  ...rest
}: HTMLAttributes<HTMLElement> & StyledPageProps) => {
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  const [bg, setBg] = useState("");
  useEffect(() => {
    if (isDesktop) {
      setBg(desktopBg);
    } else if (isTablet) {
      setBg(tabletBg);
    } else {
      setBg(mobileBg);
    }
  }, [isDesktop, isTablet]);
  return (
    <main
      className={twMerge(
        "text-white flex flex-col justify-center items-center-safe min-h-full min-w-[320px] overflow-hidden pt-[88px] tablet:pt-[96px] desktop:pt-[136px] bg-center bg-cover bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `url(${bg})`,
        ...style,
      }}
      {...rest}
    ></main>
  );
};

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
