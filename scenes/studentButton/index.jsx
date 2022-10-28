import React, { useState } from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import styles from '../teacherButton/button.module.css';
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import FormField from  '../input/index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1475,
  height: 850,
  overflow: 'scroll',
  bgcolor: '#E5E5E5',
  zIndex: 10,
  p: 6,
};

const StudentButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
    return (
     <Stack className={styles.buttom} direction="row" spacing={2}>
      <div>
      <Button className={styles.moneyButton} variant="outlined" endIcon={<ArrowDropDownIcon />}>
        Newest
      </Button>
      <Button className={styles.wizardButton} variant="contained" onClick={handleOpen} startIcon={<AddIcon />}>
        New Student
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledBy="modal-modal-title"
        aria-describedBy="modal-modal-description"
      >
       <Box sx={style}>
        <FormField handleClose={handleClose} />
       </Box>
      </Modal>
      </div>
     </Stack>
    );
}

export default StudentButton;
