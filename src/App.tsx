import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Box, Typography } from "@mui/material";
import { ReactRouterAppProvider } from "@toolpad/core/react-router";

import {
  DashboardLayout,
  DashboardSidebarPageItem,
} from "@toolpad/core/DashboardLayout";

import theme from "./Theme";
import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import Students from "./pages/Students";

const NAVIGATION = [
  {
    segment: "",
    title: "Dashboard",
    icon: <img src="/Home.svg" alt="home icon" width={30} height={30} />,
  },
  {
    segment: "teachers",
    title: "Teachers",
    icon: <img src="/Teacher.svg" alt="home icon" width={30} height={30} />,
  },
  {
    segment: "students",
    title: "Students",
    icon: <img src="/Student.svg" alt="home icon" width={30} height={30} />,
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
            homeUrl: "",
          }}
        >
          <DashboardLayout
            disableCollapsibleSidebar
            renderPageItem={(item) => (
              <Box
                sx={{
                  "& .MuiListItem-root": {
                    paddingLeft: 1,
                    paddingRight: 0,
                    width: "100%",
                    marginY: 3,
                  },
                  "& .MuiListItemButton-root.Mui-selected": {
                    bgcolor: "#F3F4FF",
                    color: "#4D44B5",
                    borderRadius: 0,
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  },
                  "& .MuiListItemButton-root.Mui-selected .MuiListItemIcon-root, & .MuiListItemButton-root.Mui-selected .MuiListItemText-primary":
                    {
                      color: "#4D44B5",
                      fontWeight: 600,
                    },
                }}
              >
                <DashboardSidebarPageItem item={item} />
              </Box>
            )}
          >
            <Routes>
              <Route path="" element={<Dashboard />} />
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
