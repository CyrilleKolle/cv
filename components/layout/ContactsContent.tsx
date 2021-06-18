import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type ContactContentProps = {
  title: string;
  email: string;
  tel: string;
  linkedin: string;
  github: string;
};

const Wrapper = styled.div`
  ${tw`flex flex-col mt-12 md:(mt-0 ml-5) lg:(mt-12)`}
`;
const Title = styled.div`
  ${tw`text-base font-bold `}
  font-family: 'Courier New', Courier, monospace;
`;
const Email = styled.a`
  ${tw`text-base text-blue-700 mt-4 hover:text-pink-500`}
  font-family: 'Courier New', Courier, monospace;
`;
const Telephone = styled.a`
  ${tw`text-base text-blue-700 mt-4 hover:text-pink-500`}
  font-family: 'Courier New', Courier, monospace;
`;
const LinkedIn = styled.a`
  ${tw`text-base text-blue-700 mt-4 hover:text-pink-500`}
  font-family: 'Courier New', Courier, monospace;
`;
const Github = styled.a`
  ${tw`text-base text-blue-700 mt-4 hover:text-pink-500`}
  font-family: 'Courier New', Courier, monospace;
`;

const ContactsContent: React.FC<ContactContentProps> = ({
  title,
  email,
  tel,
  linkedin,
  github,
}) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 2 }}
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.6,
            },
          },
        }}
      >
        <Wrapper>
          <Title>{title}</Title>
          <Email
            target="_blank"
            rel="noopener noreferrer"
            href={`mailto:${email}`}
          >
            {email}
          </Email>
          <Telephone
            target="_blank"
            rel="noopener noreferrer"
            href={`tel:+46${tel}`}
          >
            {tel}
          </Telephone>
          <LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            href={"https://www.linkedin.com/in/cyrille-ngide-kolle/"}
          >
            {linkedin}
          </LinkedIn>
          <Github
            target="_blank"
            rel="noopener noreferrer"
            href={"https://github.com/CyrilleKolle"}
          >
            {github}
          </Github>
        </Wrapper>
      </motion.div>
    </>
  );
};
export default ContactsContent;
