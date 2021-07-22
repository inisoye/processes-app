import React from 'react';
import Downshift from 'downshift';
import tw, { styled } from 'twin.macro';

import ChevronDown from '../icons/ChevronDown';

const items = [
  { value: 'Internal Control Officer' },
  { value: 'General Manager' },
  { value: 'Finance Lead' },
  { value: 'Cooporate Services Lead' },
];

const StyledDownshiftInnerContainer = tw.div`w-full max-w-md relative`;

const StyledSmallInputLabel = tw.label`text-xs mb-1 block`;

const StyledInputContainer = tw.div`mb-2 px-4 flex items-center justify-between w-full max-w-md border border-chevyBlue-dark border-opacity-10 rounded focus:outline-none focus-within:ring-4 focus-within:ring-chevyTeal-light focus-within:border-chevyTeal transition duration-500 ease-in-out placeholder-chevyBlue-dark placeholder-opacity-40 bg-white `;

const StyledInput = tw.input`pt-2 pb-2.5 w-full focus:outline-none text-sm`;

const StyledDropdownButton = tw.button`py-2 focus:outline-none`;

const StyledDropdownList = styled.ul(() => [
  tw`absolute z-10 w-full max-w-md overflow-auto bg-white rounded max-h-40`,
  // ({ isOpen }) => isOpen && tw`border border-chevyBlue-dark border-opacity-10`,
]);

const StyledDropdownListItem = styled.li(() => [
  tw`pt-2 pb-2.5 px-4 cursor-pointer`,
  ({ isHighlighted }) => isHighlighted && tw`bg-chevyTeal-light`,
  ({ isSelected }) => isSelected && tw`font-semibold`,
]);

function AutoComplete({ labelText, field, defaultValue }) {
  return (
    <Downshift
      {...field}
      // attach value to react hook form
      onChange={(selection) => {
        field.onChange(selection.value);
      }}
      itemToString={(item) => {
        return item ? item.value : '';
      }}
      initialSelectedItem={defaultValue ? { value: defaultValue } : null}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
        <StyledDownshiftInnerContainer>
          <StyledSmallInputLabel {...getLabelProps()}>
            {labelText}
          </StyledSmallInputLabel>
          <StyledInputContainer
            {...getRootProps({}, { suppressRefError: true })}
          >
            <StyledInput {...getInputProps()} />
            <StyledDropdownButton
              {...getToggleButtonProps()}
              aria-label={'toggle menu'}
            >
              <ChevronDown />
            </StyledDropdownButton>
          </StyledInputContainer>
          <StyledDropdownList {...getMenuProps()} isOpen={isOpen}>
            {isOpen
              ? items
                  .filter(
                    (item) => !inputValue || item.value.includes(inputValue)
                  )
                  ?.map((item, index) => (
                    <StyledDropdownListItem
                      isHighlighted={highlightedIndex === index}
                      isSelected={selectedItem === item}
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                      })}
                    >
                      {item.value}
                    </StyledDropdownListItem>
                  ))
              : null}
          </StyledDropdownList>
        </StyledDownshiftInnerContainer>
      )}
    </Downshift>
  );
}

export default AutoComplete;
