import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "../../components/layout";
import SEO from "../../components/seo";

import Navigation from "../../sections/General/Navigation";
import Footer from "../../sections/General/Footer";
import Community from "../../sections/Community";

import { GlobalStyle } from "../../sections/app.style";
import lighttheme from "../../theme/app/themeStyles";
import darktheme from "../../theme/app/darkThemeStyles";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
const CommunityIndex = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if(cookies.Theme !== undefined)
      setTheme(cookies.Theme);
  }, []);
  const themeSetter = (thememode) => {
    setTheme(thememode);
  };
  return(
    <ThemeProvider theme={theme === "light" ? lighttheme : darktheme}>
      <Layout>
        <GlobalStyle />
        <SEO title="Cloud Native, Kubernetes, and Service Mesh Community"
          description="The Cloud Native Management Community at Layer5 - Learn, Share, Engage.
           Join the award-winning open source community - the warmest and most welcoming open source community around."
          image="/images/layer5-tag-community-dark-bg.png" />
        <Navigation theme={theme} themeSetter={themeSetter}/>
        <Community />
        <Footer />
      </Layout>
    </ThemeProvider>
  );
};
export default CommunityIndex;
