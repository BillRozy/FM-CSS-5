import Logo from "./components/logo";
import { Link } from "react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject } from "react";
import { styled } from "styled-components";
import PrimaryNavigation from "./primary-navigation";

const StyledHeader = styled.header<{ $translate: number }>`
  transform: translateY(${({ $translate }) => `${$translate}px`});
`;
export default function Header({
  scrollRef,
  opener,
}: {
  scrollRef: RefObject<HTMLElement | null>;
  opener: ReactNode;
}) {
  const [translate, setTranslate] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const scrollCallback = useCallback(
    (event: Event) => {
      const scrollEvent = event as Event & { currentTarget: HTMLElement };
      setTranslate(-scrollEvent.currentTarget.scrollTop);
    },
    [setTranslate]
  );
  useEffect(() => {
    if (scrollRef.current != null) {
      scrollRef.current.addEventListener("scroll", scrollCallback, {
        passive: true,
        capture: true,
      });
      return () =>
        scrollRef.current?.removeEventListener("scroll", scrollCallback);
    } else {
      return () => {};
    }
  }, [scrollCallback, scrollRef]);
  return (
    <StyledHeader
      ref={ref}
      $translate={translate}
      className="fixed top-0 w-full p-6 tablet:p-0 desktop:py-10 flex justify-between items-center"
    >
      <Link
        to="/"
        className="relative tablet:mx-10 desktop:ml-16 desktop:mr-8"
        aria-label="To Home"
      >
        <Logo />
      </Link>
      <div className="hidden relative desktop:block h-px grow bg-white/25 translate-x-8 z-10"></div>
      <div className="hidden tablet:block grow desktop:grow-0 pr-10 desktop:pr-16 desktop:pl-[159px] backdrop-blur-2xl bg-white/5">
        <PrimaryNavigation variant="horizontal"></PrimaryNavigation>
      </div>
      {opener}
    </StyledHeader>
  );
}
