import { Link } from "react-router";
import data from "../../assets/data.json";
import TabsLinks from "../../components/tabslinks";
import {
  TextPreset2,
  TextPreset6DesktopOnly,
  TextPreset7,
  TextPreset9,
} from "../../components/typography";
import imageMap from "../../images";
const destinations = data.destinations;

const links = data.destinations.map((it) => ({
  name: it.name,
  to: `/destination/${it.name.toLowerCase()}`,
}));

const DestinationStat = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-3 items-center uppercase desktop:items-start">
      <TextPreset7 className="text-blue-300">{title}</TextPreset7>
      <TextPreset6DesktopOnly>{description}</TextPreset6DesktopOnly>
    </div>
  );
};
export default function DestinationLayout({ name }: { name: string }) {
  const destination = destinations.find(
    (it) => it.name.toLowerCase() === name.toLowerCase()
  );
  if (!destination) return null;
  const { images, description, distance, travel } = destination;
  const imageUrl = imageMap[images.webp];
  return (
    <div className="flex flex-col gap-8 items-center desktop:flex-row">
      <figure className="py-[26px] px-[88.5px] tablet:py-[42px] tablet:px-[194px] desktop:py-[127px] desktop:px-[29.5px] desktop:basis-[calc(50%-16px)] shrink-0">
        <picture className="aspect-square">
          <Link to="/crew/" viewTransition>
            <img
              src={imageUrl}
              fetchPriority="high"
              alt={name}
              className="size-full cursor-pointer drop-shadow-blue-50/0 hover:drop-shadow-[0_0_2rem] hover:drop-shadow-blue-50/20 transition-all"
            ></img>
          </Link>
        </picture>
      </figure>
      <div className="flex flex-col gap-6 items-center desktop:items-start tablet:px-[87px] tablet:py-[11.5px] desktop:px-[47px] desktop:py-[133px] desktop:basis-[calc(50%-16px)] shrink-0">
        <TabsLinks
          aria-label="Destination navigation"
          links={links}
        ></TabsLinks>
        <div className="flex flex-col gap-4 items-center desktop:items-start min-h-[215px] tablet:min-h-[195px]">
          <TextPreset2 as="h2" className="uppercase">
            {name}
          </TextPreset2>
          <TextPreset9
            as="p"
            className="text-blue-300 text-center desktop:text-start"
          >
            {description}
          </TextPreset9>
        </div>
        <div className="bg-white/25 h-px w-full"></div>
        <div className="flex flex-col gap-6 items-center tablet:block tablet:columns-2 tablet:w-full">
          <DestinationStat
            title="AVG. DISTANCE"
            description={distance}
          ></DestinationStat>
          <DestinationStat
            title="Est. travel time"
            description={travel}
          ></DestinationStat>
        </div>
      </div>
    </div>
  );
}
