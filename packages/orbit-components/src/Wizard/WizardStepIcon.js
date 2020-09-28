// @flow
import * as React from "react";
import styled, { css } from "styled-components";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import Text from "../Text";
import CheckCircle from "../icons/CheckCircle";
import useMediaQuery from "../hooks/useMediaQuery";
import useTheme from "../hooks/useTheme";
import defaultTheme from "../defaultTheme";

import type { Status } from ".";

const centerMixin = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledCircle = styled.div`
  width: ${({ width }) => Math.round(width)}px;
  height: ${({ height }) => Math.round(height)}px;
  ${centerMixin};
  background: ${({ theme }) => theme.orbit.paletteProductNormal};
  border-radius: 50%;
  ${({ status }) =>
    status === "completed" &&
    css`
      background: ${({ theme }) => theme.orbit.paletteWhite};
    `}
  ${({ status }) =>
    status === "disabled" &&
    css`
      background: ${({ theme }) => theme.orbit.paletteCloudNormalHover};
    `}
  ${({ active, hasGlow }) =>
    active &&
    hasGlow &&
    css`
      box-shadow: 0 0 0 4px ${({ theme }) => convertHexToRgba(theme.orbit.paletteProductNormal, 20)};
    `}
`;
StyledCircle.defaultProps = {
  theme: defaultTheme,
};

const StyledTextContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ height, checkboxHeight }) => Math.round((height - checkboxHeight) / 2)}px
    ${({ width, checkboxWidth }) => Math.round((width - checkboxWidth) / 2)}px;
`;
StyledTextContainer.defaultProps = {
  theme: defaultTheme,
};

type Props = {|
  +index: number,
  +width: number,
  +height: number,
  +status: Status,
  +active: boolean,
|};

const WizardStepIcon = ({ index, width, height, status, active }: Props) => {
  const { isTablet } = useMediaQuery();
  const theme = useTheme();

  // account for additional inner spacing because of visual balance
  const checkboxWidth = width * (5 / 6);
  const checkboxHeight = height * (5 / 6);

  /**
   * We're explicitly rounding values in layout styles because browsers seem to
   * be rounding them inconsistently horizontally vs vertically.
   */

  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <StyledCircle
        width={checkboxWidth}
        height={checkboxHeight}
        status={status}
        active={active}
        hasGlow={isTablet}
      />
      <div
        css={css`
          position: relative;
          /* an exception where we resize CheckCircle to a nonstandard size for aesthetical reasons */
          svg {
            width: ${width}px;
            height: ${height}px;
            display: block;
          }
        `}
      >
        {status === "completed" ? (
          <CheckCircle
            ariaLabel="completed"
            size="small"
            customColor={theme.orbit.paletteProductNormal}
          />
        ) : (
          <StyledTextContainer
            width={width}
            height={height}
            checkboxWidth={checkboxWidth}
            checkboxHeight={checkboxHeight}
          >
            <Text as="div" type={status === "disabled" ? "primary" : "white"} size="small">
              {typeof index === "number" ? index + 1 : null}
            </Text>
          </StyledTextContainer>
        )}
      </div>
    </div>
  );
};

export default WizardStepIcon;
