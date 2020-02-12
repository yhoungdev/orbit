// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs";

import * as Icons from "../icons/index";

import ChoiceGroup from "./index";

const getIcons = (name, defaultIcon) => select(name, [null, ...Object.keys(Icons)], defaultIcon);
const getIcon = source => Icons[source];

storiesOf("ChoiceTile", module).add(
  "Playground",
  () => {
    const dataTest = text("dataTest", "test");
    const title = text("title", "Random");
    const description = text("description", "40 × 20 × 25 cm, 5 kg");
    const checked = boolean("checked", false);
    const Icon = getIcon(getIcons("icon", "FlightNomad"));
    return (
      <ChoiceGroup
        dataTest={dataTest}
        title={title}
        description={description}
        checked={checked}
        onClick={action("onClick")}
        icon={Icon && <Icon />}
      />
    );
  },
  {
    info: "Playground of ChoiceGroup",
  },
);
