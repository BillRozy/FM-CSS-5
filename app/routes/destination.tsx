import { StyledPage, StyledPageContent } from "../components/page";
import bgMobile from "../assets/destination/background-destination-mobile.jpg";
import bgTablet from "../assets/destination/background-destination-tablet.jpg";
import bgDesktop from "../assets/destination/background-destination-desktop.jpg";
import { Outlet } from "react-router";
import { TextPreset5, TextPreset6 } from "../components/typography";
import RouteHeading from "../components/routeHeading";

export default function Destination() {
  const title = (
    <RouteHeading number="01" title="PICK YOUR DESTINATION"></RouteHeading>
  );
  return (
    <StyledPage mobileBg={bgMobile} tabletBg={bgTablet} desktopBg={bgDesktop}>
      <StyledPageContent
        className="flex flex-col gap-6 tablet:py-10 desktop:py-12"
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
          content="This is a page, where you can choose the destination for your journey."
        />
        <title>Destination</title>

        <div className="grow flex flex-col desktop:justify-center-safe">
          <Outlet />
        </div>
      </StyledPageContent>
    </StyledPage>
  );
}
