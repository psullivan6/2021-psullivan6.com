import React from 'react';

import Box from '../Box';

const Logo = (props) => (
  <Box
    as="svg"
    display="block"
    width={75}
    height={96}
    marginX="auto"
    xmlns="http://www.w3.org/2000/Box"
    viewBox="0 0 75 96"
    fill="currentColor"
    {...props}
  >
    <path
      d="M35,6a38,38,0,0,1,0,76H22v9.53l-16-8V6H35M22,66H35a22,22,0,0,0,0-44H22V66M35,2H2V86L26,98V86h9A42,42,0,0,0,35,2ZM26,62V26h9a18,18,0,0,1,0,36Z"
      transform="translate(-2 -2)"
    />
  </Box>
);

export default Logo;
