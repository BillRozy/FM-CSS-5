import { styled } from "styled-components";

const BellefairPreset = styled.span`
  font-family: "Bellefair", sans-serif;
  letter-spacing: 0rem;
  line-height: normal;
`;

const BarlowCondensedPreset = styled.span`
  font-family: "Barlow Condensed", sans-serif;
`;
export const TextPreset1 = styled(BellefairPreset).attrs({
  className: "text-[5rem] tablet:text-[9rem]",
})``;
export const TextPreset2 = styled(BellefairPreset).attrs({
  className: "text-[3.5rem] tablet:text-[5rem] desktop:text-[6rem]",
})``;
export const TextPreset3 = styled(BellefairPreset).attrs({
  className: "text-[1.5rem] tablet:text-[2.5rem] desktop:text-[3.5rem]",
})``;

export const TextPreset4 = styled(BellefairPreset).attrs({
  className: "text-[1.125rem] tablet:text-[1.5rem] desktop:text-[2rem]",
})``;

export const TextPreset5 = styled(BarlowCondensedPreset).attrs({
  className:
    "text-[1.25rem] tracking-[15%] desktop:text-[1.75rem] tablet:tracking-[0.25rem] leading-[normal]",
})``;

export const TextPreset5DesktopOnly = styled(BarlowCondensedPreset).attrs({
  className: "text-[1.75rem] tracking-[0.25rem] leading-[normal]",
})``;

export const TextPreset6 = styled(BarlowCondensedPreset).attrs({
  className: "text-[1rem] desktop:text-[1.75rem]",
})`
  letter-spacing: 0.15rem;
  line-height: normal;
  @media (min-width: 1024px) {
    font-family: "Bellefair", sans-serif;
  }
`;

export const TextPreset6DesktopOnly = styled(BellefairPreset).attrs({
  className: "text-[1.75rem]",
})``;

export const TextPreset7 = styled(BarlowCondensedPreset)`
  font-size: 0.875rem;
  letter-spacing: 0.125rem;
  line-height: 1;
`;

export const TextPreset8 = styled(BarlowCondensedPreset).attrs({
  className:
    "text-[0.875rem] desktop:text-[1rem] tracking-[0.15rem] desktop:tracking-[0.125rem]",
})``;
export const TextPreset9 = styled.p.attrs({
  className: "text-[0.9375rem] tablet:text-[1rem] desktop:text-[1.125rem]",
})`
  font-family: "Barlow", sans-serif;
  letter-spacing: 0rem;
  line-height: 180%;
`;
