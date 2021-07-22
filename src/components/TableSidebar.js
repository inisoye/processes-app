import React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import VisuallyHidden from '@reach/visually-hidden';
import tw, { styled } from 'twin.macro';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import SidebarClose from '../icons/SidebarClose';

const StyledDialogContent = tw(
  DialogContent
)`min-h-full overflow-auto w-full max-w-2xl my-0 ml-auto mr-0 p-12 text-sm flex flex-col`;

const StyledSidebarHeader = tw.div`mb-12 flex justify-between items-start`;

const StyledSidebarHeading = tw.h2`text-3xl tracking-tighter mb-4`;

const StyledCloseDialogButton = tw.button`p-1.5 mt-1 hover:bg-chevyTeal-light rounded focus:outline-none focus:ring-4 focus:ring-blue-200 focus:ring-opacity-60 transition duration-500 ease-in-out`;

const StyledSidebarSection = tw.div`mb-12`;

const StyledSmallCapsHeading = tw.h3`uppercase text-xs tracking-wider text-chevyBlue-dark text-opacity-40 mb-4`;

const StyledSidebarSummaryLine = styled.p`
  ${tw`mb-4 font-semibold`};

  .regular-weight {
    ${tw`font-normal`};
  }
`;

const StyledSidebarTable = tw.table`w-full`;

const StyledSidebarTableHeading = tw.th`p-4 pl-1.5 pr-6 border-b border-chevyBlue-dark border-opacity-10 text-left text-xs font-normal text-chevyBlue-dark text-opacity-70`;

const StyledSidebarTableCell = tw.td`p-6 pl-1.5 border-b border-chevyBlue-dark border-opacity-10 text-left font-normal text-chevyBlue-dark`;

const StyledSidebarFooter = tw.div`w-full mt-auto pt-6`;

const StyledSidebarFooterButton = tw(
  Link
)`bg-chevyTeal hover:bg-chevyBlue focus:ring-4 focus:ring-blue-200 w-full px-5 pt-2.5 pb-3 text-white rounded transition duration-500 ease-in-out cursor-pointer block text-center`;

function TableSidebar({
  sidebarDataState,
  isDialogOpen,
  handleSidebarClose,
  showActionButtons,
}) {
  return (
    <DialogOverlay isOpen={isDialogOpen} onDismiss={handleSidebarClose}>
      <StyledDialogContent aria-label="Details for selected request">
        <div>
          <StyledSidebarHeader>
            <div>
              <StyledSidebarHeading>
                {sidebarDataState.processName}
              </StyledSidebarHeading>
            </div>

            <StyledCloseDialogButton
              className="close-button"
              onClick={handleSidebarClose}
            >
              <VisuallyHidden>Close</VisuallyHidden>
              <SidebarClose />
            </StyledCloseDialogButton>
          </StyledSidebarHeader>

          <StyledSidebarSection>
            <StyledSidebarSummaryLine>
              {sidebarDataState.stepsCount} steps
            </StyledSidebarSummaryLine>
            <StyledSidebarSummaryLine>
              <span className="regular-weight">Created by: </span>
              {sidebarDataState.creator}
            </StyledSidebarSummaryLine>
            <StyledSidebarSummaryLine>
              <span className="regular-weight"> Last edited on: </span>
              <time dateTime={sidebarDataState.dateCreated}>
                {Boolean(sidebarDataState.dateCreated) &&
                  format(
                    new Date(sidebarDataState.dateCreated),
                    'dd/MM/yyy, hh:mm aa	'
                  )}
              </time>
            </StyledSidebarSummaryLine>
          </StyledSidebarSection>

          <StyledSidebarSection>
            <StyledSmallCapsHeading>Process Details</StyledSmallCapsHeading>
            <p>{sidebarDataState.processDetails}</p>
          </StyledSidebarSection>

          <StyledSidebarSection>
            <StyledSmallCapsHeading>Approval Steps</StyledSmallCapsHeading>
            <StyledSidebarTable>
              <thead>
                <tr>
                  <StyledSidebarTableHeading>Step</StyledSidebarTableHeading>
                  <StyledSidebarTableHeading>
                    Approvers
                  </StyledSidebarTableHeading>
                </tr>
              </thead>
              <tbody>
                {sidebarDataState.steps?.map((step) => (
                  <tr key={step.id}>
                    <StyledSidebarTableCell>
                      {step.stepNumber}
                    </StyledSidebarTableCell>
                    <StyledSidebarTableCell>
                      {step.approvers.map((approver, index) => {
                        const { id, ...rest } = approver;

                        return (
                          <span key={id}>
                            {Object.values(rest)}
                            {step.approvers.length !== index + 1 ? ', ' : null}
                          </span>
                        );
                      })}
                    </StyledSidebarTableCell>
                  </tr>
                ))}
              </tbody>
            </StyledSidebarTable>
          </StyledSidebarSection>
        </div>

        <StyledSidebarFooter>
          <StyledSidebarFooterButton to="">
            Edit Process
          </StyledSidebarFooterButton>
        </StyledSidebarFooter>
      </StyledDialogContent>
    </DialogOverlay>
  );
}

export default TableSidebar;
