import * as React from "react";
import Svg, { Circle, Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export const Group = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40">
      <Defs>
        <ClipPath id="clip-path">
          <Rect
            id="Rectangle_7028"
            data-name="Rectangle 7028"
            width="20"
            height="20"
            transform="translate(0.066)"
            fill="#4972f4"
          />
        </ClipPath>
      </Defs>
      <G id="Group_30725" data-name="Group 30725" transform="translate(-0.066)">
        <Circle
          id="Ellipse_3036"
          data-name="Ellipse 3036"
          cx="20"
          cy="20"
          r="20"
          transform="translate(0.066)"
          fill="#f5f8ff"
        />
        <G
          id="Mask_Group_6353"
          data-name="Mask Group 6353"
          transform="translate(10 10)"
          clip-path="url(#clip-path)"
        >
          <G
            id="Group_26949"
            data-name="Group 26949"
            transform="translate(0.459 2.001)"
          >
            <G id="Group_27877" data-name="Group 27877">
              <Path
                id="Path_30601"
                data-name="Path 30601"
                d="M599.585,1136.983v-10.141a.564.564,0,0,1,.564-.564H601.3a.564.564,0,0,1,.565.564v10.141l1.9-1.925a.564.564,0,0,1,.812.008l.791.833a.565.565,0,0,1-.007.785l-4.21,4.282a.566.566,0,0,1-.8,0l-4.253-4.285a.564.564,0,0,1-.009-.786l.788-.833a.567.567,0,0,1,.813-.008Z"
                transform="translate(-595.932 -1126.278)"
                fill="#4972f4"
              />
              <Path
                id="Path_30601-2"
                data-name="Path 30601"
                d="M599.586,1130.431v10.141a.564.564,0,0,0,.564.564H601.3a.565.565,0,0,0,.565-.564v-10.141l1.9,1.925a.564.564,0,0,0,.812-.008l.791-.833a.565.565,0,0,0-.007-.785l-4.21-4.282a.566.566,0,0,0-.8,0l-4.254,4.285a.564.564,0,0,0-.009.786l.789.832a.567.567,0,0,0,.813.008Z"
                transform="translate(-585.527 -1126.038)"
                fill="#4972f4"
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  );
};
