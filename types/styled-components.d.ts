// Better TypeScript setup for themes
// https://github.com/styled-components/styled-components-website/issues/447

import "styled-components";
import theme from "../src/defaultTheme";

type Theme = typeof theme;

declare module "styled-components" {
  // disabling this because the suggestion is incorrect
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
