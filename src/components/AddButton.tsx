import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const AddButton = ({ title }: { title: string }) => {
  return (
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
      {title}
    </Button>
  );
};

export default AddButton;
