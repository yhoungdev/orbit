// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import { LABEL_ELEMENTS, LABEL_SIZES } from "./consts";
import Radio from "../Radio";
import Checkbox from "../Checkbox";

import ChoiceGroup from "./index";

storiesOf("ChoiceTile", module).add(
  "Playground",
  () => {
    const dataTest = text("dataTest", "test");
    return (
      <ChoiceGroup
        dataTest={dataTest}
        label={label}
        labelSize={labelSize}
        labelAs={labelAs}
        error={error}
        filter={filter}
        onOnlySelection={action("onOnlySelection")}
        onChange={action("onChange")}
      >
        <Radio label="Reason one" value="one" />
        <Radio label="Reason two" value="two" />
        <Radio label="Reason three" value="three" />
      </ChoiceGroup>
    );
  },
  {
    info: "Playground of ChoiceGroup",
  },
);
