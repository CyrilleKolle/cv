import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type HeaderContentProps = {
  name: string;
  description: string;
};

const Wrapper = styled.div`
  ${tw`bg-gray-300`}
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
  width: 100%;
`;
const TheHeader: React.FC<HeaderContentProps> = ({ name, description }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Name>{name}</Name>
        <Description>{description}</Description>
      </InnerWrapper>
    </Wrapper>
  );
};
export default TheHeader;
