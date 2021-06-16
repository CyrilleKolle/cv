import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type SvgContentProps = {};

const ImageBird = styled.img`
  ${tw`active:opacity-90`}
`;
const ImageHello = styled.img<{ visible: boolean }>`
  ${tw``}
  visibility: ${(props) => (props.visible ? "hidden" : "visible")};
`;
const Wrapper = styled.div`
  ${tw`flex flex-col self-end right-0 justify-end justify-items-end justify-self-end content-end items-end md:(hidden mb-0 bottom-0)`}
`;

const SmallWrappeer = styled.div`
  ${tw`flex flex-col self-start left-0 justify-start justify-items-start justify-self-start content-start items-start hidden md:inline`}
`;

export const SvgContent: React.FC<SvgContentProps> = (props) => {
  const [visible, setVisible] = useState(false);
  const handleHello = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Wrapper>
        <ImageHello
          visible={visible}
          height={100}
          width={50}
          src="/hello.svg"
          alt="Picture of the author"
        />

        <ImageBird
          height={30}
          width={20}
          src="/bird-right.svg"
          onClick={handleHello}
          onMouseOver={handleHello}
        />
      </Wrapper>
      <SmallWrappeer>
        <ImageHello
          visible={visible}
          height={100}
          width={50}
          src="/hello.svg"
          alt="Picture of the author"
        />

        <ImageBird
          height={30}
          width={20}
          src="/bird-left.svg"
          onClick={handleHello}
          onMouseOver={handleHello}
        />
      </SmallWrappeer>
    </>
  );
};
