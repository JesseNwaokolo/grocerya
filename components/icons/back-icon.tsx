import { IconProps } from "@/types/icon-type";
import React from "react";
import Svg, { Path } from "react-native-svg";

const BackIcon = ({width, height}:IconProps) => {
  return (
    <Svg
      width={width ?? "28"}
      height={height ?? "28"}
      viewBox="0 0 28 28"
      fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    >
      <Path d="M17.5 7L10.5 14L17.5 21" stroke="#444444" stroke-width="2" />
    </Svg>
  );
};

export default BackIcon;
