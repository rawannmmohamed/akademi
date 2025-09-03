import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";

interface SearchProps {
  data: string[];
  searchedValue: string;
  setSearchedValue: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ data, searchedValue, setSearchedValue }) => {
  return (
    <Autocomplete
      id="free-solo-demo"
      freeSolo
      clearIcon={false}
      inputValue={searchedValue} 
      onInputChange={(_, newInputValue) => setSearchedValue(newInputValue)}
      options={data}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search here"
          variant="filled"
          sx={{ minWidth: 300 }}
        />
      )}
    />
  );
};

export default Search;
