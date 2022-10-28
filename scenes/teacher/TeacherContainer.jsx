import React, { useState } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from './teacher.module.css';
import Image from 'next/image';
import circlePics from '../../circle.png';
import buttonPics from '../../button.png';
import dotsPics from '../../dots.png';
import {mockTeachers} from '../../data/mockData'
import { tokens } from "../../theme";
import TeacherButton from "../teacherButton/index";
import PaginationNumber from "../pagination/index";

const TeacherContainer = () => {

  const [spacing, setSpacing] = useState(2);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
   <>
            { mockTeachers.map((data,i)=>(
        <Box
        key={`${data.user}-${i}`}
        // sx={{flexGrow: 1}}
        display='flex'

        >

        <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
                <Box
                width="300px"
                height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           alignItems="center"
           marginTop="20px"

        >
        <Grid container spacing={2}>
          <Grid item xs={8}>
           <Image
             src={data.img}
             alt="circle image"
             className={styles.image}
             width={120}
             height={120}
          />
         </Grid>
         <Grid item xs={4}>
           <Image
             src={dotsPics}
             alt="dots"
             className={styles.dots}
           />
         </Grid>
        </Grid>
         <Typography
           color={colors.blueAccent[1000]}
           fontSize="24px"
           textAlign="center"
           fontWeight="700"
         >
           { data.user}
         </Typography>
         <Typography
           color={colors.grey[1000]}
          fontSize="18px"
          fontWeight="400"
          textAlign="center"
          marginTop="10px"
         >
           {data.subject}
         </Typography>
         <Image
           src={buttonPics}
           alt="buttons"
           className={styles.icons}
         />
        </Box>
      </Grid>
      </Grid>
 </Box>
             ))}


</>
 )}

  export default TeacherContainer;
