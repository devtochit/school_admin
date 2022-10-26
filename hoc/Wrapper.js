import React from "react";
//Our MUI Theme object - inject theme to the whole project
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../helpers/theme";

import Layout from "./Layout";

/**
  This function consumes a component and wraps it under layout.
  Additionally you can have some checks in this function like conditional access
  to a particular page based on user authentication.

  You can also implement your own function. Goal is to have all your components wrapped with the Layout HOC and Theme Provider
 */

const Wrapper = (Component) => {



    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...props} />
        </Layout>
      </ThemeProvider>
    );
  };




export default Wrapper;
