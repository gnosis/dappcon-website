import React from 'react'

const MobileMenu = ({ width = 6, height = 28, fill = '#FF294E', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 6 28" {...props}>
    <g fill={fill} fill-rule="evenodd">
      <circle cx="3" cy="3" r="3" />
      <circle cx="3" cy="14" r="3" />
      <circle cx="3" cy="25" r="3" />
    </g>
  </svg>
)

export default MobileMenu
