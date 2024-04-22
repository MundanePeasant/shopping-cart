import './Icon.css';

function HomeIcon({ color }) {
  return (
    <svg
      className="home-icon"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 -10 120 125"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path d="M77.94,52.62c-0.6,0-1.2-0.21-1.68-0.65L50,28.07l-26.26,23.9c-1.02,0.93-2.6,0.86-3.53-0.17    c-0.93-1.02-0.86-2.6,0.17-3.53l27.94-25.43c0.95-0.87,2.41-0.87,3.37,0l27.94,25.43c1.02,0.93,1.1,2.51,0.17,3.53    C79.3,52.35,78.62,52.62,77.94,52.62z" />
        </g>
        <g>
          <polygon points="50,30.73 26.43,52.19 26.43,77.81 45.55,77.81 45.55,61.66 54.45,61.66 54.45,77.81 73.57,77.81 73.57,52.19       " />
        </g>
      </g>
    </svg>
  );
}

export default HomeIcon;
