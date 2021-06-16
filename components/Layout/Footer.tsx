import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type ContactContentProps = {};

const Wrapper = styled.div`
  ${tw`flex flex-col mt-12 mb-5 md:(mt-0 flex-row justify-between mb-5) lg:(mt-12)`}
`;
const Name = styled.div`
  ${tw`text-base font-bold `}
  font-family: Helvetica;
`;
const Email = styled.a`
  ${tw`text-base font-bold text-blue-700 mt-4 md:mt-0 hover:text-pink-500`}
  font-family: Helvetica;
`;
const Telephone = styled.a`
  ${tw`text-base font-bold text-blue-700 mt-4 md:mt-0 hover:text-pink-500`}
  font-family: Helvetica;
`;

const LinkedIn = styled.a`
  ${tw`text-base font-bold text-blue-700 mt-4 md:mt-0 hover:text-pink-500`}
  font-family: Helvetica;
`;
const Github = styled.a`
  ${tw`text-base font-bold text-blue-700 mt-4 md:mt-0 hover:text-pink-500`}
`;

export const Footer: React.FC<ContactContentProps> = ({}) => {
  return (
    <Wrapper>
      <Name>Cyrille N. Kolle</Name>
      <Email target="_blank" rel="noopener noreferrer" href={`mailto:`}>
        ngidekollecyrille@gmail.com
      </Email>
      <Telephone
        target="_blank"
        rel="noopener noreferrer"
        href={`tel:+46737668228`}
      >
        +46(0)737-66 82 28
      </Telephone>
      <LinkedIn
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.linkedin.com/in/cyrille-ngide-kolle/"}
      >
        LinkedIn
      </LinkedIn>
      <Github
        target="_blank"
        rel="noopener noreferrer"
        href={"https://github.com/CyrilleKolle"}
      >
        github
      </Github>
    </Wrapper>
  );
};
