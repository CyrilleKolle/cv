import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type HeaderContentProps = {
  name: string;
  description: string;
};

const Wrapper = styled.div`
  ${tw``}
  position: fixed;
  top: 0;
  width: 100%;
`;
const Name = styled.div`
  ${tw`text-base font-bold`}
  font-family: 'Courier New', Courier, monospace;
`;
const Description = styled.div`
  ${tw`text-base`}
  font-family: 'Courier New', Courier, monospace;
`;
const InnerWrapper = styled.div`
  margin-top: 48px;
`;
const TheHeader: React.FC<HeaderContentProps> = ({ name, description }) => {
  return (
    <>
      <motion.div
        // initial={{ opacity: 0, y: -200 }}
        // exit={{ opacity: 1 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ type: "spring", duration: 2 }}
        // variants={{
        //   hidden: {
        //     scale: 0.7,
        //     opacity: 0,
        //   },
        //   visible: {
        //     scale: 1,
        //     opacity: 1,
        //     transition: {
        //       delay: 0.2,
        //     },
        //   },
        // }}
      >
        <Wrapper>
          <InnerWrapper>
            <Name>{name}</Name>
            <Description>{description}</Description>
          </InnerWrapper>
        </Wrapper>
      </motion.div>
    </>
  );
};
export default TheHeader;
