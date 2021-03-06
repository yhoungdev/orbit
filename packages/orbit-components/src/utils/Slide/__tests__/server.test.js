/**
 * @flow
 * @jest-environment node
 */
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import Slide from "../index";

describe("slide util", () => {
  describe("server-side", () => {
    test("expanded", () => {
      const sheet = new ServerStyleSheet();
      renderToStaticMarkup(
        sheet.collectStyles(
          <Slide maxHeight={20} expanded>
            Expanded content
          </Slide>,
        ),
      );
      const styleTags = sheet.getStyleTags();
      expect(styleTags).toContain("max-height:20px");
    });
  });
});
