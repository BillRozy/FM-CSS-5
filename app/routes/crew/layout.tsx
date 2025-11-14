import data from "../../assets/data.json";
import {
  TextPreset3,
  TextPreset4,
  TextPreset9,
} from "../../components/typography";
import SmallPagination from "../../components/pagination/smallPagination";
import imageMap from "../../images";
const crew = data.crew;

const links = data.crew.map((it) => ({
  name: it.name,
  to: `/crew/${it.role.toLowerCase().replaceAll(" ", "_")}`,
}));

export default function CrewLayout({ role: roleArg }: { role: string }) {
  const personality = crew.find(
    (it) => it.role.toLowerCase() === roleArg.toLowerCase()
  );
  if (!personality) return null;
  const { images, name, role, bio } = personality;
  const imageUrl = imageMap[images.webp];
  return (
    <div className="flex flex-col items-center-safe desktop:flex-row gap-8 isolate desktop:items-stretch">
      <div className="desktop:basis-[calc(50%-16px)] shrink-0 desktop:flex desktop:flex-col desktop:justify-between">
        <div className="flex flex-col justify-center-safe gap-6 pt-10 desktop:pt-0 max-w-lg desktop:max-w-none desktop:grow desktop:basis-[631px]">
          <div className="flex flex-col gap-2 tablet:gap-4 items-center desktop:items-start">
            <TextPreset4 className="uppercase opacity-50">{role}</TextPreset4>
            <TextPreset3 className="uppercase">{name}</TextPreset3>
          </div>
          <TextPreset9 className="text-blue-300 text-center min-h-[164px] tablet:min-h-[117px] desktop:min-h-0 desktop:text-start">
            {bio}
          </TextPreset9>
        </div>
        <div className="pt-6 desktop:pt-10 desktop:pb-12 desktop:flex desktop:justify-start">
          <SmallPagination links={links}></SmallPagination>
        </div>
      </div>

      <div className="relative py-[5px] px-[27.88px] w-full max-w-full aspect-327/350 tablet:aspect-688/463 desktop:aspect-539/734 min-w-[min(100%,327px)] tablet:min-w-[688px] desktop:min-w-[539px] desktop:px-0 desktop:py-[29px]">
        <div className="aspect-271/340 tablet:447/560 desktop:539/676 flex justify-center mx-auto max-w-full h-full tablet:h-auto tablet:w-[calc(100%-(120.63px*2))] tablet:absolute tablet:left-1/2 tablet:top-0 tablet:-translate-x-1/2 desktop:static desktop:translate-x-0 desktop:w-full">
          <img
            src={imageUrl}
            fetchPriority="high"
            alt={`Image of ${name}`}
            className="mask-b-from-77% min-w-full h-full object-center object-contain max-w-none block"
          ></img>
        </div>
      </div>
    </div>
  );
}
