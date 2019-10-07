// @flow
import React, { useState, useRef } from "react";
import styled from "styled-components";

import defaultTheme from "../defaultTheme";
import FormFeedback from "../FormFeedback";
import FormLabel from "../FormLabel";
import { SIZE_OPTIONS, RESIZE_OPTIONS } from "./consts";
import { rtlSpacing } from "../utils/rtl";
import getSpacingToken from "../common/getSpacingToken";

import type { Props } from "./index";

const Field = styled.label`
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  display: flex;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  flex-direction: column;
  position: relative;
  // for usage with Stack
  flex: ${({ fullHeight }) => fullHeight && "1"};
  margin-bottom: ${getSpacingToken};
`;

Field.defaultProps = {
  theme: defaultTheme,
};

const getFontSize = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeInputSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeInputNormal,
  };

  return tokens[size];
};

const getPadding = () => ({ theme, size }) => {
  const tokens = {
    [SIZE_OPTIONS.SMALL]: theme.orbit.paddingTextareaSmall,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.paddingTextareaNormal,
  };
  return rtlSpacing(tokens[size]);
};

const StyledTextArea = styled.textarea`
  appearance: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  height: ${({ fullHeight }) => fullHeight && "100%"};
  padding: ${getPadding()};
  border-radius: ${({ theme }) => theme.orbit.borderRadiusNormal};
  box-shadow: inset 0 0 0
    ${({ theme, error }) =>
      `${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputError : theme.orbit.borderColorInput
      }`};
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.backgroundInputDisabled : theme.orbit.backgroundInput};
  color: ${({ disabled, theme }) =>
    disabled ? theme.orbit.colorTextInputDisabled : theme.orbit.colorTextInput};
  font-size: ${getFontSize()};
  line-height: ${({ theme }) => theme.orbit.lineHeightText};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};
  font-family: ${({ theme }) => theme.orbit.fontFamily};
  resize: ${({ resize }) => resize};
  transition: box-shadow ${({ theme }) => theme.orbit.durationFast} ease-in-out;
  min-height: 44px; // TODO: create token

  /* for usage with Stack */
  flex: ${({ fullHeight }) => fullHeight && "1"};

  /* IE 11 bug fix, border: 0 won't work - the box-shadow will be hidden */
  border: 1px solid transparent;

  /* IE 11 bug fix, hide scrollbar by default (shown only when scrollable) */
  overflow: auto;

  &::placeholder {
    color: ${({ theme }) => theme.orbit.colorPlaceholderInput};
  }

  &:hover {
    box-shadow: ${({ disabled, theme, error }) =>
      !disabled &&
      `inset 0 0 0 ${theme.orbit.borderWidthInput} ${
        error ? theme.orbit.borderColorInputErrorHover : theme.orbit.borderColorInputHover
      }`};
  }

  &:focus {
    box-shadow: ${({ theme, disabled }) =>
      !disabled && `inset 0 0 0 2px ${theme.orbit.borderColorInputFocus}`};
    outline: none;
  }
`;

StyledTextArea.defaultProps = {
  theme: defaultTheme,
};

// $FlowExpected
const Textarea = React.forwardRef(
  ({
    size = SIZE_OPTIONS.NORMAL,
    disabled,
    resize = RESIZE_OPTIONS.VERTICAL,
    dataTest,
    spaceAfter,
    ref,
    fullHeight,
    value,
    label,
    name,
    error,
    placeholder,
    maxLength,
    onChange,
    onFocus,
    onBlur,
    tabIndex,
    help,
  }: Props) => {
    const [tooltipShown, setTooltipShown] = useState(false);
    const [tooltipShownHover, setTooltipShownHover] = useState(false);
    const labelRef = useRef(null);
    const iconRef = useRef(null);

    return (
      <Field fullHeight={fullHeight} spaceAfter={spaceAfter}>
        {label && (
          <FormLabel
            filled={!!value}
            error={!!error}
            help={!!help}
            disabled={disabled}
            labelRef={labelRef}
            iconRef={iconRef}
            onMouseEnter={() => setTooltipShownHover(true)}
            onMouseLeave={() => setTooltipShownHover(false)}
          >
            {label}
          </FormLabel>
        )}

        <StyledTextArea
          data-test={dataTest}
          name={name}
          value={value}
          size={size}
          fullHeight={fullHeight}
          disabled={disabled}
          error={error}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          rows={props.rows}
          onFocus={e => {
            if (onFocus) {
              onFocus(e);
            }
            setTooltipShown(true);
          }}
          onBlur={e => {
            if (onBlur) {
              onBlur(e);
            }
            setTooltipShown(false);
          }}
          resize={resize}
          tabIndex={tabIndex}
          ref={ref}
        />
        <FormFeedback
          help={help}
          error={error}
          iconRef={iconRef}
          labelRef={labelRef}
          tooltipShown={tooltipShown}
          tooltipShownHover={tooltipShownHover}
        />
      </Field>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
