# React Rendering Exploration

**Note:** This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). For more information, see [Created With Create React App](./created-with-create-react-app.md)

Using two "conceptual" component to check how React updates the dom.

## Components

**CurrentTime** uses `currentTime` from the `props` to render the current time. This component does not have a state, so it does not update `currentTime` every second; it only receives the value through the `props`

**MouseTracker** uses `mousePosition` (of type `Point`) from the `props` to render the current mouse coordinate over the document. This component does not have a state, so it does not update `mousePosition` when the users moves the cursor; it only receives the values through the `props`

## Implementations strategies

Both components `CurrentTime` and `MouseTracker` are implemented in different ways:
- As functional components using `React.FC`
- As pure components using `React.PureComponent`
- As pure components rendering the functional components (composition)
- As components using `React.Component` and explicitly implementing `shouldComponentUpdate`

## App component

**App** is the main component with the following responsibilities:
- to update the `state` keeping track of the mouse and the current time.
- to render the different implementations of `CurrentTime` and `MouseTracker`.

## How to use this repo
- install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) on your browser
- build and launch the local server by running
```
yarn start
```
- Navigate to http://localhost:3000/
- Inspect the webpage (Ctrl + Shift + I or F12 works on chrome)
- On the Dev Tools, open the "Components" tab (this is from **React Developer Tools**)
- Open the Settings by clicking the gear icon
- Enable "Highlight updates when components render"

After following this instructions, **React Developer Tools** will start highlighting each element (on the DOM) that gets re-rendered. Remember that: `CurrentTime` gets updated every second so you should see all the **current time** being highlighted. Additionally, if you move the mouse over the page, the **mouse position** values should also be updated.