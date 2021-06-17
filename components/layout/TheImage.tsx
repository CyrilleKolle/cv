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
        initial={{ opacity: 0, x: -100 }}
        exit={{ opacity: 1 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
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
        <Image src="/cyrille.jpg" alt="Picture of the author" />
      </motion.div>
    </>
  );
};
export default TheImage;
