import React from "react";
import { Backdrop, CircularProgress, styled } from "@mui/material";

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
}));

interface LoadingOverlayProps {
  visible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible }) => (
  <StyledBackdrop open={visible}>
    <CircularProgress color="inherit" />
  </StyledBackdrop>
);
