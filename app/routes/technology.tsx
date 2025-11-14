import { StyledPage, StyledPageContent } from "../components/page";
import bgMobile from "../assets/technology/background-technology-mobile.jpg";
import bgTablet from "../assets/technology/background-technology-tablet.jpg";
import bgDesktop from "../assets/technology/background-technology-desktop.jpg";
import { Outlet } from "react-router";
import { TextPreset5, TextPreset6 } from "../components/typography";
import RouteHeading from "../components/routeHeading";

export default function Technology() {
  const title = (
    <RouteHeading number="03" title="SPACE LAUNCH 101"></RouteHeading>
  );
  return (
    <StyledPage mobileBg={bgMobile} tabletBg={bgTablet} desktopBg={bgDesktop}>
      <meta
        name="description"
        content="This page explains technologies to be used to travel to space"
      />
      <title>Technology</title>
      <StyledPageContent
        className="flex flex-col gap-6 pb-12 tablet:py-10 desktop:py-12 desktop:pr-0"
        heading={
          <>
            <TextPreset6 as="h1" className="inline tablet:hidden">
              {title}
            </TextPreset6>
            <TextPreset5 as="h1" className="hidden tablet:inline">
              {title}
            </TextPreset5>
          </>
        }
      >
        <div className="grow flex flex-col desktop:justify-center-safe">
          <Outlet />
        </div>
      </StyledPageContent>
    </StyledPage>
  );
}
