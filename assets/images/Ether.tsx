import * as React from "react";
import Svg, { Circle, Path, G } from "react-native-svg";

interface Props {
  width?: string;
  height?: string;
}

export const Ether: React.FC<Props> = (props) =>  {
  const { width = "40", height = "40" } = props;
  return (
    <Svg id="ETH" width={width} height={width} viewBox="0 0 40 40">
      <Circle
        id="Ellipse_127"
        data-name="Ellipse 127"
        cx="20"
        cy="20"
        r="20"
        transform="translate(0 0)"
        fill="#363636"
      />
      <G id="Group_837" data-name="Group 837" transform="translate(11.29 4.98)">
        <Path
          id="Path_4309"
          data-name="Path 4309"
          d="M1638.966,186.1l-9.335,15.334,9.335,5.478,9.379-5.478Z"
          transform="translate(-1629.631 -186.105)"
          fill="#fff"
        />
        <Path
          id="Path_4311"
          data-name="Path 4311"
          d="M1638.966,369.425l9.393-12.922-9.393,5.418-9.335-5.418Z"
          transform="translate(-1629.631 -339.391)"
          fill="#fff"
        />
      </G>
    </Svg>
  );
};
