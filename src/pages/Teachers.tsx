import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import type { Teacher } from "../models";
import React from "react";
import AddButton from "../components/AddButton";
import Search from "../components/Search";
import { useTeachers } from "../queriesAndMutations";
import LoadingErrorWrapper from "../components/LoadingErrorWrapper";

export default function Teachers() {
  const { data: teachers, isLoading, error } = useTeachers([]);
  const [searchedValue, setSearchedValue] = React.useState("");

  const filteredTeachers = teachers?.filter((teacher: Teacher) =>
    teacher.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
  return (
    <LoadingErrorWrapper isLoading={isLoading} error={error}>
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
        <Search
          data={teachers?.map((teacher:Teacher) => teacher.name)}
          searchedValue={searchedValue}
          setSearchedValue={setSearchedValue}
        />
        <AddButton title={"New Techer"} />
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
        {filteredTeachers?.map((teacher:Teacher) => (
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
    </LoadingErrorWrapper>
  );
}
