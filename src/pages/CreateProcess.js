import tw from 'twin.macro';

import Logobar from '../components/Logobar';
import FormPageHeader from '../components/FormPageHeader';
import ProcessForm from '../components/ProcessForm';

const StyledFormPageWrapper = tw.div`min-w-full min-h-screen bg-chevyTeal-light bg-opacity-50`;

function CreateProcess() {
  return (
    <StyledFormPageWrapper>
      <Logobar />

      <FormPageHeader />

      <ProcessForm />
    </StyledFormPageWrapper>
  );
}

export default CreateProcess;
