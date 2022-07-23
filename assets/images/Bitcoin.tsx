import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface Props {
  width?: string;
  height?: string;
}

export const Bitcoin: React.FC<Props> = (props) => {
  const { width = "40", height = "40" } = props;
  return (
    <Svg id="BTC" width={width} height={height} viewBox="0 0 40 40">
      <Circle
        id="Ellipse_133"
        data-name="Ellipse 133"
        cx="20"
        cy="20"
        r="20"
        fill="#f7931a"
      />
      <Path
        id="Path_4334"
        data-name="Path 4334"
        d="M26.947,16.025c.392-2.62-1.6-4.029-4.331-4.969l.885-3.55L21.34,6.969l-.861,3.456c-.568-.142-1.151-.275-1.731-.407l.868-3.479L17.456,6,16.57,9.548c-.47-.107-.932-.213-1.38-.324l0-.011-2.98-.744-.575,2.308s1.6.367,1.569.39a1.15,1.15,0,0,1,1.007,1.257l-1.008,4.044a1.777,1.777,0,0,1,.225.072l-.228-.057L11.79,22.147a.786.786,0,0,1-.99.513c.021.032-1.57-.392-1.57-.392L8.157,24.742l2.812.7c.523.131,1.036.268,1.54.4l-.894,3.59,2.158.539.886-3.552c.59.16,1.162.308,1.722.447L15.5,30.4l2.161.539.894-3.583c3.684.7,6.455.416,7.621-2.916.94-2.683-.047-4.231-1.985-5.24a3.446,3.446,0,0,0,2.759-3.172ZM22.01,22.948c-.668,2.683-5.185,1.233-6.65.869l1.186-4.756C18.012,19.426,22.708,20.15,22.01,22.948Zm.668-6.961c-.609,2.441-4.369,1.2-5.589.9l1.076-4.314C19.385,12.873,23.313,13.441,22.679,15.987Z"
        transform="translate(2.039 1.5)"
        fill="#fff"
      />
    </Svg>
  );
};
