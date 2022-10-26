import Topnav from '../components/TopNav'
import React from "react";
import Head from "next/head";





// All static files like icons and json should be placed in the public folder

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link rel="manifest" href="/manifest.json" />

        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            width: "100%",
          }}
        >
          <Topnav />
          {props.children}
          <div style={{ flex: 1 }}></div>

        </div>
      </main>
    </>
  );
};

export default Layout;
