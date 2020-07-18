// 'React' does not appear in the codes of this .js file
// But, it must imported becuase...
// Babble needs 'React' to convert jsx syntax into javascript
// e.g. jsx: const element = <h1>Hello World</h1>;
// e.g. javascript: var element = React.createElement("h1", null, "Hello World");
// REMEMBER! must import React even it you cannot see it being used below
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // from App.js | braces not needed because it is exported as default

// ReactDOM.render () method takes in two parameters
// first parameter is the rendered element e.g. <h1>hello world</h1>
// second parameter is the reference to the DOM object that the rendered element goes to

// <App /> comes from App.js and returns the rendered element
// App is imported at the start of the file
// document.getElementById('root') is the DOM where the rendered element goes to 
ReactDOM.render(
    <React.Fragment>
      <h1>Counters</h1>
      <App />
    </React.Fragment>,
  document.getElementById('root') //'root' is the id of the <div> in index.html
);
