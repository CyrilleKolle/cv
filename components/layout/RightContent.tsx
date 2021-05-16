import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type RightContainerProps = {};

const Wrapper = styled.div`
  ${tw`lg:w-2/3`};
`;

export const RightContent: React.FC<RightContainerProps> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
