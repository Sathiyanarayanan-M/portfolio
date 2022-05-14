import React from "react";
import * as Mui from "@mui/material";

export default function FullScreenDialog(props: FullScreenDialogType.Props) {
  const [showDialogue, setShowDialogue] = React.useState(false);

  const handleDialogue = () => {
    setShowDialogue(!showDialogue);
  };

  return (
    <Mui.Dialog
      fullScreen
      open={showDialogue}
      onClose={handleDialogue}
      TransitionComponent={(props) => <Mui.Slide direction="up" {...props} />}
    >
      {props.children || null}
    </Mui.Dialog>
  );
}

export namespace FullScreenDialogType {
  export interface Props {
    children: Child;
    handleDialogue: () => void;
  }
}
