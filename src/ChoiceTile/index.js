// @flow
import * as React from "react";
import styled from "styled-components";

import Badge from "../Badge";
import Stack from "../Stack";
import Text from "../Text";
import Radio from "../Radio";
import defaultTheme from "../defaultTheme";
import KEY_CODE_MAP from "../common/keyMaps";
import Checkbox from "../Checkbox";
import { STATES, TYPES } from "./consts";

const getBoxShadow = type => ({ theme, checked }) => {
  const getActive = shadow => {
    if (!checked) return shadow;
    return `${shadow}, inset 0 0 0 2px ${theme.orbit.paletteProductNormal}`;
  };
  if (type === STATES.HOVER) {
    return getActive(theme.orbit.boxShadowActionActive);
  }
  return getActive(theme.orbit.boxShadowAction);
};

const StyledChoiceTile = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  color: ${({ theme }) => theme.orbit.paletteInkNormal};
  text-decoration: none;
  background: ${({ theme }) => theme.orbit.paletteWhite}; //TODO Create token backgroundColorTile
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: ${getBoxShadow(STATES.DEFAULT)};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  cursor: pointer;
  padding: 12px;

  :hover,
  :focus {
    outline: none;
    box-shadow: ${getBoxShadow(STATES.HOVER)};
  }
`;

StyledChoiceTile.defaultProps = {
  theme: defaultTheme,
};

const ChoiceTilePrice = ({ checked, mobilePrice, type }) => {
  if (checked) {
    return (
      <Text type="secondary" size="small">
        Selected
      </Text>
    );
  }
  return null;
};

const buttonClickEmulation = callback => ev => {
  if (ev && ev.keyCode === KEY_CODE_MAP.SPACE) {
    ev.preventDefault();
    if (callback) callback();
  } else if (ev.keyCode === KEY_CODE_MAP.ENTER) {
    if (callback) callback();
  }
};

const ChoiceTile = ({
  icon,
  checked = false,
  title,
  description,
  onClick,
  tabIndex = "0",
  mobilePrice,
  type = TYPES.RADIO,
}) => {
  return (
    <StyledChoiceTile
      checked={checked}
      onClick={onClick}
      onKeyDown={buttonClickEmulation(onClick)}
      tabIndex={tabIndex}
    >
      <Stack direction="row" justify="between" align="center">
        <Stack direction="row" basis="100%" shrink align="center">
          <Badge icon={icon} />
          <Stack width="100%" shrink direction="column" spacing="none">
            <Text weight="bold">{title}</Text>
            {description && <Text type="secondary">{description}</Text>}
          </Stack>
        </Stack>
        <Stack direction="row" basis="0%" spacing="condensed" align="center">
          <ChoiceTilePrice checked={checked} mobilePrice={mobilePrice} />
          <Stack shrink grow={false} basis="0%">
            {type === TYPES.CHECKBOX ? (
              <Checkbox checked={checked} readOnly />
            ) : (
              <Radio checked={checked} readOnly />
            )}
          </Stack>
        </Stack>
      </Stack>
    </StyledChoiceTile>
  );
};

export default ChoiceTile;
