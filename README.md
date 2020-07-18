# Learnig React by Example

This is my attempt to learn the react template by example. My notes are included in the codes as comments for future reference.

Some of the notes about core concepts are include below too.

[Demo](https://hongmei-codes.github.io/react_count/)


# My Notes
## Creating a react application
### <u>1st Way: From current directory</u>
In the terminal, navigate to the project folder and execute the following command. The '.' indictes current folder
```
npx create-react-app .
```
### <u>2nd Way: From one directory up</u>
In the terminal, navigate one directory up the project folder and execute the following command.
```
npx create-react-app example
```

Next, start the local server to view the default react application created. To start server, execute the following command in the terminal.
```
npm start
```

The React app is now created and ready for edits. The React app will reload automatically each time you save any changes.

To stop the local server, press `  ctrl + c  `.

## Components
A basic component looks like this.
```javascript
import React, { Component } from 'react';

class App extends Component {
   state = {}
   render() {
    return ()
   }
 } 

 export default App;
 ```
A component inherits from the Component class in React. The new component has a property: 'state'(an object) which usually contains data. It has a render() method that returns one rendered element. The component is then exported for use by other components.

## Deployment
To deploy React App for free, use GitHub pages and the tutorial is [here](https://github.com/hongmei-codes/react_test_deploy/blob/master/README.md)

---
<small>This project is based on [Mosh's React tutorial](https://www.youtube.com/watch?v=Ke90Tje7VS0).</small>
