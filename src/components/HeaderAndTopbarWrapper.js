import React from 'react';
import tw from 'twin.macro';

const StyledWrapper = tw.div`bg-chevyTeal-light bg-opacity-60 w-full border-b border-chevyBlue-dark border-opacity-10`;

function HeaderAndTopbarWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}

export default HeaderAndTopbarWrapper;
