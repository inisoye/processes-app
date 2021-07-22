import React from 'react';

import { useForm } from 'react-hook-form';
import tw, { styled } from 'twin.macro';

import SingleFormStep from './SingleFormStep';

const StyledProcessForm = styled.form`
  max-width: 1110px;

  ${tw`w-full p-6 pt-10 m-auto text-sm md:px-16`};
`;

const StyledInputLabel = tw.label`font-semibold text-sm mb-2 block`;

const StyledInput = tw.input`w-full max-w-md px-4 pt-2 pb-2.5 border border-chevyBlue-dark border-opacity-10 rounded focus:outline-none focus:ring-4 focus:ring-chevyTeal-light focus:border-chevyTeal transition duration-500 ease-in-out placeholder-chevyBlue-dark placeholder-opacity-40 mb-10`;

const StyledFormLegend = tw.legend`font-semibold text-sm mb-2`;

const StyledCheckboxesWrapper = tw.fieldset`mb-10`;

const StyledCheckboxWrapper = styled.label`
  ${tw`cursor-pointer flex items-center space-x-3 bg-white w-full max-w-md px-4 pt-2 py-2.5 rounded mb-2 border border-chevyBlue-dark border-opacity-10 focus-within:ring-4 focus-within:ring-chevyTeal-light focus-within:border-chevyTeal transition duration-500 ease-in-out`};
`;

const StyledCheckboxText = tw.span`pb-0.5 text-chevyBlue-dark text-opacity-40`;

const StyledCheckbox = styled.input`
  ${tw`w-5 h-5 border rounded appearance-none border-chevyBlue-dark border-opacity-20 checked:bg-chevyTeal focus:outline-none`};

  &:checked + span {
    ${tw`text-chevyTeal`}
  }
`;

const StyledNewProcessButton = tw.button`text-white w-full max-w-md pt-2 pb-2.5 bg-green-700 hover:bg-green-800 transition duration-500 ease-in-out rounded`;

const defaultValues = {
  processName: 'Default process',
  hasAttachments: true,
  denyOnSingleRejection: false,
  steps: [
    {
      approvers: [{ approver1: 'Finance Lead' }, { approver2: 'Finance Lead' }],
    },
    {
      approvers: [{ approver1: 'Finance Lead' }, { approver2: 'Finance Lead' }],
    },
  ],
};
// const defaultValues = {};

function ProcessForm() {
  const { control, register, handleSubmit, getValues, errors, setValue } =
    useForm({ defaultValues });

  return (
    <StyledProcessForm onSubmit={handleSubmit((data) => console.log(data))}>
      <StyledInputLabel htmlFor="process-name">Process name</StyledInputLabel>
      <StyledInput
        type="text"
        placeholder="e.g. Loan Requests"
        name="processName"
        id="process-name"
        {...register('processName')}
      />

      <StyledCheckboxesWrapper>
        <StyledFormLegend>Process features</StyledFormLegend>

        <StyledCheckboxWrapper htmlFor="has-attachments">
          <StyledCheckbox
            type="checkbox"
            name="hasAttachments"
            id="has-attachments"
            {...register('hasAttachments')}
          />
          <StyledCheckboxText>
            This process must have attachments
          </StyledCheckboxText>
        </StyledCheckboxWrapper>

        <StyledCheckboxWrapper htmlFor="deny-single-rejection">
          <StyledCheckbox
            type="checkbox"
            name="denyOnSingleRejection"
            id="deny-single-rejection"
            {...register('denyOnSingleRejection')}
          />
          <StyledCheckboxText>Deny on single rejection</StyledCheckboxText>
        </StyledCheckboxWrapper>
      </StyledCheckboxesWrapper>

      <SingleFormStep
        {...{ control, register, defaultValues, getValues, setValue, errors }}
      />

      <div>
        <StyledNewProcessButton type="submit">
          Save new process
        </StyledNewProcessButton>
      </div>
    </StyledProcessForm>
  );
}

export default ProcessForm;
