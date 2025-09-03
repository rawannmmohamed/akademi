import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID",minWidth:200 },
  { field: "name", headerName: "Name",minWidth:200 },

  {
    field: "grade",
    headerName: "Grade",
    minWidth: 150,
  },
  { field: "city", headerName: "city",minWidth:150 },
  { field: "contact", headerName: "Contact",minWidth:200 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function StudentsTable({ students }: { students: any }) {
  return (
    <Paper sx={{ height: 400, width: "100%",backgroundColor:"white",boxShadow:2}}>
      <DataGrid
        rows={students}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection={false}
        rowSelection={false}
        sx={{ border: 0 ,backgroundColor:"white",color:"text.secondary",fontWeight:"bold"}}
        
      />
    </Paper>
  );
}
