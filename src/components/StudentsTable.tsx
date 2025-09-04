import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import type { Student } from "../models";

const paginationModel = { page: 0, pageSize: 5 };

export default function StudentsTable({
  students,
  columns,
}: {
  students: Student[];
  columns: GridColDef<Student>[];
}) {
  return (
    <Paper
      sx={{
        height: 370,
        width: "100%",
        backgroundColor: "white",
        boxShadow: 2,
        mb: 3
      }}
    >
      <DataGrid<Student>
        rows={students}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
        rowSelection={false}
        sx={{
          border: 0,
          backgroundColor: "white",
          color: "text.secondary",
          fontWeight: "bold",
        }}
      />
    </Paper>
  );
}
