import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from "../../theme";
import styles from './input.module.css';
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import { black } from "@mui/material/colors";
import CustomButton from "../customButton/index";

const label = { inputProps: { 'aria-labels': 'Check-box'}};

const FormField = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [value, setValue] = useState();

    const handleSubmit = async (event) => {
      event.preventDefault()

      const data = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        dob: event.target.dob.value,
        pob: event.target.pob.value,
        parentName: event.target.parentName.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
        address: event.target.address.value
      }
      // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
     }
      // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    alert(`Is this your full name: ${result.data}`)
    }

    const handleChange = (event) => {
      setValue(event.target.value);
    }
    return (
     <>
      <Box
       component="form"
       noValidate
       autoComplete="off"
      >
       <Typography
         color={colors.blueAccent[1000]}
         fontSize="36px"
         fontWeight="700"
         textAlign="left"
         marginTop="20px"
       >
        Add New Student 
        </Typography>
        <Box
         width="1400px"
         height="60px"
         boderRadius="20px 20px 0px 0px"
         padding="8px"
         backgroundColor={colors.greenAccent[1000]}
         marginTop="20px"
        >
         <Typography
           color={colors.primary[700]}
           textAlign="left"
           fontSize="24px"
           fontWeight="700"
           marginLeft="20px"
         >
           Student Details 
         </Typography>
        </Box>
        <Box
          width="1400px"
          height="700px"
          backgroundColor={colors.primary[700]}
          marginTop="30px"
          borderRadius="20px"
          component="form"
          noValidate
          autoComplete="off"
         >
         <form action="/send-data-here" onSubmit={handleSubmit} method="post">
            <Grid container spacing={4}>
              <Grid item xs={6} md={8}>
              <Typography className={styles.labelText1}>First Name *</Typography>
              <input type="text" id="firstName" name="firtsName" placeholder="Samantha" required className={styles.input1} />
               </Grid>
               <Grid item xs={6} md={4}>
                <Typography for="last" className={styles.labelText3}>Last Name *</Typography>
                <input type="text" id="lastName" name="lastName" placeholder="Williams" required className={styles.input} />
               </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs>
              <Typography className={styles.labelText0}>Date of Birth *</Typography>
              <input type="text" id="dob" name="dob" placeholder="24 Feburari" required className={styles.input1} />
               </Grid>
               <Grid item xs>
               <Typography for="last" className={styles.labelText2}>Place Of Birth *</Typography>
               <input type="text" id="place" name="place" placeholder="Jakarta" required className={styles.input} />
              </Grid>
               <Grid item xs>
                <Typography for="last" className={styles.labelPtsd}>Parent Name *</Typography>
                <input type="text" id="parent" name="parent" placeholder="Mana William" required className={styles.input3} />
               </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={6} md={8}>
              <Typography className={styles.labelText0}>Email *</Typography>
              <input type="text" id="email" name="email" placeholder="william@mail.com" required className={styles.input1} />
               </Grid>
               <Grid item xs={6} md={4}>
                <Typography for="last" className={styles.labelPtsd}>Phone *</Typography>
                <input type="text" id="phone" name="Phone" placeholder="+1234567890" required className={styles.input3} />
               </Grid>
            </Grid>
            <Box>
            <Typography className={styles.labelText4}>Address *</Typography>
              <textarea rows="4" cols="50" className={styles.textarea}>
              </textarea>
            </Box>
         </form>
         </Box>
         <Box
         width="1400px"
         height="60px"
         boderRadius="20px 20px 0px 0px"
         padding="8px"
         backgroundColor={colors.greenAccent[1000]}
        >
         <Typography
           color={colors.primary[700]}
           textAlign="left"
           fontSize="24px"
           fontWeight="700"
           marginLeft="20px"
         >
           Parent Details 
         </Typography>
        </Box>
        <Box
          width="1400px"
          height="650px"
          backgroundColor={colors.primary[700]}
          borderRadius="20px"
          marginTop="30px"
          component="form"
          noValidate
          autoComplete="off"
        >
        <form action="/send-data-here" method="post">
        <Grid container spacing={4}>
              <Grid item xs={6} md={8}>
              <Typography className={styles.labelText1}>First Name *</Typography>
              <input type="text" id="firstName" name="firtsName" placeholder="Samantha" required className={styles.input1} />
               </Grid>
               <Grid item xs={6} md={4}>
                <Typography for="last" className={styles.labelText3}>Last Name *</Typography>
                <input type="text" id="lastName" name="lastName" placeholder="Williams" required className={styles.input} />
               </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={6} md={8}>
              <Typography className={styles.labelText0}>Email *</Typography>
              <input type="text" id="email" name="email" placeholder="william@mail.com" required className={styles.input1} />
               </Grid>
               <Grid item xs={6} md={4}>
                <Typography for="last" className={styles.labelPtsd}>Phone *</Typography>
                <input type="text" id="phone" name="Phone" placeholder="+1234567890" required className={styles.input3} />
               </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={6} md={8}>
              <Typography className={styles.labelText4}>Address *</Typography>
              <textarea rows="4" cols="50" className={styles.textarea}>
              </textarea>
              </Grid>
              <Grid item xs={6} md={4}>
              <Typography className={styles.labelPtsd}>Payment*</Typography>
              <span className={styles.spanText}>Cash</span>
              <Checkbox 
                 {...label} 
                 defaultChecked
                 className={styles.checkText}
                />
                
              </Grid>
            </Grid>
        </form>
        </Box>
        <CustomButton />
      </Box>
     </>
    );
}

export default FormField;