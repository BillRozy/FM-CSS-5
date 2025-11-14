import { Outlet, useLocation } from "react-router";
import Header from "./header";
import { useEffect, useRef, useState } from "react";
import HeaderOverflow from "./header-overflow";
import CloseIcon from "./assets/shared/icon-close.svg?react";
import Hamburger from "./components/hamburger";

export default function Layout() {
  const [overflowOpen, setOverflowOpen] = useState(false);
  const scrollable = useRef<HTMLDivElement>(null);
  const location = useLocation();
  useEffect(() => {
    setOverflowOpen(false);
  }, [location]);
  return (
    <>
      <div
        ref={scrollable}
        inert={overflowOpen || undefined}
        className={`w-full h-dvh bg-black ${overflowOpen ? "overflow-hidden" : "overflow-y-auto"}`}
      >
        <Header
          scrollRef={scrollable}
          opener={
            <div className="tablet:hidden">
              <button
                type="button"
                aria-label="Open Primary Navigation"
                aria-expanded={overflowOpen}
                onClick={() => setOverflowOpen(true)}
              >
                <Hamburger />
              </button>
            </div>
          }
        />
        <Outlet />
      </div>
      <HeaderOverflow
        open={overflowOpen}
        close={() => setOverflowOpen(false)}
        closer={
          <button
            type="button"
            aria-label="Close Primary Navigation"
            onClick={() => setOverflowOpen(false)}
          >
            <CloseIcon className="w-6 h-[21px]" />
          </button>
        }
      ></HeaderOverflow>
    </>
  );
}
