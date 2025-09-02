import { Box, Typography } from "@mui/material";
import DashboardTable from "../components/DashboardTable";

export default function Dashboard() {
  const stats = [
    { label: "Students", value: 752, icon: "icon-students.svg" },
    { label: "Teachers", value: 30, icon: "icon-teachers.svg" },
    { label: "Events", value: 5, icon: "icon-events.svg" },
  ];

  return (
    <Box sx={{ marginTop: 3, marginLeft: 4, marginRight: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
      >
        Dashboard
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
        }}
      >
        {stats.map((item) => (
          <Box
            key={item.label}
            sx={{
              flex: 1,
              backgroundColor: "white",
              borderRadius: "20px",
              p: 3,
              display: "flex",
              alignItems: "center",
              boxShadow: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 4,
              }}
            >
              <img
                src={item.icon}
                alt={`${item.label} icon`}
                style={{ width: "50px", height: "50px" }}
              />
            </Box>

            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: "500" }}>
                {item.label}
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "text.secondary" }}
              >
                {item.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <DashboardTable />
    </Box>
  );
}
