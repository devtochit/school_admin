import React from 'react';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styles from "./custom.module.css";


const CustomButton = () => {
    return (
     <Stack className={styles.rush} direction="row" spacing={2}>
     <Button className={styles.batmanButton}  variant="outlined">
        Save As Draft
     </Button>
     <Button classname={styles.titianButton} variant="contained">
        Submit
     </Button>
    </Stack>
    );
}

export default CustomButton;