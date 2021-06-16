import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type IntroContainerProps = {};

const Wrapper = styled.div<{ right?: boolean }>`
  ${tw`flex flex-col md:flex-row lg:(flex-col mr-5)`}
`;

const TheIntroContainer: React.FC<IntroContainerProps> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
export default TheIntroContainer