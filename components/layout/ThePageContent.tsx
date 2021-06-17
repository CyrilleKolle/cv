import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type PageProps = {};

const Wrapper = styled.div<{ right?: boolean; animate: boolean }>`
  ${tw`bg-gray-300 flex flex-col min-h-screen pt-24 lg:`}
  position: relative;
`;
const InnerWrapper = styled.div`
  ${tw`self-center mx-5`}
  max-width: 1080px;
  position: relative;
`;

const ThePageContent: React.FC<PageProps> = (props) => {
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
export default ThePageContent;
