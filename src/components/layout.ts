import styled from "styled-components";
import {
  BordersProps,
  ColorProps,
  FlexboxProps,
  RequiredTheme,
  ResponsiveValue,
  LayoutProps as SSLayoutProps,
  SpaceProps,
  Theme,
  ThemeValue,
  borders,
  color,
  compose,
  flexbox,
  layout,
  space,
  system,
} from "styled-system";

export interface GapProps<
  ThemeType extends Theme = RequiredTheme,
  TVal = ThemeValue<"space", ThemeType>,
> {
  /** Margin on top, left, bottom and right */
  gap?: ResponsiveValue<TVal, ThemeType>;
}

export const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

export interface LayoutProps
  extends BordersProps,
    ColorProps,
    SSLayoutProps,
    FlexboxProps,
    SpaceProps,
    GapProps {}
    
const layoutProps = compose(space, layout, color, flexbox, borders, gap);
export const Row = styled.div<LayoutProps>`
  display: flex;
  ${layoutProps};
`;
export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  ${layoutProps};
`;
