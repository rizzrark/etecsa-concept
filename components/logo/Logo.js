const Logo = ({ logoH, logoW, fillCurrent }) => {
  return (
    <div className="flex">
      <svg
        className={fillCurrent}
        id="SVGRoot"
        height={logoH}
        width={logoW}
        version="1.1"
        viewBox="0 0 240 240"
      >
        <path
          d="m120 1.7a119 119 0 0 0-118 119 119 119 0 0 0 119 119 119 119 0 0 0 119-119 119 119 0 0 0-119-119 119 119 0 0 0-0.491 0zm3.11 28.7h6e-3a89.9 89.9 0 0 1 29.5 4.99l-42.8 60.6-0.728-0.015-0.029 1.07-56.2 79.5a89.9 89.9 0 0 1-19.7-56.2 89.9 89.9 0 0 1 89.9-89.9zm-6.66 73.8 48.9 0.996-69.4 101a89.9 89.9 0 0 1-36-21.8zm30.8 45.1 60.5 1.24a89.9 89.9 0 0 1-84.7 59.6 89.9 89.9 0 0 1-16.7-1.57z"
          strokeMiterlimit="0"
          strokeWidth="0"
        />
      </svg>
      {/* <svg
        className={`w-28 self-end mb-1`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 69 27"
      >
        <text
          transform="translate(0 22)"
          fontSize="20"
          fontWeight="600"
          fontStyle="italic"
        >
          <tspan x="0" y="0">
            ETECSA
          </tspan>
        </text>
      </svg>{" "} */}
    </div>
  );
};

export default Logo;
