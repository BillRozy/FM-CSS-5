import { FocusTrap } from "focus-trap-react";
import { ParamHTMLAttributes, ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import PrimaryNavigation from "./primary-navigation";

const HeaderOverflow = ({
  open = false,
  close,
  closer,
  ...rest
}: {
  open?: boolean;
  close?: () => void;
  closer?: ReactNode;
} & ParamHTMLAttributes<HTMLDivElement>) => {
  const [rendered, setRendered] = useState(open);

  useEffect(() => {
    if (open) setRendered(true);
  }, [open]);

  function handleAnimationEnd() {
    if (!open) setRendered(false);
  }

  if (!rendered) return null;
  return createPortal(
    <div
      className={`tablet:hidden right-0 top-0 w-[67.7%] h-screen fixed backdrop-blur-2xl pl-8 flex flex-col gap-12 transition-transform will-change-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      inert={!open}
      aria-modal
      onAnimationEnd={handleAnimationEnd}
      {...rest}
    >
      {open && (
        <FocusTrap>
          <div className="flex flex-col gap-12">
            <div className="py-8 px-6 flex items-center justify-end">
              {closer}
            </div>
            <PrimaryNavigation variant="vertical"></PrimaryNavigation>
          </div>
        </FocusTrap>
      )}
    </div>,
    document.body,
    "primary-menu-in-overlay"
  );
};

export default HeaderOverflow;
