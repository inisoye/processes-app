import tw from 'twin.macro';

const StyledTopBar = tw.div`w-full h-1.5 bg-chevyTeal block`;
const StyledBottomBar = tw(StyledTopBar)` bg-chevyRed`;

function Logobar() {
  return (
    <div aria-hidden>
      <StyledTopBar></StyledTopBar>
      <StyledBottomBar></StyledBottomBar>
    </div>
  );
}

export default Logobar;
