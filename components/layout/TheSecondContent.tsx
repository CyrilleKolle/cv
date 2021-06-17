import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type WorkContentProps = {
  title: string;
  primaryItem1: string;
  secondaryItem1: string;
  primaryItem2: string;
  secondaryItem2: string;
  primaryItem3: string;
  secondaryItem3: string;
  primaryItem4?: string;
  secondaryItem4?: string;
  tertiaryItem1?: string;
  tertiaryItem2?: string;
  tertiaryItem3?: string;
  tertiaryItem4?: string;
  maxWidth?: boolean;
  marginLeft?: boolean;
};

const Wrapper = styled.div<{ minWidth: boolean; marginLeft: boolean }>`
  ${tw`flex flex-col md:(w-80) lg:w-1/2`}
  @media only screen and (min-width: 767px) {
    /* min-width: ${(props) => (props.minWidth ? `${333}px` : `${400}px`)}; */
    margin-left: ${(props) => (props.marginLeft ? `${0}px` : `${20}px`)};
  }
  @media only screen and (min-width: 1080px) {
    max-width: ${(props) => (props.minWidth ? `${333}px` : `${400}px`)};
  }
`;
const Title = styled.div`
  ${tw`text-2xl font-bold text-gray-900 mb-6`}
  font-family: Helvetica;
  font-family: "Courier New", Courier, monospace;
`;
const PrimaryItem = styled.div`
  ${tw`text-xl font-bold text-gray-900`}
  font-family: Helvetica;
  font-family: "Courier New", Courier, monospace;
`;
const SecondaryItem = styled.div`
  ${tw`text-base mt-0 text-gray-900`}
  font-family: Helvetica;
  font-family: "Courier New", Courier, monospace;
`;
const ItemWrapper = styled.div`
  ${tw`flex flex-col mt-4`}
`;
const Line = styled.div`
  ${tw`border-solid border-gray-900 w-full mx-auto mb-3 hidden md:block mt-12`}
  border: 1px solid;
`;
const TheSecondContent: React.FC<WorkContentProps> = ({
  title,
  primaryItem1,
  secondaryItem1,
  primaryItem2,
  secondaryItem2,
  primaryItem3,
  secondaryItem3,
  primaryItem4,
  secondaryItem4,
  tertiaryItem1,
  tertiaryItem2,
  tertiaryItem3,
  maxWidth = true,
  marginLeft = true,
  tertiaryItem4,
}) => {
  return (
    <Wrapper minWidth={maxWidth} marginLeft={marginLeft}>
      <Line />
      <Title>{title}</Title>
      <ItemWrapper>
        <PrimaryItem>{primaryItem1}</PrimaryItem>
        <SecondaryItem>{tertiaryItem1}</SecondaryItem>
        <SecondaryItem>{secondaryItem1}</SecondaryItem>
      </ItemWrapper>
      <ItemWrapper>
        <PrimaryItem>{primaryItem2}</PrimaryItem>
        <SecondaryItem>{tertiaryItem2}</SecondaryItem>
        <SecondaryItem>{secondaryItem2}</SecondaryItem>
      </ItemWrapper>
      <ItemWrapper>
        <PrimaryItem>{primaryItem3}</PrimaryItem>
        <SecondaryItem>{tertiaryItem3}</SecondaryItem>
        <SecondaryItem>{secondaryItem3}</SecondaryItem>
      </ItemWrapper>
      <ItemWrapper>
        <PrimaryItem>{primaryItem4}</PrimaryItem>
        <SecondaryItem>{tertiaryItem4}</SecondaryItem>
        <SecondaryItem>{secondaryItem4}</SecondaryItem>
      </ItemWrapper>
    </Wrapper>
  );
};
export default TheSecondContent;
