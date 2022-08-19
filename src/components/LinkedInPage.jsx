import React, { useState } from "react";
import axios from "axios";

import { LinkedIn } from "react-linkedin-login-oauth2";
// You can use provided image shipped by this package or using your own
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

function LinkedInPage() {
  const redirecturi = "https://y-b-a-king-whn-u-could-b-a-god.netlify.app/linkedin";
  const clientid = "86avzvskpzw7f5";
  const clientSecret = "Nm7IaXgwyEHdgtAV";
  // const successHandler = async (code) => {

  //   const { data } = await axios.post(` https://www.linkedin.com/oauth/v2/accessToken`
  //   );
  // };

  const successHandler = async (code) => {
    const config = {
      Headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const data = await axios.post(
      `https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=86avzvskpzw7f5&client_secret=Nm7IaXgwyEHdgtAV&code=${code}&redirect_uri=https://y-b-a-king-whn-u-could-b-a-god.netlify.app/linkedin`,
      config
    );
  };
  return (
    <LinkedIn
      clientId={clientid}
      redirectUri={redirecturi}
      onSuccess={(code) => {
        successHandler(code);
        console.log(code);
      }}
      onError={(error) => {
        console.log(error);
      }}>
      {({ linkedInLogin }) => (
        <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: "180px", cursor: "pointer" }}
        />
      )}
    </LinkedIn>
  );
}

export default LinkedInPage;
