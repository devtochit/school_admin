import React from 'react';
import Pagination from '@mui/material/Pagination';
import { useTheme, Typography } from '@mui/material';
import Stack from '@mui/material/Pagination';
import { tokens } from '../../theme';
import Grid from "@mui/material/Grid";

const PaginationNumber = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
   <>
     <Stack xs={{ marginTop: 30, }} spacing={2}>
          {/* <Typography
            color={colors.grey[1000]}
            fontSize="18px"
            fontWeight="400"
            textAlign="center"
            marginTop="10px"
          >
            Showing 1-5 from 100 data
         </Typography> */}
        <Pagination count={10} color="secondary" />
    </Stack>
   </>
  );
}

export default PaginationNumber;