import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type ReferenceContentProps = {
  title: string;
  description: string;
};

const Wrapper = styled.div`
  ${tw`md:ml-5 lg:w-1/2`}
  /* @media only screen and (min-width: 768px) {
    min-width: 400px;
  } */
`;
const Title = styled.div`
  ${tw`font-bold text-xl font-bold`}
  font-family: Helvetica;
`;
const Description = styled.div`
  ${tw`text-base mt-6 lg:mt-12`}
  font-family: Helvetica;
`;
const Line = styled.div`
  ${tw`border-solid border-gray-900 w-full mx-auto mb-3 hidden md:block mt-12`}
  border: 1px solid;
`;

export const ReferenceContent: React.FC<ReferenceContentProps> = ({
  title,
  description,
}) => {
  return (
    <Wrapper>
      <Line />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};
