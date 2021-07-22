import { useFieldArray } from 'react-hook-form';
import tw from 'twin.macro';

import SingleFormApprover from './SingleFormApprover';

const StyledApprovalStepList = tw.ul`mb-10`;

const StyledApprovalStepListItem = tw.li`mb-10`;

const StyledFormLegend = tw.legend`font-semibold text-sm mb-3`;

const StyledDeleteStep = tw.button`p-1 pb-1.5 px-2.5 text-white rounded transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-200 text-xs`;

const StyledNewStepButton = tw.button`mb-10 text-white w-full max-w-md pt-2 pb-2.5 bg-chevyBlue hover:bg-chevyTeal transition duration-500 ease-in-out rounded`;

function SingleFormStep({ control, register, setValue, getValues }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'steps',
  });

  console.log(fields);

  return (
    <>
      <StyledApprovalStepList>
        {fields.map((item, index) => {
          console.log(item);

          return (
            <StyledApprovalStepListItem key={item.id}>
              <fieldset>
                <StyledFormLegend>
                  Process approval step {index + 1}
                </StyledFormLegend>

                <SingleFormApprover
                  parentIndex={index}
                  {...{ control, register }}
                />
              </fieldset>

              <StyledDeleteStep type="button" onClick={() => remove(index)}>
                Delete step {index + 1}
              </StyledDeleteStep>
            </StyledApprovalStepListItem>
          );
        })}
      </StyledApprovalStepList>

      <div>
        <StyledNewStepButton
          type="button"
          onClick={() => {
            append({});
          }}
        >
          Add new step
        </StyledNewStepButton>
      </div>
    </>
  );
}

export default SingleFormStep;
