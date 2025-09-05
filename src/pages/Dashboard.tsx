import { Box, Typography } from "@mui/material";
import { useStudents, useTeachers } from "../queriesAndMutations";
import StudentsTable from "../components/StudentsTable";
import type { Student } from "../models";
import { unpaidStudentsColumns } from "../constants";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";

export default function Dashboard() {
  const {
    data: students,
    isLoading: studentsLoading,
    error: studentsError,
  } = useStudents([]);
  const {
    data: teachers,
    isLoading: teachersLoading,
    error: teachersError,
  } = useTeachers([]);

  const unpaidStudents =
    students?.filter((student: Student) => student.tuition > 0) || [];

  const stats = [
    {
      label: "Students",
      value: students?.length ?? 0,
      icon: "icon-students.svg",
    },
    {
      label: "Teachers",
      value: teachers?.length ?? 0,
      icon: "icon-teachers.svg",
    },
    { label: "Events", value: 5, icon: "icon-events.svg" },
  ];

  return (
    <LoadingErrorWrapper
      isLoading={studentsLoading || teachersLoading}
      error={studentsError || teachersError}
    >
      <Box sx={{ marginTop: 3, marginLeft: 4, marginRight: 4 }}>
        <Typography
          variant="h5"
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
        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "text.secondary", my: 3 }}
        >
          Unpaid Student tuition
        </Typography>
        <StudentsTable
          students={unpaidStudents}
          columns={unpaidStudentsColumns}
        />
      </Box>
    </LoadingErrorWrapper>
  );
}
