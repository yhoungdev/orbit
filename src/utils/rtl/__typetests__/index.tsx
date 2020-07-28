/* eslint-disable no-unused-expressions */
import React from "react";
import styled, { StyledComponent } from "styled-components";

import { textAlign } from "..";

const Text: StyledComponent<"p", { color: string }> = styled.p`
  text-align: ${textAlign("left")};
  color: ${({ color }): string | undefined => color};
`;

<Text color="red" />;
