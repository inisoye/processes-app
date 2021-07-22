import { useFieldArray, Controller } from 'react-hook-form';
import tw, { styled } from 'twin.macro';
import VisuallyHidden from '@reach/visually-hidden';

import AutoComplete from './AutoComplete';

import DeleteInputIcon from '../icons/DeleteInput';
import PlusIcon from '../icons/Plus';

const StyledApproverInputWrapper = tw.div`flex w-full items-start`;

const StyledDeleteInputButton = styled.button`
  margin-top: 26px;

  ${tw`block p-1 ml-4 transition duration-500 ease-in-out bg-transparent rounded-full hover:bg-red-200 focus:outline-none focus:ring-4 focus:ring-red-300`}
`;

const StyledIconButton = tw.button`text-sm flex bg-chevyTeal hover:bg-chevyBlue text-white items-center mb-2 px-3 pt-1 pb-1 rounded focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-60 transition duration-500 ease-in-out`;

const StyledIconButtonText = tw.span`ml-2.5 pb-0.5`;

function SingleFormApprover({ parentIndex, control, register }) {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `steps[${parentIndex}].approvers`,
  });

  return (
    <div>
      {fields.map((item, k) => {
        return (
          <StyledApproverInputWrapper key={item.id}>
            <Controller
              control={control}
              name={`steps[${parentIndex}].approvers[${k}].approver${k + 1}`}
              render={({ field }) => (
                <AutoComplete
                  labelText={`Approver ${k + 1}`}
                  field={field}
                  defaultValue={item[`approver${k + 1}`]}
                />
              )}
            />

            <StyledDeleteInputButton type="button" onClick={() => remove(k)}>
              <DeleteInputIcon />
              <VisuallyHidden>Delete approver {k + 1}</VisuallyHidden>
            </StyledDeleteInputButton>
          </StyledApproverInputWrapper>
        );
      })}

      <StyledIconButton type="button" onClick={() => append({})}>
        <PlusIcon />
        <StyledIconButtonText>New approver</StyledIconButtonText>
      </StyledIconButton>
    </div>
  );
}

export default SingleFormApprover;
