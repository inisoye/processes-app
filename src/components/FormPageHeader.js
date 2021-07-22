import { Link, useHistory } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import Logo from '../icons/Logo';

const StyledHeaderWrapper = tw.div`w-full bg-chevyTeal-light`;

const StyledHeader = styled.header`
  max-width: 1110px;

  ${tw`flex items-center justify-between w-full p-6 m-auto mt-6 md:px-16`};
`;

const StyledHeaderLeft = tw.div`mr-6`;

const StyledBackButton = tw.button`text-sm underline text-chevyTeal mb-4`;

const StyledAppPageHeading = tw.h1`text-2xl md:text-3xl tracking-tighter`;

function FormPageHeader() {
  const history = useHistory();

  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyledHeaderLeft>
          <StyledBackButton
            onClick={() => {
              history.goBack();
            }}
          >
            Go Back
          </StyledBackButton>

          <StyledAppPageHeading>Create a New Process</StyledAppPageHeading>
        </StyledHeaderLeft>

        <Link to="/">
          <Logo />
        </Link>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
}

export default FormPageHeader;
