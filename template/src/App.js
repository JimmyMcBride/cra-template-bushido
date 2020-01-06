import React from 'react';

// Set up all routes in App
import { Route } from 'react-router-dom';

// Using custom styled components from Global folder in components
import { AppWrapper } from 'bushido-strap';

// Importing all routes
import Dashboard from './components/Dashboard';
import ReduxCounter from './components/ReduxCounter';

export default function App() {
  return (
    <AppWrapper>
      <Route path="/" exact component={Dashboard} />
      <Route path="/counter" component={ReduxCounter} />
    </AppWrapper>
  );
}
