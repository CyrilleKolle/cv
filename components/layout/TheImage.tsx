import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";

type ImageContentProps = {};

const Image = styled.img`
  ${tw`w-full rounded-sm max-w-sm`}/* @media only screen and (min-width: 1080px) {
    height: 400px;
  } */
`;

const TheImage: React.FC<ImageContentProps> = (props) => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.7,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Image src="/kolle.jpg" alt="Picture of the author" />
      </motion.div>
    </>
  );
};
export default TheImage