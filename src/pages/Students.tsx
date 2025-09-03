import { Box, Typography } from "@mui/material";
import AddButton from "../components/AddButton";
import StudentsTable from "../components/StudentsTable";

export default function Students() {
  const students = [
    { id: 1, name: "Jon jon jon honson", age: 35,city:"cairo",contact:"0123456789",grade:"A" },
    { id: 2, name: "Cersei", age: 42 },
    { id: 3, name: "Jaime", age: 45 },
    { id: 4, name: "Arya", age: 16 },
    { id: 5, name: "Daenerys", age: null },
    { id: 6, name: "Jon", age: 150 },
    { id: 7, name: "Ferrara", age: 44 },
    { id: 8, name: "Rossini", age: 36 },
    { id: 9, name: "Harvey", age: 65 },
  ];
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
      <StudentsTable students={students} />
    </Box>
  );
}
