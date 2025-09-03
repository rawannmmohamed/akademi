import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import type { Teacher } from "../models";
import React from "react";

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    department: "Mathematics",
    phone: "+20 100 123 4567",
    email: "sarah.johnson@example.com",
  },
  {
    id: 2,
    name: "Mr. Ahmed Ali",
    department: "Physics",
    phone: "+20 101 234 5678",
    email: "ahmed.ali@example.com",
  },
  {
    id: 3,
    name: "Ms. Emily Brown",
    department: "Computer Science",
    phone: "+20 102 345 6789",
    email: "emily.brown@example.com",
  },
  {
    id: 4,
    name: "Dr. Omar Hassan",
    department: "Biology",
    phone: "+20 103 456 7890",
    email: "omar.hassan@example.com",
  },
  {
    id: 5,
    name: "Prof. Layla Youssef",
    department: "Chemistry",
    phone: "+20 104 567 8901",
    email: "layla.youssef@example.com",
  },
  {
    id: 6,
    name: "Dr. Omar Hassan",
    department: "Biology",
    phone: "+20 103 456 7890",
    email: "omar.hassan@example.com",
  },
];

export default function Teachers() {
  const [searchedValue, setSearchedValue] = React.useState("");
  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
  return (
    <Box sx={{ marginTop: 3, marginLeft: 4, marginRight: 4 }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "text.secondary", mb: 3 }}
      >
        Teachers
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "center",
            md: "center",
            lg: "space-between",
          },
          alignItems: "center",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          flexWrap: "wrap",
          gap: 2,
          mb: 5,
        }}
      >
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          clearIcon={false}
          onInputChange={(_, newInputValue) => setSearchedValue(newInputValue)}
          options={teachers.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search here"
              slotProps={{
                input: {
                  ...params.InputProps,
                  type: "search",
                },
              }}
              variant="filled"
              sx={{ minWidth: 300 }}
            />
          )}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "20px",
            height: 40,
            width: 200,
            color: "white",
            textTransform: "none",
          }}
        >
          New Teacher
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          mb: 3,
        }}
      >
        {filteredTeachers.map((teacher) => (
          <Card
            key={teacher.id}
            sx={{
              minWidth: 275,
              backgroundColor: "white",
              width: 300,
              height: 280,
              borderRadius: 5,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{ textAlign: "center", mb: 2 }}>
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: 25,
                  fontWeight: "bold",
                  mb: 2,
                }}
              >
                {teacher.name}
              </Typography>
              <Typography fontSize={20}>{teacher.department}</Typography>
            </CardContent>
            <CardActions sx={{ mb: 2 }}>
              <IconButton
                aria-label="phone"
                color="secondary"
                onClick={() => (window.location.href = `tel:${teacher.phone}`)}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                aria-label="email"
                color="secondary"
                onClick={() =>
                  (window.location.href = `mailto:${teacher.email}`)
                }
              >
                <EmailIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
