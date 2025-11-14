import bgMobile from "../assets/home/background-home-mobile.jpg";
import bgTablet from "../assets/home/background-home-tablet.jpg";
import bgDesktop from "../assets/home/background-home-desktop.jpg";
import {
  TextPreset1,
  TextPreset5DesktopOnly,
  TextPreset6,
  TextPreset9,
} from "../components/typography";
import { RoundButton } from "../components/button";
import { StyledPage, StyledPageContent } from "../components/page";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  const title = "SO, YOU WANT TO TRAVEL TO";
  return (
    <StyledPage mobileBg={bgMobile} tabletBg={bgTablet} desktopBg={bgDesktop}>
      <StyledPageContent
        className="tablet:py-32 desktop:grid grid-rows-[auto_min-content] grid-cols-[minmax(auto,442px)_1fr] items-end-safe"
        heading={<span className="sr-only">Start your journey here</span>}
      >
        <meta
          name="description"
          content="This is a home page, where you can start your journey to the Space!"
        />
        <title>Home</title>
        <div className="flex flex-col justify-end-safe gap-6 tablet:mx-[88px] desktop:mx-0 row-start-2 text-blue-300">
          <TextPreset6 className="tablet:hidden text-center">
            {title}
          </TextPreset6>
          <TextPreset5DesktopOnly className="hidden tablet:block text-center desktop:text-start">
            {title}
          </TextPreset5DesktopOnly>
          <TextPreset1
            as="h1"
            className="text-white text-center desktop:text-start"
          >
            SPACE
          </TextPreset1>
          <TextPreset9 as="p" className="text-center desktop:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </TextPreset9>
        </div>
        <div className="py-[119px] tablet:pt-[66px] tablet:pb-0 grow flex justify-center items-center row-start-2 desktop:justify-self-end desktop:p-0">
          <RoundButton onClick={() => navigate("/destination")}>
            EXPLORE
          </RoundButton>
        </div>
      </StyledPageContent>
    </StyledPage>
  );
}
