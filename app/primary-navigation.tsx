import { tv } from "tailwind-variants";
import { TextPreset8 } from "./components/typography";
import { NavLink } from "react-router";

const links = ["home", "destination", "crew", "technology"];

const PrimaryLinkTitle = ({ index, link }: { index: number; link: string }) => {
  return (
    <TextPreset8 className="uppercase text-blue-300">
      <span className="font-bold mr-3 text-white" aria-hidden>
        0{index}
      </span>
      {link}
    </TextPreset8>
  );
};

const navigation = tv({
  slots: {
    list: "flex gap-8 desktop:gap-12",
    listItem:
      "relative after:hidden after:absolute after:bg-white hover:after:opacity-50 has-[.active]:after:block hover:after:block",
  },
  variants: {
    position: {
      horizontal: {
        list: "flex-row justify-end",
        listItem:
          "py-[38.5px] after:left-0 after:bottom-0 after:w-full after:h-[3px] h-[96px]",
      },
      vertical: {
        list: "flex-col",
        listItem: "after:right-0 after:top-0 after:w-[3px] after:h-full ",
      },
    },
  },
});
export default function PrimaryNavigation({
  variant,
}: {
  variant: "horizontal" | "vertical";
}) {
  const { list, listItem } = navigation({ position: variant });
  return (
    <nav aria-label="Primary Navigation">
      <ul className={list()}>
        {links.map((link, index) => (
          <li key={link} className={listItem()}>
            <NavLink
              to={`/${link !== "home" ? link : ""}`}
              className={({ isActive }) =>
                `block h-full ${isActive ? "active" : ""}`
              }
              viewTransition
            >
              <PrimaryLinkTitle index={index} link={link}></PrimaryLinkTitle>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
