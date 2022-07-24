import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

interface Props {
  width?: string;
  height?: string;
}

export const ArrowBack: React.FC<Props> = () => {
  return (
    <Svg
      width="18.517"
      height="14.059"
      viewBox="0 0 18.517 14.059"
    >
      <Path
        id="arrow-down-solid"
        d="M18.767,35.509l.715.715a.769.769,0,0,1,0,1.091l-6.255,6.258a.769.769,0,0,1-1.091,0L5.877,37.315a.769.769,0,0,1,0-1.091l.715-.715a.774.774,0,0,1,1.1.013l3.7,3.879V26.057a.771.771,0,0,1,.773-.773h1.03a.771.771,0,0,1,.773.773V39.4l3.7-3.879a.768.768,0,0,1,1.1-.013Z"
        transform="translate(43.801 -5.65) rotate(90)"
        fill="#102d6f"
      />
    </Svg>
  );
};
