import type { GridColDef } from "@mui/x-data-grid";
import type { Student } from "./models";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export const unpaidStudentsColumns: GridColDef<Student>[] = [
  { field: "id", headerName: "ID", minWidth: 200 },
  { field: "name", headerName: "Name", minWidth: 200 },
  {
    field: "grade",
    headerName: "Grade",
    minWidth: 150,
  },
  {
    field: "tuition",
    headerName: "Tuition",
    minWidth: 150,
  },
];

export const studentsColumns: GridColDef<Student>[] = [
  { field: "id", headerName: "ID", minWidth: 200 },
  { field: "name", headerName: "Name", minWidth: 200 },
  {
    field: "grade",
    headerName: "Grade",
    minWidth: 150,
  },
  {
    field: "city",
    headerName: "City",
    minWidth: 150,
    valueGetter: (_value, row) => row.address.city,
  },
  {
    field: "contact",
    headerName: "Contact",
    minWidth: 200,
    renderCell: (params) => (
      <>
        <IconButton
          aria-label="phone"
          color="secondary"
          onClick={() =>
            (window.location.href = `tel:${params.row.contact.phone}`)
          }
        >
          <PhoneIcon />
        </IconButton>
        <IconButton
          aria-label="email"
          color="secondary"
          onClick={() =>
            (window.location.href = `mailto:${params.row.contact.email}`)
          }
        >
          <EmailIcon />
        </IconButton>
      </>
    ),
  },
];

