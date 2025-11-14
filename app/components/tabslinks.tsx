import React from "react";
import { Link, useMatch, useResolvedPath, type LinkProps } from "react-router";
import { TextPreset8 } from "./typography";
import { twMerge } from "tailwind-merge";

const TabLink = ({ className, ...rest }: LinkProps) => {
  const resolved = useResolvedPath(rest.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <li
      role="tab"
      aria-selected={!!match}
      className="relative pb-2 text-blue-300 has-[.active]:text-white after:absolute after:bg-white/0 after:bottom-0 after:left-0 after:w-full after:h-[3px] has-[.active]:after:bg-white hover:after:bg-white/50"
    >
      <Link
        className={twMerge(!!match ? "active" : "", className)}
        {...rest}
      ></Link>
    </li>
  );
};

export default function TabsLinks({
  links,
  ...rest
}: React.HTMLAttributes<HTMLElement> & {
  links: { name: string; to: string }[];
}) {
  return (
    <nav {...rest}>
      <ul
        role="tablist"
        aria-label="Destinations"
        className="flex gap-8 flex-nowrap"
      >
        {links.map(({ name, to }) => (
          <TabLink key={name} viewTransition to={to}>
            <TextPreset8 className="uppercase">{name}</TextPreset8>
          </TabLink>
        ))}
      </ul>
    </nav>
  );
}
