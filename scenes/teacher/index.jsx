import React, { useState } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import styles from './teacher.module.css';
import Image from 'next/image';
import circlePics from '../../public/assets/circle.png';
import buttonPics from '../../public/assets/button.png';
import dotsPics from '../../public/assets/dots.png';
import { tokens } from "../../theme";
import TeacherButton from "../teacherButton/index";
import PaginationNumber from "../pagination/index";

const TeacherPage = () => {
  const [spacing, setSpacing] = useState(2);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
   <>
   <TeacherButton />
   <Box
    sx={{
      flexGrow: 1,
    }}
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
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
            Dimitres viga
          </Typography>
          <Typography
            color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
            Mathematics 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
         </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
         <Box
           width="300px"
           height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           marginTop="20px"
         >
          <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
          Tom Housenburg
         </Typography>
         <Typography
            color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
           Science 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
         </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
          <Box
           width="300px"
           height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           marginTop="20px"
          >
          <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
             Dana Benevista
           </Typography>
           <Typography
             color={colors.grey[1000]}
            fontSize="18px"
            fontWeight="400"
            textAlign="center"
            marginTop="10px"
           >
            Art 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
          </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
       <Box
          width="300px"
          height="300px"
          backgroundColor={colors.primary[700]}
          borderRadius="3px"
          marginTop="20px"
          >
           <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
            Salvadore Morbeau
          </Typography>
          <Typography
           color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
            Biology
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
   <Box
    sx={{
      flexGrow: 1,
      marginTop: 10,
    }}
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
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
            Maria Historia
          </Typography>
          <Typography
            color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
            History
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
         </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
         <Box
           width="300px"
           height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           marginTop="20px"
         >
          <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
          Jack Sally 
         </Typography>
         <Typography
            color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
           Physics 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
         </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
          <Box
           width="300px"
           height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           marginTop="20px"
          >
          <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
            Lula Beatrice 
           </Typography>
           <Typography
             color={colors.grey[1000]}
            fontSize="18px"
            fontWeight="400"
            textAlign="center"
            marginTop="10px"
           >
            Algorithm
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
          </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
       <Box
          width="300px"
          height="300px"
          backgroundColor={colors.primary[700]}
          borderRadius="3px"
          marginTop="20px"
          >
           <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
            Nella Vita 
          </Typography>
          <Typography
           color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
            English
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

   <Box
    sx={{
      flexGrow: 1,
      marginTop: 10,
    }}
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
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
            Nadia Laravela
          </Typography>
          <Typography
            color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
            Programming 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
         </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
         <Box
           width="300px"
           height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           marginTop="20px"
         >
          <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
          Dakota Farral
         </Typography>
         <Typography
            color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
           Science 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
         </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
          <Box
           width="300px"
           height="300px"
           backgroundColor={colors.primary[700]}
           borderRadius="3px"
           marginTop="20px"
          >
          <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
             Miranda Adila
           </Typography>
           <Typography
             color={colors.grey[1000]}
            fontSize="18px"
            fontWeight="400"
            textAlign="center"
            marginTop="10px"
           >
            Art 
          </Typography>
          <Image 
            src={buttonPics}
            alt="buttons"
            className={styles.icons}
          />
          </Box>
       </Grid>
       <Grid item xs={6} sm={3}>
       <Box
          width="300px"
          height="300px"
          backgroundColor={colors.primary[700]}
          borderRadius="3px"
          marginTop="20px"
          >
           <Grid container spacing={2}>
           <Grid item xs={8}>  
            <Image 
              src={circlePics}
              alt="circle image"
              className={styles.image}
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
           Indiana Barker 
          </Typography>
          <Typography
           color={colors.grey[1000]}
           fontSize="18px"
           fontWeight="400"
           textAlign="center"
           marginTop="10px"
          >
            Biology
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

   { /* PAGINATION ROW */ }
   <PaginationNumber />
   </>
  );
}

export default TeacherPage;