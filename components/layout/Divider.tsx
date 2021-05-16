import React from "react";
import tw from "twin.macro";
import styled, { css } from "styled-components";

type DividerProps = {
  marginTop?: boolean;
  bottomMargin?: boolean;
  hidden?: boolean;
  largeHiden?: boolean;
  midHidden?: boolean;
};
const Line = styled.div<{
  marginTop?: boolean;
  bottomMargin?: boolean;
  hidden?: boolean;
  largeHiden?: boolean;
  midHidden?: boolean;
}>`
  ${tw`border-solid border-gray-900 w-full mx-auto mb-3 block`}
  border: 1px solid;
  margin-top: ${(props) =>
    props.marginTop ? `${48}px` : props.bottomMargin ? `${12}px` : `${0}px`};
  @media only screen and (min-width: 768px) {
    display: ${(props) => (props.hidden ? "block" : "none")};
  }
  @media only screen and (min-width: 1024px) and (max-width: 1079px) {
    display: ${(props) => (props.midHidden ? "block" : "none")};
  }

  @media only screen and (min-width: 1080px) {
    display: ${(props) => (props.largeHiden ? "block" : "none")};
  }
`;

export const Divider: React.FC<DividerProps> = ({
  marginTop = true,
  bottomMargin = true,
  hidden = true,
  largeHiden = true,
  midHidden = true,
}) => {
  return (
    <Line
      marginTop={marginTop}
      bottomMargin={bottomMargin}
      hidden={hidden}
      largeHiden={largeHiden}
      midHidden={midHidden}
    />
  );
};
