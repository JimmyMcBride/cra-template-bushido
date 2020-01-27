import React from "react";

// Set up all routes in App
import { Route } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "bushido-strap";

// Using Web Font Loader for google fonts
import WebFont from "webfontloader";

// Importing all routes
import Dashboard from "./components/Dashboard";
import ReduxCounter from "./components/ReduxCounter";

const h_font = "Comfortaa";
const r_font = "Montserrat";

WebFont.load({
  google: {
    families: [h_font, r_font],
  },
});

export default function App() {
  return (
    <AppWrapper head_font={`${h_font}`} font={`${r_font}`}>
      <Route path="/" exact component={Dashboard} />
      <Route path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
}
