# Welcome to Jimmy's Custom Template!

## How To Install

### yarn

`yarn create react-app <app-name> --template bushido`

### npm

`npm init react-app <app-name> --template bushido`

### npx

`npx create-react-app <app-name> --template bushido`

### global

> If create-react-app is installed globally on your computer you can use this command:

`create-react -app <app-name> --template bushido`

Just like regular create-react-app but so much more. This template includes:

- @callstack/react-theme-provider
- axios
- bushido-strap
- node-sass
- react-redux
- react-router
- react-router-dom
- redux
- redux-logger
- redux-thunk
- serve
- styled-components
- webfontloader

There is also a `serve` script that let's your run `serve -s build` and a `build-and-serve` script that runs `npm run build && npm run serve`.

Redux boilerplate is set up with combine reducers and has a simple counter reducer used in one of the routes that use's react-redux's beautiful hooks to access actions and state from reducer's.

Reducer and action folders are inside a store folder so they are in the same spot.

```
| src |
| --- | components
| --- | *store* |
| --- | ------- |actions*
| --- | ------- | reducers*
| App.js
| index.js
```

Routes are set in App.js and all components for routes are built in components folder.

## BUSHIDO-STRAP

What is bushido-strap? Well, friend, it is a personal style library I create. It's just a bunch of nifty little styled components I've slowly crafted over time. Learning from my peers has probably been the greatest contribution to this project! It's already set up in this template, so check it out! [Here's the documentation, so you can to see everything this modest style library has to offer!](https://www.npmjs.com/package/bushido-strap)

### Using Google Fonts

WebFontLoader is used for this. Although, they do more than just load Google fonts efficiently. [Check out their documentation here!](https://github.com/typekit/webfontloader).

In the App.js you will see:

```javascript
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
```

All you need to do is add any Google font name to the h_font variable to change the heading (h1-h6) font for the whole site and add change the r_font variable to change the font for everything else.

### Adding A Custom Theme

React Theme Provider is set up so you can edit bushido-strap theme's or add your own to use! Just add a theme prop in the ThemeProvider in src/index.js and pass in your custom theme object. You can then import the useTheme hook from your scr/index.js and set `const theme = useTheme();` in your component and you can freely access any of your theme variables by simply accessing your theme variable: `color={theme.myCustomColor}`.

**Example:**

Create a theme.js file in your src folder:

```javascript
const theme = {
  myColorOne: "red",
  myColorTwo: "blue",
  // if you want to override bushido strap values just reassign them here
  gray0: "black",
};

export default theme;
```

Add your custom theme object to your src/index.js:

```javascript
import theme from "./theme";
```

Now pass that theme to your ThemeProvider:

```javascript
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
```

And now you can access both your and bushido-strap's theme objects by importing the useTheme hook from scr/index.js. Any overrides in your theme object will be favored over bushido-strap's theme. 👌

If you don't set up your own custom theme you can just `import theme from "bushido-strap/styled/theme` and use the default theme.
