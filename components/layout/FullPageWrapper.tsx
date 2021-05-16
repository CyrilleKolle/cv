import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type PageProps = {};

const Wrapper = styled.div<{ right?: boolean; animate: boolean }>`
  ${tw`bg-gray-300 flex flex-col min-h-screen pt-12 lg:`}/* animation: 2s ease-out 1s 1 slideInFromLeft;
  @keyframes slideInFromLeft {
    0% {
      transform: translateY(-1%);
    }
    100% {
      transform: translateY(0);
    }
  } */
`;
const InnerWrapper = styled.div`
  ${tw`self-center mx-5`}
  max-width: 1080px;
`;

export const FullPageWrapper: React.FC<PageProps> = (props) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => setAnimate(true), 1000);
  }, []);
  return (
    <Wrapper animate={animate}>
      <InnerWrapper>{props.children}</InnerWrapper>
    </Wrapper>
  );
};
