// @flow
import * as React from "react";
import styled, { css, keyframes } from "styled-components";

// import useStateWithTimeout from "../hooks/useStateWithTimeout";
import Card from "../Card";
import Slide from "../utils/Slide";
import CardWrapper from "../Card/components/CardWrapper";
import Stack from "../Stack";

import { defaultTheme } from "..";

const fadeOut = (height: number) => keyframes`
  0% {
    opacity: 1;
    max-height: 100%;
    transform: translate3d(0, 0, 0);
  }

  100% {
    opacity: 0;
    max-height: 0;
    transform: translate3d(0, -${height}px, 0);
  }
`;

const fadeIn = (height: number) => keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, ${height * 1.3}px, 0);
  }

  50% {
    opacity: .5;
    transform: translate3d(0, ${height}px, 0);
  }


  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

type Props = {|
  title: React.Node,
  description?: React.Node,
  // children: React.Node,
  actions: React.Node,
  children: React.Node,
  hidden: React.Node,
  expanded: boolean,
|};

const WrapperContentStyled = styled.div`
  opacity: 1;
  ${({ visible, height }) =>
    !visible &&
    css`
      opacity: 0;
      max-height: 0;
      animation: ${fadeOut(height)} 0.5s ease-in-out;
    `}
`;

WrapperContentStyled.defaultProps = {
  theme: defaultTheme,
};

const WrapperHiddenContent = styled.div`
  opacity: 0;
  max-height: 0;
  ${({ height, visible }) =>
    visible &&
    css`
      opacity: 1;
      max-height: 100%;
      animation: ${fadeIn(height)} 0.5s ease-in-out;
    `}
`;

WrapperHiddenContent.defaultProps = {
  theme: defaultTheme,
};

const CardwithFares = ({ title, description, actions, children, expanded, hidden }: Props) => {
  const [open, setOpen] = React.useState(expanded);
  const refCard = React.useRef(null);
  const refContent = React.useRef(null);
  const refHiddenContent = React.useRef(null);

  const [cardHeight, setCardHeight] = React.useState(0);
  const [contentHeight, setContentHeight] = React.useState(0);

  const [hiddenHeight, setHiddenHeight] = React.useState(0);

  // responsible for top slide
  React.useEffect(() => {
    if (expanded) {
      if (refCard.current) {
        setCardHeight(refCard.current.clientHeight);
        setHiddenHeight(refHiddenContent.current.clientHeight);
      }

      setOpen(true);
    }
  }, [expanded]);

  // TODO: replace with hook
  React.useEffect(() => {
    if (refContent.current) {
      setTimeout(() => {
        setContentHeight(refContent.current.clientHeight);
      }, 200);
    }
  }, []);

  return (
    <Stack>
      {expanded && (
        <Slide maxHeight={cardHeight} expanded={open}>
          <div ref={refCard}>
            <Card title={title} description={description} actions={actions} />
          </div>
        </Slide>
      )}

      <Card>
        <WrapperContentStyled ref={refContent} height={contentHeight} visible={!expanded}>
          <CardWrapper>{children}</CardWrapper>
        </WrapperContentStyled>
        <WrapperHiddenContent ref={refHiddenContent} height={hiddenHeight} visible={expanded}>
          <CardWrapper>{hidden}</CardWrapper>
        </WrapperHiddenContent>
      </Card>
    </Stack>
  );
};

export default CardwithFares;
