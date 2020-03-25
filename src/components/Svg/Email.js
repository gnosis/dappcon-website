import React from "react"

const EmailIcon = ({ width = 42, height = 42, fill = "#fff" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 42 42"
  >
    <path
      fill={fill}
      d="M21,0C9.4,0,0,9.4,0,21c0,11.6,9.4,21,21,21c11.6,0,21-9.4,21-21C42,9.4,32.6,0,21,0z M9.1,12h23.9
	c0.6,0,0.8,0.7,0.4,1.1L21.5,23.2c-0.2,0.2-0.6,0.2-0.8,0l-12-10.1C8.3,12.7,8.5,12,9.1,12z M33.8,29.4c0,0.3-0.2,0.5-0.5,0.5H8.8
	c-0.3,0-0.5-0.2-0.5-0.5V15.3c0-0.5,0.5-0.7,0.9-0.4l11.6,9.8c0.2,0.2,0.5,0.2,0.7,0l11.4-9.8c0.3-0.3,0.9,0,0.9,0.4V29.4z"
    />
  </svg>
)

export default EmailIcon
