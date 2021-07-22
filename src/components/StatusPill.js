import React from 'react';
import tw, { styled } from 'twin.macro';

const statusVariants = {
  accepted: tw`bg-green-700`,
  approved: tw`bg-green-700`,
  rejected: tw`bg-red-600`,
  pending: tw`bg-yellow-500`,
};

const StyledStatus = styled.span(() => [
  tw`px-2.5 pt-1 pb-1.5 rounded-full text-white text-xs border-chevyBlue-dark border-opacity-10`,
  ({ variant = 'pending' }) => statusVariants[variant],
  ({ isLarge }) => isLarge && tw`px-4 pt-1 pb-2 text-sm`,
]);

function StatusPill({ variant, isLarge }) {
  return (
    <StyledStatus isLarge={isLarge} variant={variant?.toLowerCase()}>
      {variant}
    </StyledStatus>
  );
}

export default StatusPill;
