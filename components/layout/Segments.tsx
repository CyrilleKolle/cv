import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type IntroContainerProps = {};

const Wrapper = styled.div<{ right?: boolean }>`
  ${tw`flex flex-col md:flex-row`}
`;

const Segments: React.FC<IntroContainerProps> = (props) => {
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
              delay: 1,
            },
          },
        }}
      >
        <Wrapper>{props.children}</Wrapper>
      </motion.div>
    </>
  );
};
export default Segments