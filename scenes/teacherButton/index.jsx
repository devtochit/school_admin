import React from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import styles from './button.module.css';
import Stack from "@mui/material/Stack";

const TeacherButton = () => {
    return (
     <Stack className={styles.buttom} direction="row" margin-left={1} spacing={2}>
      <Button variant="outlined"  endIcon={<ArrowDropDownIcon />}color='secondary'   >
        Newest
      </Button>
      <Button  variant="contained" startIcon={<AddIcon />} color='secondary'   >
        New Teacher
      </Button>
     </Stack>
    );
}

export default TeacherButton;
