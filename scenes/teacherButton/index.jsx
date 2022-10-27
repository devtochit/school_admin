import React from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import styles from './button.module.css';
import Stack from "@mui/material/Stack";

const TeacherButton = () => {
    return (
     <Stack className={styles.buttom} direction="row" spacing={2}>
      <Button className={styles.moneyButton} variant="outlined" endIcon={<ArrowDropDownIcon />}>
        Newest 
      </Button>
      <Button className={styles.wizardButton} variant="contained" startIcon={<AddIcon />}>
        New Student
      </Button>
     </Stack>
    );
}

export default TeacherButton;