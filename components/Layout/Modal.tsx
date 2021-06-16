import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Form from "./ContactForm";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import tw from "twin.macro";

export const Modal = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [x, cycleX] = useCycle(0, 50, 100);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    setIsBrowser(false);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsBrowser(true);
  };

  return (
    <>
      {isBrowser === true ? (
        <AnimatePresence>
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="modal"
          >
            <StyledModalOverlay>
              <StyledModal>
                <StyledModalHeader>
                  <CloseButton
                    onClick={handleCloseClick}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20.39 20.39"
                  >
                    <title>close</title>
                    <line
                      x1="19.39"
                      y1="19.39"
                      x2="1"
                      y2="1"
                      fill="none"
                      stroke="#d6e6e6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                    <line
                      x1="1"
                      y1="19.39"
                      x2="19.39"
                      y2="1"
                      fill="none"
                      stroke="#d6e6e6"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                    />
                  </CloseButton>
                </StyledModalHeader>

                <StyledModalBody>
                  <Form />
                </StyledModalBody>
              </StyledModal>
            </StyledModalOverlay>
          </Overlay>
        </AnimatePresence>
      ) : (
        <StyledFillOverlay>
          <StyledButton
            onClick={handleButtonClick}
            whileTap={{ scale: 0.9 }}
            animate={{ x: x }}
          >
            <ButtonText>Return to Form</ButtonText>
          </StyledButton>
        </StyledFillOverlay>
      )}
    </>
  );
};
const ButtonText = styled.p`
  @media only screen and (max-width: 500px) {
    ${tw`self-center`}
    font-size: 14px;
    align-self: center;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const StyledModalBody = styled.div`
  padding-top: 10px;
`;

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
  color: white;
  margin-bottom: 20px;
`;

const StyledModal = styled.div`
  background: white;
  width: 500px;
  height: 600px;
  border-radius: 15px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  position: sticky;
  @media only screen and (max-width: 500px) {
    justify-content: center;
    width: auto;
    height: 600px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;
const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1365px;
  position: sticky;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: left;
  align-items: center;
  align-self: center;
  margin-left: auto;
  margin-right: auto;
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
`;
const StyledButton = styled(motion.div)`
  ${tw`flex`}
  width: 150px;
  height: 50px;
  border-radius: 5px;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.8);
  position: sticky;
  color: #f2ab23;
  font-weight: 600;

  @media only screen and (max-width: 500px) {
    height: 30px;
    font-family: 12px;
    padding: 8px;
  }
`;
const StyledFillOverlay = styled.div`
  margin-bottom: "auto";
  margin-top: "auto";
  width: 100%;
  height: 100%;
  position: sticky;
  bottom: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
`;
