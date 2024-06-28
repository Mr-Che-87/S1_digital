import { AttachStyled, StopEnd, StopStart, StopSvg } from "./styles";
const Attach = () => {
  return (
    <AttachStyled
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <path
        d="M1 0V9C1 10.0609 1.42143 11.0783 2.17157 11.8284C2.92172 12.5786 3.93913 13 5 13C6.06087 13 7.07828 12.5786 7.82843 11.8284C8.57857 11.0783 9 10.0609 9 9V3C9 2.46957 8.78929 1.96086 8.41421 1.58579C8.03914 1.21071 7.53043 1 7 1C6.46957 1 5.96086 1.21071 5.58579 1.58579C5.21071 1.96086 5 2.46957 5 3V10M12 1H25C25.5304 1 26.0391 1.21071 26.4142 1.58579C26.7893 1.96086 27 2.46957 27 3V27C27 27.5304 26.7893 28.0391 26.4142 28.4142C26.0391 28.7893 25.5304 29 25 29H5C4.46957 29 3.96086 28.7893 3.58579 28.4142C3.21071 28.0391 3 27.5304 3 27V16M22 9H14M22 15H14M22 21H8"
        stroke="url(#paint0_linear_308_13549)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_308_13549"
          x1="13.025"
          y1="-2.175"
          x2="13.8336"
          y2="30.4461"
          gradientUnits="userSpaceOnUse"
        >
          <StopSvg/>
          <StopStart/>
          <StopEnd/>
        </linearGradient>
      </defs>
    </AttachStyled>
  );
};

export default Attach;
