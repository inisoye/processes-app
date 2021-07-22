import { Link } from 'react-router-dom';
import tw, { styled } from 'twin.macro';

import Logo from '../icons/Logo';
import HeaderAvatarButton from './HeaderAvatarButton';

const StyledHeader = styled.header`
  max-width: 1110px;

  ${tw`flex items-center justify-between w-full p-6 m-auto md:px-16`};
`;

function Header() {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo />
      </Link>
      <HeaderAvatarButton />
    </StyledHeader>
  );
}

export default Header;
