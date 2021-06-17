import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { motion } from "framer-motion";

type CompetencyProps = {
  title: string;
  competencies?: string[];
};
const Competency = styled.div`
  ${tw`mb-3 last:mb-0`}
  font-family: 'Courier New', Courier, monospace;
`;
const CompetenciesContainer = styled.div`
  ${tw`grid grid-flow-row md:(grid-cols-2 grid-rows-1)`}
  font-family: 'Courier New', Courier, monospace;
`;

const Wrapper = styled.div`
  ${tw``}
`;
const Title = styled.div`
  ${tw`text-2xl mb-6 font-bold`}
  font-family: 'Courier New', Courier, monospace;
`;
const Line = styled.div`
  ${tw`border-solid border-gray-900 w-full mx-auto mb-3 block md:hidden mt-12`}
  border: 1px solid;
  font-family: "Courier New", Courier, monospace;
`;

const CompetencyContent: React.FC<CompetencyProps> = ({
  competencies,
  title,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        variants={{
          hidden: {
            scale: 0.7,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.5,
            },
          },
        }}
      >
        <Wrapper>
          <Title>{title}</Title>
          <CompetenciesContainer>
            {competencies.map((competency) => (
              <Competency>
                <p>{competency}</p>
              </Competency>
            ))}
          </CompetenciesContainer>
        </Wrapper>
      </motion.div>
    </>
  );
};
export default CompetencyContent;
