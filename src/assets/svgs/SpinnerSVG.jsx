const SpinnerSVG = (props) => {
  const { fill1, height, width, className } = props;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke={fill1}
    >
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

SpinnerSVG.defaultProps = {
  fill1: "#1d2c5e",
  height: "50px",
  width: "50px",
  className: undefined,
};

export default SpinnerSVG;
