import React from "react"

const TelegramIcon = ({ width = 42, height = 42, fill = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 42 42"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={fill}
        d="M21-.021c11.598 0 21 9.4 21 21 0 11.597-9.402 21-21 21-11.597 0-21-9.403-21-21 0-11.6 9.403-21 21-21zm11.135 11.283c.331-1.045-.667-1.74-1.5-1.393l-23.01 9.398c-.833.348-.833 1.566 0 1.74l5.836 1.74 2.167 7.31c.167.695 1.167.87 1.668.347l2.834-2.958 6 4.524c.834.523 1.836 0 2.003-.87zm-3.228 2.75c.348-.165.697.33.348.494L17.915 23.9s-.175.165-.175.33l-.349 3.625c0 .165-.174.165-.174 0l-1.745-5.438c-.174-.33 0-.495.175-.66z"
      />
    </g>
  </svg>
)

export default TelegramIcon
