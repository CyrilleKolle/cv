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
`;
const Name = styled.div`
  ${tw`text-base font-bold`}
  font-family: Helvetica;
`;
const Description = styled.div`
  ${tw`text-base`}
  font-family: Helvetica;
`;

export const HeaderContent: React.FC<HeaderContentProps> = ({
  name,
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
              delay: 0.2,
            },
          },
        }}
      >
        <Wrapper>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </Wrapper>
      </motion.div>
    </>
  );
};
