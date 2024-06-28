import { usePathAnimation } from "../../services/utils/animationSpringLine";
import { animated } from "react-spring";

const AnimatedPath = animated.path;

const Lines = () => {
  const initialD = {
    line1:
      "M-1881.519 1548.98C-141.847 1473.57 122.331 831.427 1104.72 837.698C1890.63 842.715 2146.03 585.998 2175.49 457.013",
    line2:
      "M-1902.362 1554.54C-162.118 1478.04 107.442 826.511 1083.04 834.393C1863.52 840.699 2120.05 580.461 2150.76 449.553",
    line3:
      "M-2023.205 1560.1C-182.387 1482.51 92.554 821.596 1061.37 831.09C1836.42 838.685 2094.08 574.925 2126.03 442.096",
    line4:
      "M-2144.049 1565.65C-202.659 1486.98 77.664 816.679 1039.69 827.783C1809.32 836.667 2068.1 569.386 2101.29 434.635",
    line5:
      "M-2164.892 1571.22C-222.929 1491.45 62.7755 811.764 1018.02 824.48C1782.22 834.653 2042.13 563.85 2076.56 427.177",
    line6:
      "M-2285.737 1576.77C-243.201 1495.92 47.8858 806.847 996.345 821.174C1755.11 832.636 2016.15 558.311 2051.83 419.717",
    line7:
      "M-2306.579 1582.33C-263.47 1500.39 32.9977 801.932 974.671 817.87C1728.01 830.621 1990.18 552.775 2027.09 412.259",
    line8:
      "M-2427.424 1587.89C-283.742 1504.86 18.108 797.015 952.996 814.564C1700.91 828.604 1964.2 547.237 2002.36 404.798",
    line9:
      "M-2648.267 1593.45C-304.012 1509.33 3.21973 792.1 931.322 811.261C1673.8 826.589 1938.23 541.701 1977.63 397.34",
  };
  const targetD = {
    line1:
      "M91.519 1548.98C-141.847 1473.57 122.331 831.427 1104.72 837.698C1890.63 842.715 2146.03 585.998 2175.49 257.013",
    line2:
      "M30.362 1554.54C-162.118 1478.04 107.442 826.511 1083.04 834.393C1863.52 840.699 2120.05 580.461 2150.76 249.553",
    line3:
      "M3.205 1560.1C-182.387 1482.51 92.554 821.596 1061.37 831.09C1836.42 838.685 2094.08 574.925 2126.03 242.096",
    line4:
      "M-54.049 1565.65C-202.659 1486.98 77.664 816.679 1039.69 827.783C1809.32 836.667 2068.1 569.386 2101.29 234.635",
    line5:
      "M-164.892 1571.22C-222.929 1491.45 62.7755 811.764 1018.02 824.48C1782.22 834.653 2042.13 563.85 2076.56 227.177",
    line6:
      "M-285.737 1576.77C-243.201 1495.92 47.8858 806.847 996.345 821.174C1755.11 832.636 2016.15 558.311 2051.83 219.717",
    line7:
      "M-406.579 1582.33C-263.47 1500.39 32.9977 801.932 974.671 817.87C1728.01 830.621 1990.18 552.775 2027.09 212.259",
    line8:
      "M-827.424 1587.89C-283.742 1504.86 18.108 797.015 952.996 814.564C1700.91 828.604 1964.2 547.237 2002.36 204.798",
    line9:
      "M-1248.267 1593.45C-304.012 1509.33 3.21973 792.1 931.322 811.261C1673.8 826.589 1938.23 541.701 1977.63 197.34",
  };
  const alternateTargetD = {
    line1:
      "M-981.519 1548.98C-141.847 1473.57 122.331 831.427 1104.72 867.698C1890.63 842.715 2146.03 585.998 2175.49 657.013",
    line2:
      "M-1002.362 1554.54C-162.118 1478.04 107.442 826.511 1083.04 864.393C1863.52 840.699 2120.05 580.461 2150.76 649.553",
    line3:
      "M-1123.205 1560.1C-182.387 1482.51 92.554 821.596 1061.37 861.09C1836.42 838.685 2094.08 574.925 2126.03 642.096",
    line4:
      "M-1144.049 1565.65C-202.659 1486.98 77.664 816.679 1039.69 857.783C1809.32 836.667 2068.1 569.386 2101.29 634.635",
    line5:
      "M-1164.892 1571.22C-222.929 1491.45 62.7755 811.764 1018.02 854.48C1782.22 834.653 2042.13 563.85 2076.56 627.177",
    line6:
      "M-1185.737 1576.77C-243.201 1495.92 47.8858 806.847 996.345 851.174C1755.11 832.636 2016.15 558.311 2051.83 619.717",
    line7:
      "M-1206.579 1582.33C-263.47 1500.39 32.9977 801.932 974.671 847.87C1728.01 830.621 1990.18 552.775 2027.09 612.259",
    line8:
      "M-1227.424 1587.89C-283.742 1504.86 18.108 797.015 952.996 844.564C1700.91 828.604 1964.2 547.237 2002.36 604.798",
    line9:
      "M-1248.267 1593.45C-304.012 1509.33 3.21973 792.1 931.322 841.261C1673.8 826.589 1938.23 541.701 1977.63 597.34",
  };

  const pathAnimation1 = usePathAnimation(
    initialD.line1,
    targetD.line1,
    alternateTargetD.line1
  );
  const pathAnimation2 = usePathAnimation(
    initialD.line2,
    targetD.line2,
    alternateTargetD.line2
  );
  const pathAnimation3 = usePathAnimation(
    initialD.line3,
    targetD.line3,
    alternateTargetD.line3
  );
  const pathAnimation4 = usePathAnimation(
    initialD.line4,
    targetD.line4,
    alternateTargetD.line4
  );
  const pathAnimation5 = usePathAnimation(
    initialD.line5,
    targetD.line5,
    alternateTargetD.line5
  );
  const pathAnimation6 = usePathAnimation(
    initialD.line6,
    targetD.line6,
    alternateTargetD.line6
  );
  const pathAnimation7 = usePathAnimation(
    initialD.line7,
    targetD.line7,
    alternateTargetD.line7
  );
  const pathAnimation8 = usePathAnimation(
    initialD.line8,
    targetD.line8,
    alternateTargetD.line8
  );
  const pathAnimation9 = usePathAnimation(
    initialD.line9,
    targetD.line9,
    alternateTargetD.line9
  );
  return (
    <svg
      width="1920"
      height="2049"
      viewBox="0 0 1920 2049"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <AnimatedPath
        opacity="0.111111"
        d={pathAnimation1.d}
        stroke="url(#paint0_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.222222"
        d={pathAnimation2.d}
        stroke="url(#paint1_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.333333"
        d={pathAnimation3.d}
        stroke="url(#paint2_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.444444"
        d={pathAnimation4.d}
        stroke="url(#paint3_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.555556"
        d={pathAnimation5.d}
        stroke="url(#paint4_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.666667"
        d={pathAnimation6.d}
        stroke="url(#paint5_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.777778"
        d={pathAnimation7.d}
        stroke="url(#paint6_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        opacity="0.888889"
        d={pathAnimation8.d}
        stroke="url(#paint7_linear_937_26896)"
        stroke-width="2"
      />
      <AnimatedPath
        d={pathAnimation9.d}
        stroke="url(#paint8_linear_937_26896)"
        stroke-width="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_937_26896"
          x1="1219.47"
          y1="457.25"
          x2="1304.86"
          y2="1480.64"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_937_26896"
          x1="1201.27"
          y1="448.319"
          x2="1288.11"
          y2="1486.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_937_26896"
          x1="1183.07"
          y1="439.39"
          x2="1271.38"
          y2="1491.99"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_937_26896"
          x1="1164.87"
          y1="430.459"
          x2="1254.64"
          y2="1497.66"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_937_26896"
          x1="1146.67"
          y1="421.53"
          x2="1237.92"
          y2="1503.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_937_26896"
          x1="1128.47"
          y1="412.598"
          x2="1221.21"
          y2="1508.97"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_937_26896"
          x1="1110.27"
          y1="403.669"
          x2="1204.5"
          y2="1514.62"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_937_26896"
          x1="1092.07"
          y1="394.737"
          x2="1187.81"
          y2="1520.26"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_937_26896"
          x1="1073.87"
          y1="385.808"
          x2="1171.13"
          y2="1525.89"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#BD18CB" />
          <stop offset="0.473958" stop-color="#4642FF" />
          <stop offset="1" stop-color="#8B4BED" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Lines;
