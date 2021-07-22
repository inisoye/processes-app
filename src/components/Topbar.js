import tw, { styled } from 'twin.macro';
import { Link } from 'react-router-dom';

import PlusIcon from '../icons/Plus';

const StyledTopbar = styled.div`
  max-width: 1110px;

  ${tw`flex items-center justify-between w-full p-6 m-auto md:px-16`};
`;

const StyledAppPageHeading = tw.h1`text-3xl tracking-tighter `;

const StyledIconButton = tw(
  Link
)`text-sm flex bg-chevyTeal hover:bg-chevyBlue text-white items-center px-3 pt-1 pb-1 rounded focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-60 transition duration-500 ease-in-out`;

const StyledIconButtonText = tw.span`ml-2.5 pb-0.5`;

function Topbar() {
  return (
    <StyledTopbar>
      <StyledAppPageHeading>Processes</StyledAppPageHeading>

      <div>
        <StyledIconButton to="/create-process">
          <PlusIcon />
          <StyledIconButtonText>Create New</StyledIconButtonText>
        </StyledIconButton>
      </div>
    </StyledTopbar>
  );
}

export default Topbar;
