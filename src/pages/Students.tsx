import { Box, Typography } from "@mui/material";
import AddButton from "../components/AddButton";
import StudentsTable from "../components/StudentsTable";
import { useStudents } from "../queriesAndMutations";
import { studentsColumns } from "../constants";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";

export default function Students() {
  const { data: students, isLoading, error } = useStudents([]);

  return (
    <LoadingErrorWrapper isLoading={isLoading} error={error}>
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
    </LoadingErrorWrapper>
  );
}
