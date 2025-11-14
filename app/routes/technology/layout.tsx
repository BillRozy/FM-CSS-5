import data from "../../assets/data.json";
import {
  TextPreset3,
  TextPreset4,
  TextPreset9,
} from "../../components/typography";
import BigPagination from "../../components/pagination/largePagination";
import imageMap from "../../images";
const techs = data.technology;

const links = techs.map((it) => ({
  name: it.name,
  to: `/technology/${it.name.toLowerCase().replaceAll(" ", "_")}`,
}));

export default function TechnologyLayout({
  technology: techName,
}: {
  technology: string;
}) {
  const technology = techs.find(
    (it) => it.name.toLowerCase() === techName.toLowerCase()
  );
  if (!technology) return null;
  const { images, name, description } = technology;
  const landscapeImageUrl = imageMap[images.landscape];
  const portraitImageUrl = imageMap[images.portrait];

  return (
    <div className="flex flex-col desktop:flex-row-reverse gap-8">
      <div className="aspect-327/322 max-h-[322px] tablet:aspect-688/421 desktop:aspect-auto tablet:max-h-[421px] tablet:min-w-[608px] desktop:max-h-none pt-16 w-full desktop:w-auto desktop:py-0 desktop:min-h-[734px] shrink-0">
        <div className="relative size-full flex justify-center items-center">
          <picture className="aspect-373/376 tablet:aspect-768/778 desktop:aspect-608/600 flex justify-center items-end absolute min-w-3xl desktop:min-w-auto desktop:w-full h-full desktop:h-auto left-1/2 -translate-x-1/2 overflow-hidden">
            <source
              media="(min-width: 1440px)"
              srcSet={portraitImageUrl}
            ></source>
            <source
              media="(min-width: 768px)"
              srcSet={landscapeImageUrl}
            ></source>
            <img
              src={portraitImageUrl}
              fetchPriority="high"
              className="size-full object-cover object-center tablet:object-contain desktop:object-fill max-w-svw"
              alt=""
            ></img>
          </picture>
        </div>
      </div>
      <div className="flex flex-col desktop:flex-row gap-10 items-center desktop:basis-[635px] shrink-0">
        <BigPagination links={links}></BigPagination>
        <div className="flex flex-col gap-4 desktop:gap-6 max-w-lg">
          <div className="flex flex-col gap-4 items-center desktop:items-start">
            <TextPreset4 className="uppercase opacity-50">
              THE TERMINOLOGY…
            </TextPreset4>
            <TextPreset3 className="uppercase">{name}</TextPreset3>
          </div>
          <TextPreset9 className="text-blue-300 text-center desktop:text-start">
            {description}
          </TextPreset9>
        </div>
      </div>
    </div>
  );
}
