import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio";

const routes = [
  { path: "/", Page: settings.isSplash ? Splash : Home },
  { path: "/home", Page: Home },
  { path: "/experience", Page: Experience },
  { path: "/education", Page: Education },
  { path: "/contact", Page: Contact },
  { path: "/projects", Page: Projects },
];

if (settings.isSplash) routes.push({ path: "/splash", Page: Splash });

export default function Main({ theme }) {
  return (
    <HashRouter>
      <Switch>
        {routes.map(({ path, Page }) => (
          <Route key={path} exact path={path} render={(props) => <Page {...props} theme={theme} />} />
        ))}
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
}
