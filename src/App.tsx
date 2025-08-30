import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, Typography } from "@mui/material";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";

import { DashboardLayout } from "@toolpad/core/DashboardLayout";

import theme from "./Theme";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";

const NAVIGATION = [
  {
    segment: "/",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "teachers",
    title: "Teachers",
    icon: <PeopleIcon />,
  },
  {
    segment: "students",
    title: "Students",
    icon: <SchoolIcon />,
  },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ReactRouterAppProvider
          navigation={NAVIGATION}
          theme={theme}
          branding={{
            logo: <img src="/akademiLogo.svg" alt="akademi Logo" />,
            title: "Akademi",
            homeUrl: "/",
          }}
        >
          <DashboardLayout disableCollapsibleSidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="teachers" element={<Teachers />} />
              <Route path="students" element={<Students />} />
              <Route
                path="*"
                element={
                  <Box sx={{ p: 4 }}>
                    <Typography variant="h5">404 - Page Not Found</Typography>
                  </Box>
                }
              />
            </Routes>
          </DashboardLayout>
        </ReactRouterAppProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
