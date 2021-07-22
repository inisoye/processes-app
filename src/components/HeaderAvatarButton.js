import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button';
import VisuallyHidden from '@reach/visually-hidden';
import '@reach/menu-button/styles.css';
import tw from 'twin.macro';

const StyledMenuButton = tw(
  MenuButton
)`bg-chevyBlue-dark rounded-full w-10 h-10 pb-1 flex justify-center items-center focus:outline-none focus:ring-4 focus:ring-blue-200`;

const StyledMenuButtonText = tw.span`text-white text-xs`;

const StyledMenuList = tw(
  MenuList
)`border border-chevyBlue-dark! mt-2 rounded border-opacity-10!`;

const StyledMenuItem = tw(
  MenuItem
)`hover:bg-chevyTeal-light! text-chevyBlue-dark! pb-2! text-sm transition duration-500 ease-in-out`;

function HeaderAvatarButton() {
  return (
    <Menu>
      <StyledMenuButton>
        <div aria-hidden>
          <StyledMenuButtonText>TM</StyledMenuButtonText>
        </div>
        <VisuallyHidden>Full Name's profile</VisuallyHidden>
      </StyledMenuButton>

      <StyledMenuList>
        <StyledMenuItem onSelect={() => console.log('account')}>
          Account
        </StyledMenuItem>
        <StyledMenuItem onSelect={() => console.log('sign out')}>
          Sign Out
        </StyledMenuItem>
      </StyledMenuList>
    </Menu>
  );
}

export default HeaderAvatarButton;
