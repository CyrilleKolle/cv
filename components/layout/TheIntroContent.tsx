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
  font-family: 'Courier New', Courier, monospace;
`;
const MainText = styled.div`
  ${tw`text-4xl mt-2 text-gray-900 max-w-lg`}
  font-family: 'Courier New', Courier, monospace;
`;
const Description = styled.div`
  ${tw`text-xl mt-6 text-gray-900 max-w-xl`}
  font-family: 'Courier New', Courier, monospace;
`;

const TheIntroContent: React.FC<IntroContentProps> = ({
  reference,
  mainText,
  description,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 140 }}
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 2 }}
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
export default TheIntroContent;
