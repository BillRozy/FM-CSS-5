import { styled } from "styled-components";
import { TextPreset4 } from "./typography";

const _RoundButton = styled.button.attrs({
  className: "size-[144px] tablet:size-[272px]",
})`
  border-radius: 50%;
  color: var(--color-blue-900);
  background-color: var(--color-white);
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 88px rgba(255, 255, 255, 0.1);
    & > * {
      opacity: 0.5;
    }
  }
`;

export const RoundButton = ({
  children,
  ...rest
}: React.ComponentProps<typeof _RoundButton>) => {
  return (
    <_RoundButton {...rest}>
      <TextPreset4>{children}</TextPreset4>
    </_RoundButton>
  );
};
