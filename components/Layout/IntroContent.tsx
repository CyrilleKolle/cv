import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type IntroContentProps = {
  reference: string;
  mainText: string;
  description: string;
};

const Wrapper = styled.div`
  ${tw`flex flex-col`}
`;
const EricReference = styled.div`
  ${tw`text-xs text-gray-900`}
  font-family: Helvetica;
`;
const MainText = styled.div`
  ${tw`text-4xl mt-2 text-gray-900 max-w-lg`}
  font-family: Helvetica;
`;
const Description = styled.div`
  ${tw`text-xl mt-6 text-gray-900 max-w-xl`}
  font-family: Helvetica;
`;

export const IntroContent: React.FC<IntroContentProps> = ({
  reference,
  mainText,
  description,
}) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.7,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.8,
            },
          },
        }}
      >
        <Wrapper>
          <EricReference>{reference}</EricReference>
          <MainText>{mainText}</MainText>
          <Description>{description}</Description>
        </Wrapper>
      </motion.div>
    </>
  );
};
