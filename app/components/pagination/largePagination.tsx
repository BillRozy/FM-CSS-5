import type { HTMLAttributes } from "react";
import { NavLink, type NavLinkProps } from "react-router";
import { twMerge } from "tailwind-merge";
import { TextPreset4 } from "../typography";

const CircleLink = ({ className, ...rest }: NavLinkProps) => {
  return (
    <NavLink
      className={(props) =>
        twMerge(
          "flex justify-center items-center-safe size-10 tablet:size-14 desktop:size-20 rounded-full transition-colors border hover:border-white",
          props.isActive
            ? ["border-white", "text-blue-900", "bg-white"]
            : ["border-white/25", "text-white", "bg-white/0"],

          typeof className === "function" ? className(props) : className
        )
      }
      {...rest}
    ></NavLink>
  );
};

type PaginationLink = {
  to: string;
  name: string;
};
export default function BigPagination({
  links,
  ...rest
}: {
  links: PaginationLink[];
} & HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="flex desktop:flex-col gap-4 desktop:gap-8 justify-center items-center"
      {...rest}
    >
      {links.map((link, index) => (
        <li key={link.name}>
          <CircleLink to={link.to} viewTransition aria-label={link.name}>
            <TextPreset4>{index + 1}</TextPreset4>
          </CircleLink>
        </li>
      ))}
    </ul>
  );
}
