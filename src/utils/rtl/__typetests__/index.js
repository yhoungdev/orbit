// @flow
/* eslint-disable no-unused-expressions */
import React from "react";
import styled, { type StyledComponent } from "styled-components";

import { type Theme } from "../../../defaultTheme";
import { textAlign } from "..";

const Text: StyledComponent<{| color: string |}, Theme, HTMLParagraphElement> = styled.p`
  text-align: ${textAlign("left")};
  color: ${({ color }) => color};
`;

<Text color="red" />;
