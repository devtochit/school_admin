import React, { useState } from 'react';
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddIcon from '@mui/icons-material/Add';
import styles from './button.module.css';
import { Box, Typography ,useTheme} from "@mui/material";
import Stack from "@mui/material/Stack";
import Modal from "@mui/material/Modal";
import EducationInput from '../education/index';
import { tokens } from "../../theme";


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

const TeacherButton = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)
    return (
     <Stack className={styles.buttom} direction="row" spacing={2}>

      <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
                marginLeft:'10px'

          }}
          endIcon={<ArrowDropDownIcon />}

        >

        Newest
      </Button>
      <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
      onClick={handleOpen}
       startIcon={<AddIcon />} >
         New Teacher
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledBy="modal-modal-title"
        aria-describedBy="modal-modal-description"
      >
       <Box sx={style}>
        <EducationInput
        handleClose={handleClose} />
       </Box>
      </Modal>

     </Stack>
    );
}

export default TeacherButton;
