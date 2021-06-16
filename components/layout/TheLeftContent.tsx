import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type LeftContainerProps = {};

const Wrapper = styled.div`
  ${tw`lg:w-1/3`};
`;

const TheLeftContent: React.FC<LeftContainerProps> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
export default TheLeftContent;
