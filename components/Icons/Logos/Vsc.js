import * as React from "react";

const SvgVsc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 48 48"
    {...props}
  >
    <linearGradient
      id="VSC_svg__a"
      x1={37.8}
      x2={37.8}
      y1={43.37}
      y2={7.42}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0} stopColor="#29b6f6" />
      <stop offset={1} stopColor="#13b2f6" />
    </linearGradient>
    <path
      fill="url(#VSC_svg__a)"
      d="M34.176 4.249c.188.092 5.688 2.716 8.374 3.998A2.545 2.545 0 0 1 44 10.546v26.86c0 .981-.559 1.874-1.443 2.299a7499.18 7499.18 0 0 1-7.948 3.826c-.248.118-.9.469-1.428.469-.678 0-1.133-.316-1.58-.73L34 35.711V5.715L31.746 4.58c.482-.471 1.15-.58 1.545-.58.362 0 .657.138.885.249z"
    />
    <linearGradient
      id="VSC_svg__b"
      x1={6.085}
      x2={34.793}
      y1={34.801}
      y2={7.173}
      gradientUnits="userSpaceOnUse"
    >
      <stop offset={0.115} stopColor="#0076bb" />
      <stop offset={0.257} stopColor="#0069b0" />
      <stop offset={0.28} stopColor="#0069b0" />
      <stop offset={0.424} stopColor="#0069b0" />
      <stop offset={0.491} stopColor="#0072b7" />
      <stop offset={0.577} stopColor="#0076bb" />
      <stop offset={0.795} stopColor="#0076bb" />
      <stop offset={1} stopColor="#006eb9" />
    </linearGradient>
    <path
      fill="url(#VSC_svg__b)"
      d="m9 33.896 25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184-.655.604-27.005 24.593-27.005 24.593a2 2 0 0 0 .107 3.032s1.324 1.232 1.803 1.574c.736.525 1.703.585 2.432.051z"
    />
    <path
      fill="#0288d1"
      d="m9 14.104 25 19.054v8.771c0 1.198-1.42 2.193-2.399 1.341L4.658 18.761a2 2 0 0 1 .107-3.032s1.324-1.232 1.803-1.574c.736-.525 1.703-.585 2.432-.051z"
    />
  </svg>
);

export default SvgVsc;
