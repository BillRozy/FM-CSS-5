import { StyledPage, StyledPageContent } from "../components/page";
import bgMobile from "../assets/crew/background-crew-mobile.jpg";
import bgTablet from "../assets/crew/background-crew-tablet.jpg";
import bgDesktop from "../assets/crew/background-crew-desktop.jpg";
import { Outlet } from "react-router";
import { TextPreset5, TextPreset6 } from "../components/typography";
import RouteHeading from "../components/routeHeading";

export default function Crew() {
  const title = (
    <RouteHeading number="02" title="MEET YOUR CREW"></RouteHeading>
  );
  return (
    <StyledPage mobileBg={bgMobile} tabletBg={bgTablet} desktopBg={bgDesktop}>
      <StyledPageContent
        className="flex flex-col gap-6 tablet:py-10 desktop:py-12 overflow-hidden"
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
        <meta
          name="description"
          content="This is a page, which introduces your crew for journey."
        />
        <title>Crew</title>

        <div className="grow flex flex-col desktop:justify-center-safe">
          <Outlet />
        </div>
      </StyledPageContent>
    </StyledPage>
  );
}
