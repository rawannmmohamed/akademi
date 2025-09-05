import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

type LoadingErrorWrapperProps = {
  isLoading: boolean;
  error?: unknown;
  children: React.ReactNode;
};
const centerStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function LoadingErrorWrapper({
  isLoading,
  error,
  children,
}: LoadingErrorWrapperProps) {
  if (isLoading) {
    return (
      <Box sx={centerStyle}>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={centerStyle}>
        <Typography variant="h6" color="text.secondary">
          Error fetching data
        </Typography>
      </Box>
    );
  }

  return <>{children}</>;
}
