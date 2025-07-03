"use client";

import BannerImageOne from "../../assets/imgs/bannerImage.svg?react";
import BannerImageTwo from "../../assets/imgs/bannerImage2.svg?react";
import BannerImageThree from "../../assets/imgs/bannerImage3.svg?react";
import BannerImageFour from "../../assets/imgs/bannerImage4.svg?react";

import { useColor } from "../../context/colorContext";

const ImageCom = ({ svgUrl, pathDark, pathLight }) => {
  const { selectedColor } = useColor();

  {
    if (svgUrl === "../../assets/imgs/bannerImage.svg?react") {
      return (
        <>
          <BannerImageOne className="custom-svg1" />
          {
            pathDark?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg1 path:nth-child(${item}) { 
                        fill: ${selectedColor.darkColor};
                      },
                  `}
                </style>
              );
            })
          }

          {
            pathLight?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg1 path:nth-child(${item}) { 
                        fill: ${selectedColor.lightColor};
                      },
                  `}
                </style>
              );
            })
          }
        </>
      );
    } 
    else if (svgUrl === "../../assets/imgs/bannerImage2.svg?react") {
      return (
        <>
          <BannerImageTwo className="custom-svg2" />

          {
            pathDark?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg2 path:nth-child(${item}) { 
                        fill: ${selectedColor.darkColor};
                      },
                  `}
                </style>
              );
            })
          }

          {
            pathLight?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg2 path:nth-child(${item}) { 
                        fill: ${selectedColor.lightColor};
                      },
                  `}
                </style>
              );
            })
          }
        </>
      );
    } 
    else if (svgUrl === "../../assets/imgs/bannerImage3.svg?react") {
      return (
        <>
          <BannerImageThree className="custom-svg3" />

          {
            pathDark?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg3 path:nth-child(${item}) { 
                        fill: ${selectedColor.darkColor};
                      },
                  `}
                </style>
              );
            })
          }

          {
            pathLight?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg3 path:nth-child(${item}) { 
                        fill: ${selectedColor.lightColor};
                      },
                  `}
                </style>
              );
            })
          }
        </>
      );
    } 
    else if (svgUrl === "../../assets/imgs/bannerImage4.svg?react") {
      return (
        <>
          <BannerImageFour className="custom-svg4" />

          {
            pathDark?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg4 path:nth-child(${item}) { 
                        fill: ${selectedColor.darkColor};
                      },
                  `}
                </style>
              );
            })
          }

          {
            pathLight?.map((item, index) => {
              return (
                <style key={index}>
                  {`
                    .custom-svg4 path:nth-child(${item}) { 
                        fill: ${selectedColor.lightColor};
                      },
                  `}
                </style>
              );
            })
          }
        </>
      );
    }
  }
};

export default ImageCom;
