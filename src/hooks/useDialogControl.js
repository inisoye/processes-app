import React from 'react';

const useDialogControl = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return {
    isDialogOpen,
    openDialog,
    closeDialog,
  };
};

export default useDialogControl;
