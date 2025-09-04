import { Box, Typography } from "@mui/material";
import AddButton from "../components/AddButton";
import StudentsTable from "../components/StudentsTable";
import { useStudents } from "../queriesAndMutations";
import { studentsColumns } from "../constants";

export default function Students() {
  const { data: students, isLoading, error } = useStudents();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching students</p>;

  return (
    <Box sx={{ marginTop: 3, marginLeft: 4, marginRight: 4 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
      >
        Students
      </Typography>
      <Box
        sx={{
          mb: 5,
        }}
      >
        <AddButton title={"New Student"} />
      </Box>
      <StudentsTable students={students} columns={studentsColumns} />
    </Box>
  );
}
