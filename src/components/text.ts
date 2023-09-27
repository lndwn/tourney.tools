import styled from "styled-components";
import {
  ColorProps,
  TypographyProps,
  color,
  compose,
  typography,
} from "styled-system";
export interface TextProps extends TypographyProps, ColorProps {}
const textProps = compose(typography, color);
export const UIText = styled.p`
  ${textProps};
`;
