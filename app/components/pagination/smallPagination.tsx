import type { HTMLAttributes } from "react";
import { NavLink, type NavLinkProps } from "react-router";
import { twMerge } from "tailwind-merge";

const CircleLink = ({ className, ...rest }: NavLinkProps) => {
  return (
    <NavLink
      className={(props) =>
        twMerge(
          "block size-2.5 desktop:size-[15px] bg-white rounded-full hover:opacity-50",
          props.isActive ? "opacity-100" : "opacity-17",
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
export default function SmallPagination({
  links,
  ...rest
}: {
  links: PaginationLink[];
} & HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="flex gap-4 desktop:gap-10 justify-center items-center"
      {...rest}
    >
      {links.map((link) => (
        <li key={link.name}>
          <CircleLink to={link.to} viewTransition aria-label={link.name} />
        </li>
      ))}
    </ul>
  );
}
