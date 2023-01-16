import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      hiContrast: "hsl(206,10%,5%)",
      loContrast: "white",

      white: "hsl(0, 0%, 100%)",
      offWhite: "hsl(221, 69%, 94%)",

      gray100: "hsl(220,69%,97%)",
      gray200: "hsl(216,15%,57%)",
      gray300: "hsl(236,11%,27%)",
      gray400: "hsl(235,12%,19%)",
      gray500: "hsl(235,16%,15%)",
      gray600: "hsl(237,100%,4%)",

      purple500: "hsl(243,100%,82%)",
      purple600: "hsl(242,48%,58%)",

      red100: "hsl(0, 100%, 80%)",
      red200: "hsl(0, 78%, 63%)",

      // aliases as used in figma
      black: "$gray600",
      veryDarkGrey: "$grey500",
      darkGrey: "$grey400",
      darkLines: "$grey300",
      mediumGrey: "$grey200",
      lightGrey: "$grey100",
      lightLines: "$offWhite",
      mainPurple: "$purple600",
      mainPurpleHover: "$purple500",
      red: "$red200",
      redHover: "$red100",
    },
    space: {
      1: "4px",
      2: "8px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "32px",
    },
    sizes: {
      1: "16px",
      2: "20px",
      3: "40px",
      4: "44px",
      5: "48px",
      6: "96px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "18px",
      5: "24px",
    },
    lineHeights: {
      1: "15px",
      2: "19px",
      3: "23px",
      4: "30px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    px: (value: Stitches.PropertyValue<"padding">) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<"padding">) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    // Abbreviated margin properties
    m: (value: Stitches.PropertyValue<"margin">) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<"margin">) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<"margin">) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<"margin">) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<"margin">) => ({
      marginTop: value,
      marginBottom: value,
    }),

    // A property for applying width/height together
    size: (value: Stitches.PropertyValue<"width">) => ({
      width: value,
      height: value,
    }),

    // An abbreviated property for border-radius
    br: (value: Stitches.PropertyValue<"borderRadius">) => ({
      borderRadius: value,
    }),
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});
