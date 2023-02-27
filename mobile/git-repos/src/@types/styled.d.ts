import "styled-components";
import { type themeType } from "@themes/themeType";

declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}
