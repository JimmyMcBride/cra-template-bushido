import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using AppWrapper to set font and background for the app
import { AppWrapper } from "bushido-strap";

// Importing all routes
import Dashboard from "./views/Dashboard";
import ReduxCounter from "./views/ReduxCounter";

// Using Web Font Loader for google fonts
import WebFont from "webfontloader";

// setting our font variables
const h_font = "Comfortaa";
const r_font = "Montserrat";

// using WebFont to easily access Google fonts
WebFont.load({
  google: {
    families: [h_font, r_font],
  },
});

export default function App() {
  return (
    <AppWrapper head_font={h_font} font={r_font}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
}
